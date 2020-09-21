for (let index = 0; index < 10; index++) {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(5000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.showString("Hello!")
}
basic.forever(function () {
	
})
