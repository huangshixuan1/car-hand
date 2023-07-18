function Left () {
    pins.servoWritePin(AnalogPin.P1, 10)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        Left()
    } else if (receivedNumber == 8) {
        Forward()
    } else if (receivedNumber == 6) {
        Right()
    } else if (receivedNumber == 2) {
        Back()
    } else {
        Stop()
    }
})
function Forward () {
    pins.servoWritePin(AnalogPin.P1, 90)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
function Back () {
    pins.servoWritePin(AnalogPin.P1, 90)
    sensors.DDMmotor(
    AnalogPin.P15,
    1,
    AnalogPin.P16,
    200
    )
}
function Right () {
    pins.servoWritePin(AnalogPin.P1, 170)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    200
    )
}
function Stop () {
    pins.servoWritePin(AnalogPin.P1, 90)
    sensors.DDMmotor(
    AnalogPin.P15,
    0,
    AnalogPin.P16,
    0
    )
}
Stop()
radio.setGroup(100)
