basic.forever(function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    music.ringTone(Math.map(input.lightLevel(), 0, 255, 500, 1000))
})
