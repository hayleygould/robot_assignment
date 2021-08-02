let signal = 0
let completion = 0
let text = 0
sensors.color1.onColorDetected(ColorSensorColor.Yellow, function () {
    motors.largeAD.tank(0, 0)
    signal = 1
    pause(500)
    music.playSoundEffectUntilDone(sounds.movementsArm3)
    brick.showValue("Completion", completion, 1)
    pause(1000)
    completion += 25
    brick.showValue("Completion", completion, 1)
    pause(1000)
    brick.clearScreen()
    pause(500)
    signal = 0
})
brick.buttonLeft.onEvent(ButtonEvent.Pressed, function () {
    completion = 0
})
sensors.color1.onColorDetected(ColorSensorColor.Blue, function () {
    motors.largeAD.tank(0, 0)
    signal = 1
    text = 1
    pause(500)
    for (let index = 0; index < 15; index++) {
        text += 1
        brick.showString("I detected a line!", text)
        pause(100)
    }
    brick.clearScreen()
    pause(1000)
    brick.showValue("Completion", completion, 1)
    pause(1000)
    completion += 25
    brick.showValue("Completion", completion, 1)
    pause(1000)
    brick.clearScreen()
    pause(500)
    signal = 0
})
sensors.color1.onColorDetected(ColorSensorColor.Red, function () {
    motors.largeAD.tank(0, 0)
    signal = 1
    pause(500)
    brick.showImage(images.informationAccept)
    pause(1000)
    brick.showValue("Completion", completion, 1)
    pause(1000)
    completion += 25
    brick.showValue("Completion", completion, 1)
    pause(1000)
    brick.clearScreen()
    pause(500)
    signal = 0
})
brick.buttonRight.onEvent(ButtonEvent.Pressed, function () {
    completion = 100
})
sensors.color1.onColorDetected(ColorSensorColor.Black, function () {
    motors.largeAD.tank(0, 0)
    signal = 1
    pause(500)
    brick.showValue("Completion", completion, 1)
    pause(1000)
    completion += 25
    brick.showValue("Completion", completion, 1)
    pause(1000)
    brick.clearScreen()
    pause(500)
    signal = 0
})
forever(function () {
    if (signal == 0 && completion < 100) {
        motors.largeAD.tank(25, 25)
    } else if (completion == 100) {
        sensors.color1.setThreshold(Light.Dark, 100)
        pause(500)
        motors.largeAD.tank(0, 0)
        pause(250)
        motors.largeAD.tank(25, -25, 180, MoveUnit.Degrees)
        pause(250)
        motors.largeAD.tank(25, 25, 1, MoveUnit.Rotations)
        pause(250)
        motors.largeAD.tank(25, -25, 180, MoveUnit.Degrees)
        pause(250)
        motors.largeAD.tank(25, 25, 2, MoveUnit.Rotations)
        pause(250)
        motors.largeAD.tank(25, -25, 180, MoveUnit.Degrees)
        pause(250)
        motors.largeAD.tank(25, 25, 1, MoveUnit.Rotations)
        pause(250)
        motors.largeAD.tank(25, -25, 180, MoveUnit.Degrees)
        pause(250)
        brick.showValue("Completion", completion, 1)
        pause(1000)
        completion = 0
        brick.showValue("Completion", completion, 1)
        pause(1000)
        brick.clearScreen()
        sensors.color1.setThreshold(Light.Dark, 10)
        completion = 0
        signal = 1
    } else {
        motors.stopAll()
    }
})
