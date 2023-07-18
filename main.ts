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
    } else if (receivedNumber == 7) {
    	
    } else if (receivedNumber == 9) {
    	
    } else if (receivedNumber == 1) {
    	
    } else if (receivedNumber == 3) {
    	
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
function Down () {
    sensors.DDMmotor(
    AnalogPin.P13,
    0,
    AnalogPin.P14,
    150
    )
}
function Raise () {
    sensors.DDMmotor(
    AnalogPin.P13,
    1,
    AnalogPin.P14,
    150
    )
}
function Open () {
    pins.servoWritePin(AnalogPin.P8, 0)
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
function Close () {
    pins.servoWritePin(AnalogPin.P8, 100)
}
Stop()
radio.setGroup(99)
