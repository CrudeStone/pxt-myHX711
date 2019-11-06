HX711.SetPIN_DOUT(PIN_DOUT.P6)
HX711.SetPIN_SCK(PIN_SCK.P7)
HX711.begin()
serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate9600
)
basic.forever(function () {
    serial.writeString("HX711 reading: ")
    serial.writeNumber(HX711.get_scale())
    serial.writeLine("")
    basic.pause(1000)
})