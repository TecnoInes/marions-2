controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f f . . 
        . . . . . . . f 2 2 2 2 2 f . . 
        . . f f f f f f 2 2 2 2 2 f . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 f . . 
        . . f f f f f f 2 2 2 2 2 f . . 
        . . . . . . . f 2 2 2 2 2 f . . 
        . . . . . . . f f f f f f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, ASTEROIDE, 0, -50)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    projectile.destroy()
    otherSprite.destroy(effects.confetti, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.trail, 500)
    scene.cameraShake(4, 500)
})
let projectile: Sprite = null
let projectile2: Sprite = null
let ASTEROIDE: Sprite = null
game.splash("BENVINGUTS A L'ESPAI", "Apreta A per començar i B per disparar ")
effects.starField.startScreenEffect()
ASTEROIDE = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 6 5 2 5 6 6 f . . . . 
    . . . f 6 6 6 6 6 6 6 6 f . . . 
    . . . f 6 6 f f f f 6 6 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 3 3 3 3 3 d f f . . 
    . . f d d f 3 3 3 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 3 3 3 3 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
ASTEROIDE.setPosition(78, 105)
controller.moveSprite(ASTEROIDE, 100, 100)
ASTEROIDE.setStayInScreen(true)
info.setLife(5)
game.onUpdate(function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . 5 f 5 f 5 . . . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . 5 3 3 3 5 . . . . . . . . 
        . . . 5 5 5 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    projectile.x += randint(0, scene.screenWidth())
    projectile.setKind(SpriteKind.Enemy)
})
