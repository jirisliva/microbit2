input.onButtonPressed(Button.A, function () {
    music.setVolume(music.volume() - 10)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(music.volume() + 10)
})
music.setVolume(12)
loops.everyInterval(100, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
    if (input.lightLevel() > 0) {
        music.ringTone(Math.map(input.lightLevel(), 0, 255, 500, 1000))
    }
})
