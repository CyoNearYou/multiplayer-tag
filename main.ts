namespace SpriteKind {
    export const tagger = SpriteKind.create()
    export const runner = SpriteKind.create()
    export const runner1 = SpriteKind.create()
    export const runner2 = SpriteKind.create()
    export const runner3 = SpriteKind.create()
    export const runner4 = SpriteKind.create()
    export const tagger1 = SpriteKind.create()
    export const thing = SpriteKind.create()
}
namespace StatusBarKind {
    export const Time = StatusBarKind.create()
}
controller.player4.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player4.isHittingTile(CollisionDirection.Bottom)) {
        player4.vy += gravity * -125
    } else if (player4doublejump == 1) {
        player4.vy += gravity * -65
        player4doublejump = 0
    }
})
controller.player4.onEvent(ControllerEvent.Connected, function () {
    player4connected = 1
    player4 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . . f 6 7 f f f f f f 7 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 6 6 8 8 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player4, assets.tile`p4spawn`)
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . . f 6 7 f f f f f f 7 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 6 6 8 8 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 7 7 7 7 6 6 f f f f . . . 
        . f 7 6 f f f f 7 7 7 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 6 6 6 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 7 7 7 7 6 6 f f f f . . . 
        . f 7 6 f f f f 7 7 7 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 7 7 e d d e f . . . . . 
        . . f f 8 8 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 7 7 7 7 6 6 f f f f . . . 
        . f 7 6 f f f f 7 7 7 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 7 7 7 e d d 4 . . . . . 
        . . . f 7 7 7 e d d e . . . . . 
        . . . f 6 6 6 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 7 7 7 7 6 6 f f f f . . . 
        . f 7 6 f f f f 7 7 7 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 7 7 7 7 e d d e . . . . 
        . . f f 8 8 6 6 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 7 7 7 7 6 f . 
        . . . f 6 7 7 7 f f f f 6 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 6 6 6 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 7 7 7 7 6 f . 
        . . . f 6 7 7 7 f f f f 6 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 7 7 f . . . 
        . . . . f f f e e f 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 7 7 7 7 6 f . 
        . . . f 6 7 7 7 f f f f 6 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 7 7 7 f . . . 
        . . . . . e d d e 7 7 7 f . . . 
        . . . . . f e e f 6 6 6 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 7 7 7 7 6 f . 
        . . . f 6 7 7 7 f f f f 6 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 7 7 7 7 f . . . 
        . . . . f e e f 6 6 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    characterAnimations.runFrames(
    player4,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . . f 6 7 f f f f f f 7 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 7 7 7 7 7 7 f 4 e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 6 6 8 8 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . . f 6 7 f f f f f f 7 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . e f e e 4 4 4 4 e e f e . . 
        . . 4 d f 7 7 7 7 7 7 f d 4 . . 
        . . 4 4 f 7 7 7 7 7 7 f 4 4 . . 
        . . . . f 6 6 8 8 6 6 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . f f 6 7 f f f f f f 7 6 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 7 7 e d d 4 e . . 
        . . . e d d e 7 7 e d d e . . . 
        . . . . e e f 8 8 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 7 7 7 7 7 7 6 6 f . . 
        . f f 6 7 f f f f f f 7 6 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 7 7 e d d 4 e . . 
        . . . e d d e 7 7 e d d e . . . 
        . . . . e e f 8 8 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 7 f e e e e f f . . . . 
        . . f 7 7 7 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 7 7 7 7 6 6 f f f f . . . 
        . f 7 6 f f f f 7 7 7 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 7 7 e d d e f . . . . . 
        . . f f 8 8 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player4,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 7 f . . . 
        . . . f f e e e e f 7 7 7 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 7 7 7 7 6 f . 
        . . . f 6 7 7 7 f f f f 6 7 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 7 7 f . . . 
        . . . . f f f e e f 8 8 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
    )
})
sprites.onOverlap(SpriteKind.tagger, SpriteKind.runner3, function (sprite, otherSprite) {
    if (cooldown == 0) {
        tagger = 3
        cooldown = 3
        time = 60
        info.changeScoreBy(1)
    }
})
controller.combos.attachCombo("udlra+b", function () {
    if (funni == 0) {
        game.splash("No.")
        funni += 1
    } else if (funni == 1) {
        game.splash("Go away.")
        funni += 1
    } else if (funni == 2) {
        game.splash("Fine. You want something?")
        game.splash("Take this.")
        if (player1connected == 1) {
            player1.startEffect(effects.confetti)
        }
        if (player2connected == 1) {
            player2.startEffect(effects.fire)
        }
        if (player3connected == 1) {
            player3.startEffect(effects.fountain)
        }
        if (player4connected == 1) {
            player4.startEffect(effects.hearts)
        }
        funni += 1
    } else if (funni == 3) {
        game.splash("What?")
        game.splash("You want more?")
        funni += 1
    } else if (funni == 4) {
        game.splash("No.")
        funni += 1
    } else if (funni == 5) {
        game.splash("Fine.")
        player1speed = 1.5
        player2speed = 1.5
        player3speed = 1.5
        player4speed = 1.5
        gravity = 1.25
        funni += 1
    } else {
        word = randint(0, 4)
        if (word == 0) {
            game.splash("Nope.")
        } else if (word == 1) {
            game.splash("No.")
        } else if (word == 2) {
            game.splash("No Way.")
        } else if (word == 3) {
            game.splash("Nuh uh.")
        } else {
            game.splash("Stop it.")
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player1.isHittingTile(CollisionDirection.Bottom)) {
        player1.vy += gravity * -125
    } else if (player1doublejump == 1) {
        player1.vy += gravity * -65
        player1doublejump = 0
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player2.vy += gravity * 500
})
controller.player4.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player4.vy += gravity * 500
})
sprites.onOverlap(SpriteKind.tagger, SpriteKind.runner4, function (sprite, otherSprite) {
    if (cooldown == 0) {
        tagger = 4
        cooldown = 3
        time = 60
        info.changeScoreBy(1)
    }
})
controller.player3.onEvent(ControllerEvent.Connected, function () {
    player3connected = 1
    player3 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 5 5 5 5 5 5 4 4 f . . 
        . . f 4 5 f f f f f f 5 4 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 5 5 5 5 5 5 f 4 e . . 
        . . 4 d f 5 5 5 5 5 5 f d 4 . . 
        . . 4 4 f 4 4 d d 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player3, assets.tile`p3spawn`)
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 5 5 5 5 5 5 4 4 f . . 
        . . f 4 5 f f f f f f 5 4 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 5 5 5 5 5 5 f 4 e . . 
        . . 4 d f 5 5 5 5 5 5 f d 4 . . 
        . . 4 4 f 4 4 d d 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 5 f e e e e f f . . . . 
        . . f 5 5 5 f e e e e f f . . . 
        . . f 4 4 4 4 f f e e e f . . . 
        . f 4 5 5 5 5 4 4 f f f f . . . 
        . f 5 4 f f f f 5 5 5 4 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 5 5 5 e d d 4 . . . . . 
        . . . f 5 5 5 e d d e . . . . . 
        . . . f d d 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 f e e e e f f . . . . 
        . . f 5 5 5 f e e e e f f . . . 
        . . f 4 4 4 4 f f e e e f . . . 
        . f 4 5 5 5 5 4 4 f f f f . . . 
        . f 5 4 f f f f 5 5 5 4 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 5 5 e d d e f . . . . . 
        . . f f d d f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 5 f e e e e f f . . . . 
        . . f 5 5 5 f e e e e f f . . . 
        . . f 4 4 4 4 f f e e e f . . . 
        . f 4 5 5 5 5 4 4 f f f f . . . 
        . f 5 4 f f f f 5 5 5 4 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 5 5 5 e d d 4 . . . . . 
        . . . f 5 5 5 e d d e . . . . . 
        . . . f d d 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 f e e e e f f . . . . 
        . . f 5 5 5 f e e e e f f . . . 
        . . f 4 4 4 4 f f e e e f . . . 
        . f 4 5 5 5 5 4 4 f f f f . . . 
        . f 5 4 f f f f 5 5 5 4 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 5 5 5 5 e d d e . . . . 
        . . f f d d 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 5 f . . . 
        . . . f f e e e e f 5 5 5 f . . 
        . . . f e e e f f 4 4 4 4 f . . 
        . . . f f f f 4 4 5 5 5 5 4 f . 
        . . . f 4 5 5 5 f f f f 4 5 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 5 5 5 f . . . 
        . . . . . e d d e 5 5 5 f . . . 
        . . . . . f e e f 4 d d f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 5 f . . . 
        . . . f f e e e e f 5 5 5 f . . 
        . . . f e e e f f 4 4 4 4 f . . 
        . . . f f f f 4 4 5 5 5 5 4 f . 
        . . . f 4 5 5 5 f f f f 4 5 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 5 5 f . . . 
        . . . . f f f e e f d d f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 5 f . . . 
        . . . f f e e e e f 5 5 5 f . . 
        . . . f e e e f f 4 4 4 4 f . . 
        . . . f f f f 4 4 5 5 5 5 4 f . 
        . . . f 4 5 5 5 f f f f 4 5 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 5 5 5 f . . . 
        . . . . . e d d e 5 5 5 f . . . 
        . . . . . f e e f 4 d d f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 5 f . . . 
        . . . f f e e e e f 5 5 5 f . . 
        . . . f e e e f f 4 4 4 4 f . . 
        . . . f f f f 4 4 5 5 5 5 4 f . 
        . . . f 4 5 5 5 f f f f 4 5 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 5 5 5 5 f . . . 
        . . . . f e e f 4 4 d d f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    characterAnimations.runFrames(
    player3,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 5 5 5 5 5 5 4 4 f . . 
        . . f 4 5 f f f f f f 5 4 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 5 5 5 5 5 5 f 4 e . . 
        . . 4 d f 5 5 5 5 5 5 f d 4 . . 
        . . 4 4 f 4 4 d d 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f 4 4 4 4 4 4 f f f . . 
        . . f f 4 5 5 5 5 5 5 4 4 f . . 
        . . f 4 5 f f f f f f 5 4 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . e f e e 4 4 4 4 e e f e . . 
        . . 4 d f 5 5 5 5 5 5 f d 4 . . 
        . . 4 4 f 5 5 5 5 5 5 f 4 4 . . 
        . . . . f 4 4 d d 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 4 4 f f f . . . . 
        . . . f f f 4 4 4 4 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 4 4 4 4 4 4 5 5 f . . 
        . f f 5 4 f f f f f f 4 5 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 5 5 e d d 4 e . . 
        . . . e d d e 5 5 e d d e . . . 
        . . . . e e f d d f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 4 4 f f f . . . . 
        . . . f f f 4 4 4 4 f f f . . . 
        . . f f f 5 5 5 5 5 5 f f f . . 
        . . f f 5 4 4 4 4 4 4 5 5 f . . 
        . f f 5 4 f f f f f f 4 5 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 5 5 e d d 4 e . . 
        . . . e d d e 5 5 e d d e . . . 
        . . . . e e f d d f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 5 f e e e e f f . . . . 
        . . f 5 5 5 f e e e e f f . . . 
        . . f 4 4 4 4 f f e e e f . . . 
        . f 4 5 5 5 5 4 4 f f f f . . . 
        . f 5 4 f f f f 5 5 5 4 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 5 5 e d d e f . . . . . 
        . . f f d d f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player3,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 5 f . . . 
        . . . f f e e e e f 5 5 5 f . . 
        . . . f e e e f f 4 4 4 4 f . . 
        . . . f f f f 4 4 5 5 5 5 4 f . 
        . . . f 4 5 5 5 f f f f 4 5 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 5 5 f . . . 
        . . . . f f f e e f d d f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
    )
})
sprites.onOverlap(SpriteKind.tagger, SpriteKind.runner1, function (sprite, otherSprite) {
    if (cooldown == 0) {
        tagger = 1
        cooldown = 3
        time = 60
        info.changeScoreBy(1)
    }
})
sprites.onOverlap(SpriteKind.tagger, SpriteKind.runner2, function (sprite, otherSprite) {
    if (cooldown == 0) {
        tagger = 2
        cooldown = 3
        time = 60
        info.changeScoreBy(1)
    }
})
controller.combos.attachCombo("bbbbbb", function () {
    if (player1connected == 1) {
        scaling.scaleToPixels(player1, 8, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player2connected == 1) {
        scaling.scaleToPixels(player2, 8, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player3connected == 1) {
        scaling.scaleToPixels(player3, 8, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player4connected == 1) {
        scaling.scaleToPixels(player4, 8, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player2.isHittingTile(CollisionDirection.Bottom)) {
        player2.vy += gravity * -125
    } else if (player2doublejump == 1) {
        player2.vy += gravity * -65
        player2doublejump = 0
    }
})
controller.combos.attachCombo("aaaaaa", function () {
    if (player1connected == 1) {
        scaling.scaleToPixels(player1, 32, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player2connected == 1) {
        scaling.scaleToPixels(player2, 32, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player3connected == 1) {
        scaling.scaleToPixels(player3, 32, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player4connected == 1) {
        scaling.scaleToPixels(player4, 32, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
})
controller.player3.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player3.vy += gravity * 500
})
controller.combos.attachCombo("dddd", function () {
    time = 90
})
controller.combos.attachCombo("a+ba+ba+b", function () {
    if (player1connected == 1) {
        scaling.scaleToPixels(player1, 16, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player2connected == 1) {
        scaling.scaleToPixels(player2, 16, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player3connected == 1) {
        scaling.scaleToPixels(player3, 16, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
    if (player4connected == 1) {
        scaling.scaleToPixels(player4, 16, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    }
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    player2connected = 1
    player2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 6 6 9 9 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player2, assets.tile`p2spawn`)
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 6 6 9 9 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 9 9 6 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 8 8 e d d e f . . . . . 
        . . f f 9 9 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 8 8 8 e d d 4 . . . . . 
        . . . f 8 8 8 e d d e . . . . . 
        . . . f 9 9 6 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 8 8 8 8 e d d e . . . . 
        . . f f 9 9 6 6 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 8 f . . . 
        . . . f f e e e e f 8 8 8 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 8 8 8 f . . . 
        . . . . . f e e f 6 9 9 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 8 f . . . 
        . . . f f e e e e f 8 8 8 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 8 8 f . . . 
        . . . . f f f e e f 9 9 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 8 f . . . 
        . . . f f e e e e f 8 8 8 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 8 8 8 f . . . 
        . . . . . e d d e 8 8 8 f . . . 
        . . . . . f e e f 6 9 9 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 8 f . . . 
        . . . f f e e e e f 8 8 8 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 8 8 8 8 f . . . 
        . . . . f e e f 6 6 9 9 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    characterAnimations.runFrames(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 8 8 8 8 8 8 f 4 e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 6 6 9 9 6 6 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . . f 6 8 f f f f f f 8 6 f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . e f e e 4 4 4 4 e e f e . . 
        . . 4 d f 8 8 8 8 8 8 f d 4 . . 
        . . 4 4 f 8 8 8 8 8 8 f 4 4 . . 
        . . . . f 6 6 9 9 6 6 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . f f 6 8 f f f f f f 8 6 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 8 8 e d d 4 e . . 
        . . . e d d e 8 8 e d d e . . . 
        . . . . e e f 9 9 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . . f f 6 8 8 8 8 8 8 6 6 f . . 
        . f f 6 8 f f f f f f 8 6 f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 8 8 e d d 4 e . . 
        . . . e d d e 8 8 e d d e . . . 
        . . . . e e f 9 9 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 8 f e e e e f f . . . . 
        . . f 8 8 8 f e e e e f f . . . 
        . . f 6 6 6 6 f f e e e f . . . 
        . f 6 8 8 8 8 6 6 f f f f . . . 
        . f 8 6 f f f f 8 8 8 6 f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 8 8 e d d e f . . . . . 
        . . f f 9 9 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 8 f . . . 
        . . . f f e e e e f 8 8 8 f . . 
        . . . f e e e f f 6 6 6 6 f . . 
        . . . f f f f 6 6 8 8 8 8 6 f . 
        . . . f 6 8 8 8 f f f f 6 8 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 8 8 f . . . 
        . . . . f f f e e f 9 9 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
    )
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    player1connected = 1
    player1 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    tiles.placeOnRandomTile(player1, assets.tile`p1spawn3`)
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.HittingWallDown)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight, Predicate.HittingWallDown)
    )
    characterAnimations.runFrames(
    player1,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . e f e e 4 4 4 4 e e f e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
        . . . . f 4 4 5 5 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 2 2 e d d 4 e . . 
        . . . e d d e 2 2 e d d e . . . 
        . . . . e e f 5 5 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    50,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f e . . 
        . . e 4 d d e 2 2 e d d 4 e . . 
        . . . e d d e 2 2 e d d e . . . 
        . . . . e e f 5 5 f e e . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player1,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight)
    )
})
controller.player3.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    if (player3.isHittingTile(CollisionDirection.Bottom)) {
        player3.vy += gravity * -125
    } else if (player3doublejump == 1) {
        player3.vy += gravity * -65
        player3doublejump = 0
    }
})
controller.player1.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    player1.vy += gravity * 500
})
let player3doublejump = 0
let player2doublejump = 0
let player1doublejump = 0
let word = 0
let player3: Sprite = null
let player3connected = 0
let player2: Sprite = null
let player2connected = 0
let player1: Sprite = null
let player1connected = 0
let cooldown = 0
let player4connected = 0
let player4doublejump = 0
let player4: Sprite = null
let tagger = 0
let time = 0
let player4speed = 0
let player3speed = 0
let player2speed = 0
let player1speed = 0
let gravity = 0
let funni = 0
funni = 0
let it = textsprite.create("it")
it.setOutline(1, 15)
tiles.setCurrentTilemap(tilemap`level1`)
scene.centerCameraAt(scene.cameraProperty(CameraProperty.X), scene.cameraProperty(CameraProperty.Y) + 16)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111ddd9999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111dddd99999999999999999999999999999999999999999999999999999999999
    9999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999111111111ddd9999999999999999999999999999999999999999999999999999999999
    999999999999999999911ddddd999999999999999999999999999999999999999999999999999999999999999111111111111dd999999999999999999999999999999999999999999999999999999999
    9999999999999999991111111dd9999999999999999999999999999999999999999999999999999999ddddddd111111111111dd999999999999999999999999999999999999999999999999999999999
    99999999999999999911111111d99999999999999999999999999999999999999999999999999999dddddddddd11111111111dd199999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd191ddd9999999999999999999999999999999999999999999999dd111111d1111111111111d111999999999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11ddddddddd9999999999999999999999999999999999999999dd111111111111111111111111119ddd9999999999999999999999999999999999999999999999999
    99999999999999999111111111dd11111111ddddd99999999999999999999999999999999999991dd11111111111111111111111111dddddd99999999999999999999999999999999999999999999999
    999999991dddddddd1111111111d11111111ddddd1999999999999999999999999999999999999dd11111111111111111111111111dd111ddd9999999999999999999999999999999999999999999999
    9999999ddddddddddd1111111111111111111111111999999999999999999999999999999999991d11111111111111111111111111dd1111dd9999999999999999999999999999999999999999999999
    9999991dd11111111dd111111111111111111111111199999999999999999999999999999999dddd11111111dd11111111111111111111111dd999999999999999999999999999999999999999999999
    999999dd1111111111111111111111111111111111119999999999999999999999999999999ddd1dd111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111111111111111111999999999999999999999999999999ddd1111111111dd111111111111111111111111dd999999999999999999999999999999999999999999999
    99999dd1111111111111111111111dd1111111111111999999999999999999999999999999dd1111111111111111111111111111111111111dd999999999999999999999999999999999999999999999
    99999111111111111111111111111dd1111111111111999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999991111111111111111111111111dd1111111111b1999999999999999999999999999999d1111111111111111111111111111111111111dd9999999999999999999999999999999999999999999999
    999999111111111111111111111111dd11bbb111bbb999999999999999999999999999999911111111111111111111111111dd111111111dd99999999999999999999999911dddd99999999999999999
    999999111111111111111111111111ddbbbbbbbbbb9999999999999999999999999999999911111111111111111111111111dd111111111d1999999999999999999999911111ddddd999999999999999
    99999991bb1111111111bbb111111bbb99999119999999999999999999999999999999999991111111111111111111111111dd11111111111999999999999999999999111111111ddd99111119999999
    99999999bbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999999999999999999999bbbbbbbbbbb1111111111111dd111111111199999999999999999ddddd1111111111ddd1111dd1199999
    9999999991bbbbbbbbbb9991bbbbb19999999999999999999999999999999999999999999999bbbbbbbbbbbbb11111111111ddbbbbbbbbb99999999999999999ddddddddd11111111dd1111dddd19999
    999999999999999999999999911199999999999999999999999999999999999999999999999999999999999bbbb1111111bbdbbbbbbb99999999999999999991d111111dd11111111dd1111111dd9999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999bbbbbbbbbbbb9999999999999999999d999991111111111111111111111111111dd9999
    9999999999999999999999999999999999999999999999999999999999ddddd99999999999999999999999999999bbbbb9999999999999999999dddddddddd1111111111111111111111111111dd1999
    999999999999999999999999999999999999999999999999dddddddddddddddddd9999999999999999999999999999999999999999999999999ddd11111ddddd11111111111111111111111111dd9999
    999999999999999999999999999999999999999999999911ddd111dddd111111dddd9999999999999999999999999999999999999999999999911111111111dd11111111111111111111111111dd9999
    999999999999999999999999999999999999ddddddddd1111111111dd111111111ddd999999999999999999999999999999999999999999999911111111111111111111111111111111111111dd19999
    99999999999999999999999999999999991dddddd1ddddd111111111111111111111dd119999999999999999999999999999999999999999999111111111111111111111111dd11111111111dd199999
    999999999999999999999999999999991111111111111dddd11111111111111111111d111111dd9999999999999999999999999999999999999111111111111111111111111dd11111111111d1199999
    99999999999999999999999999999991dd1111111111111dd11111111111111111111d111111dddd999999999999999999999999999999999999111111111111111111111ddddd111111111b19999999
    999999999999999999999999991ddddddddd1111111111111111111111111111111111111111111dd999999999999999999999999999999999999bbbbbbbbbbbbb111bbbbbbbbbbbbbbbbbbb99999999
    99999999999999999999999991111111111111111111111111111111111111dd1111111111111111dd99999999999999999999999999999999999bbb9999999bbbbbbbbbbbb99999999bbb9999999999
    99999999999999999999999991111111111111111111111111111111111111dd11111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999111111111111111111111111111111111111111dd1111111111111111d999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111111111111111111111111111111dd11111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999911111111111bbbbb1111dd1111bbbbbbbbbb11d111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999991bbb111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb119999999999999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999bbbbbbbbb9999999bb9999999999999999999bbbbbbbbbbbbbbbb99999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
scroller.scrollBackgroundWithSpeed(-10, 0)
game.splash("\"A\" to start!")
gravity = 1
player1speed = 1
player2speed = 1
player3speed = 1
player4speed = 1
time = 60
let timer2 = statusbars.create(30, 5, StatusBarKind.Time)
timer2.setColor(13, 12)
timer2.setBarBorder(1, 11)
timer2.setLabel("TIME")
timer2.max = 60
timer2.x = 80
timer2.y = 10
let players_lost = [
0,
0,
0,
0
]
tagger = randint(1, 4)
forever(function () {
    if (player1connected == 1) {
        if (player1.isHittingTile(CollisionDirection.Bottom)) {
            player1doublejump = 1
        }
    }
    if (player2connected == 1) {
        if (player2.isHittingTile(CollisionDirection.Bottom)) {
            player2doublejump = 1
        }
    }
    if (player3connected == 1) {
        if (player3.isHittingTile(CollisionDirection.Bottom)) {
            player3doublejump = 1
        }
    }
    if (player4connected == 1) {
        if (player4.isHittingTile(CollisionDirection.Bottom)) {
            player4doublejump = 1
        }
    }
})
forever(function () {
    if (player1connected == 1) {
        if (players_lost[0] == 1 && tagger == 1) {
            tagger = randint(1, 4)
            time = 60
            info.changeScoreBy(1)
        }
    }
    if (player2connected == 1) {
        if (players_lost[1] == 2 && tagger == 2) {
            tagger = randint(1, 4)
            time = 60
            info.changeScoreBy(1)
        }
    }
    if (player3connected == 1) {
        if (players_lost[2] == 3 && tagger == 3) {
            tagger = randint(1, 4)
            time = 60
            info.changeScoreBy(1)
        }
    }
    if (player4connected == 1) {
        if (players_lost[3] == 4 && tagger == 4) {
            tagger = randint(1, 4)
            time = 60
            info.changeScoreBy(1)
        }
    }
})
forever(function () {
    if (cooldown > 0) {
        pause(500)
        cooldown += -1
    }
})
forever(function () {
    if (player1connected == 1 && tagger == 1) {
        player1.setKind(SpriteKind.tagger)
    }
    if (player2connected == 1 && tagger == 2) {
        player2.setKind(SpriteKind.tagger)
    }
    if (player3connected == 1 && tagger == 3) {
        player3.setKind(SpriteKind.tagger)
    }
    if (player4connected == 1 && tagger == 4) {
        player4.setKind(SpriteKind.tagger)
    }
})
forever(function () {
    if (player1connected == 1 && !(tagger == 1)) {
        player1.setKind(SpriteKind.runner1)
    }
    if (player2connected == 1 && !(tagger == 2)) {
        player2.setKind(SpriteKind.runner2)
    }
    if (player3connected == 1 && !(tagger == 3)) {
        player3.setKind(SpriteKind.runner3)
    }
    if (player4connected == 1 && !(tagger == 4)) {
        player4.setKind(SpriteKind.runner4)
    }
})
forever(function () {
    if (player1connected == 1) {
        if (!(players_lost[0] == 1) && player1.tileKindAt(TileDirection.Center, assets.tile`thing`)) {
            players_lost[0] = 1
        }
    }
    if (player2connected == 1) {
        if (!(players_lost[1] == 2) && player2.tileKindAt(TileDirection.Center, assets.tile`thing`)) {
            players_lost[1] = 2
        }
    }
    if (player3connected == 1) {
        if (!(players_lost[2] == 3) && player3.tileKindAt(TileDirection.Center, assets.tile`thing`)) {
            players_lost[2] = 3
        }
    }
    if (player4connected == 1) {
        if (!(players_lost[3] == 4) && player4.tileKindAt(TileDirection.Center, assets.tile`thing`)) {
            players_lost[3] = 4
        }
    }
})
forever(function () {
    if (player4connected == 1) {
        if (players_lost[1] == 2 && (players_lost[2] == 3 && players_lost[3] == 4)) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "P1 Wins!")
            game.gameOver(true)
        } else if (players_lost[0] == 1 && (players_lost[2] == 3 && players_lost[3] == 4)) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "P2 Wins!")
            game.gameOver(true)
        } else if (players_lost[0] == 1 && (players_lost[1] == 2 && players_lost[3] == 4)) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "P3 Wins!")
            game.gameOver(true)
        } else if (players_lost[0] == 1 && (players_lost[1] == 2 && players_lost[2] == 3)) {
            game.setGameOverEffect(true, effects.confetti)
            game.setGameOverMessage(true, "P4 Wins!")
            game.gameOver(true)
        }
    } else {
        if (player3connected == 1) {
            if (players_lost[1] == 2 && players_lost[2] == 3) {
                game.setGameOverEffect(true, effects.confetti)
                game.setGameOverMessage(true, "P1 Wins!")
                game.gameOver(true)
            } else if (players_lost[0] == 1 && players_lost[2] == 3) {
                game.setGameOverEffect(true, effects.confetti)
                game.setGameOverMessage(true, "P2 Wins!")
                game.gameOver(true)
            } else if (players_lost[0] == 1 && players_lost[1] == 2) {
                game.setGameOverEffect(true, effects.confetti)
                game.setGameOverMessage(true, "P3 Wins!")
                game.gameOver(true)
            }
        } else {
            if (player2connected == 1) {
                if (players_lost[1] == 2) {
                    game.setGameOverEffect(true, effects.confetti)
                    game.setGameOverMessage(true, "P1 Wins!")
                    game.gameOver(true)
                } else if (players_lost[0] == 1) {
                    game.setGameOverEffect(true, effects.confetti)
                    game.setGameOverMessage(true, "P2 Wins!")
                    game.gameOver(true)
                }
            } else {
                if (player1connected == 1) {
                    if (players_lost[0] == 1) {
                        game.setGameOverEffect(false, effects.smiles)
                        game.setGameOverMessage(false, "You can't win lol")
                        game.gameOver(false)
                    }
                }
            }
        }
    }
})
forever(function () {
    timer2.value = time
})
forever(function () {
    if (time > 0) {
        pause(250)
        time += -1
    } else {
        if (player1connected == 1) {
            if (tagger == 1) {
                players_lost[0] = 1
            }
        }
        if (player2connected == 1) {
            if (tagger == 2) {
                players_lost[1] = 2
            }
        }
        if (player3connected == 1) {
            if (tagger == 3) {
                players_lost[2] = 3
            }
        }
        if (player4connected == 1) {
            if (tagger == 4) {
                players_lost[3] = 4
            }
        }
        tagger = randint(1, 4)
        time = 60
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (player1connected == 1) {
        if (players_lost[0] == 1) {
            tiles.placeOnRandomTile(player1, assets.tile`deathtrap`)
        }
    }
    if (player2connected == 1) {
        if (players_lost[1] == 2) {
            tiles.placeOnRandomTile(player2, assets.tile`deathtrap`)
        }
    }
    if (player3connected == 1) {
        if (players_lost[2] == 3) {
            tiles.placeOnRandomTile(player3, assets.tile`deathtrap`)
        }
    }
    if (player4connected == 1) {
        if (players_lost[3] == 4) {
            tiles.placeOnRandomTile(player4, assets.tile`deathtrap`)
        }
    }
})
forever(function () {
    if (player1connected == 0 && tagger == 1) {
        tagger = randint(1, 4)
    }
    if (player2connected == 0 && tagger == 2) {
        tagger = randint(1, 4)
    }
    if (player3connected == 0 && tagger == 3) {
        tagger = randint(1, 4)
    }
    if (player4connected == 0 && tagger == 4) {
        tagger = randint(1, 4)
    }
})
forever(function () {
    if (player1connected == 1 && tagger == 1) {
        it.setPosition(player1.x, player1.y - 16)
    }
    if (player2connected == 1 && tagger == 2) {
        it.setPosition(player2.x, player2.y - 16)
    }
    if (player3connected == 1 && tagger == 3) {
        it.setPosition(player3.x, player3.y - 16)
    }
    if (player4connected == 1 && tagger == 4) {
        it.setPosition(player4.x, player4.y - 16)
    }
})
forever(function () {
    if (player1connected == 1) {
        controller.player1.moveSprite(player1, player1speed * 100, 0)
    }
    if (player2connected == 1) {
        controller.player2.moveSprite(player2, player2speed * 100, 0)
    }
    if (player3connected == 1) {
        controller.player3.moveSprite(player3, player3speed * 100, 0)
    }
    if (player4connected == 1) {
        controller.player4.moveSprite(player4, player4speed * 100, 0)
    }
})
forever(function () {
    if (player1connected == 1) {
        player1.vy += gravity * 5
    }
    if (player2connected == 1) {
        player2.vy += gravity * 5
    }
    if (player3connected == 1) {
        player3.vy += gravity * 5
    }
    if (player4connected == 1) {
        player4.vy += gravity * 5
    }
})
