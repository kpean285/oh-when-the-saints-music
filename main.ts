input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        basic.showIcon(IconNames.StickFigure)
        basic.showLeds(`
            . . # . .
            # # # # #
            . . # . .
            . # . # .
            . # . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C E F G C E F G ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E F G E C E D ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E E D C E G G F ", 100), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C E F G E C D C ", 100), music.PlaybackMode.UntilDone)
})
