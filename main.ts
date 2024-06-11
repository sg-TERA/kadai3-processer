radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 123456789) {
        basic.showString("OK")
    }
    if (receivedNumber == 1) {
        pins.servoWritePin(AnalogPin.P1, 0)
    }
    if (receivedNumber == 2) {
        pins.servoWritePin(AnalogPin.P2, 180)
    }
    if (receivedNumber == 3) {
        pins.servoWritePin(AnalogPin.P1, 90)
        pins.servoWritePin(AnalogPin.P2, 90)
    }
})
radio.setGroup(9)
basic.forever(function () {
    basic.showNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
})
