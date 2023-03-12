function Plot () {
    basic.clearScreen()
    led.plot(Math.round(x / s), Math.round(y / s))
}
let y = 0
let x = 0
let s = 0
s = 10
let max = s * 4
x = s * 2
y = s * 2
led.setBrightness(50)
Plot()
loops.everyInterval(100, function () {
    x = x + input.rotation(Rotation.Roll)
    y = y + input.rotation(Rotation.Pitch)
    if (y > max) {
        y = max
    } else if (y < 0) {
        y = 0
    }
    if (x > max) {
        x = max
    } else if (x < 0) {
        x = 0
    }
    Plot()
})
