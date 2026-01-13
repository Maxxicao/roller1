namespace SpriteKind {
    export const hitbox = SpriteKind.create()
    export const coin = SpriteKind.create()
    export const Particle = SpriteKind.create()
    export const sawblade = SpriteKind.create()
    export const letter = SpriteKind.create()
    export const fake = SpriteKind.create()
    export const checkpoint = SpriteKind.create()
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile15
    `, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
function restartlevel() {
    
    if (practicemode == false) {
        sprites.destroy(camera)
        sprites.destroyAllSpritesOfKind(SpriteKind.coin)
        sprites.destroyAllSpritesOfKind(SpriteKind.Particle)
        music.stopAllSounds()
        attempts += 1
        gravity = 0
        loadLevel(currentlevelisforum, currentlevel)
        if (brightflash == true) {
            color.setPalette(color.originalPalette)
            brightflash = false
        }
        
        hitwall = false
    }
    
}

function noparticles() {
    
    particletoggle = false
}

function loadingcreen_() {
    
    color.startFade(color.White, color.originalPalette, 1000)
    music.play(music.createSoundEffect(WaveShape.Square, 1272, 4858, 68, 72, 700, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    loadingscreen = sprites.create(img`
            4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144444444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144444444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144444444444444444444444
                    4411166666666666661116666666666666611111666666666666111666666666666666111777777777771111177777777777771117777777777711177777777777777711144444444444444444444444
                    4411166666666666661116666666666666611111666666666666111666666666666666111777777777771111177777777777771117777777777711177777777777777711144444444444444444444444
                    4411166666666666661116666666666666611111666666666666111666666666666666111777777777771111177777777777771117777777777711177777777777777711144444444444444444444444
                    4411166666111666661116666111116666666111666661111111111111116666611111111777711111777711177777111777771117777111111111111111777771111111144444444444444444444444
                    4411166666111666661116666111116666666111666661111111111111116666611111111777711111777711177777111777771117777111111111111111777771111111144444444444444444444444
                    4411166666111666661116666111111116666111666661111111111111116666611111111777711111777711177777111777771117777111111111111111777771111111144444441111111144444444
                    4411166666111666661116666111111116666111666661111111111441116666611144111777711111777711177777111777771117777111444444444111777771114444444444441717818144444444
                    4411166666111666661116666111116666666111666661111111111441116666611144111777711111777711177777111777771117777111444444444111777771114444444444111777888111444444
                    4411166666111666661116666111116666666111666661111111111441116666611144111777711111777711177777111777771117777111444444444111777771114444444444141777888141444444
                    4411155555555555551115555555555555511111555555555555111441115555511144111888888888881111188888888888881118888111444444444111888881114444444444141176581141444444
                    4411155555555555551115555555555555511111555555555555111441115555511144111888888888881111188888888888881118888111444444444111888881114444444444144166551441444444
                    4411155555111555551115555111115555511111111111155555111441115555511144111888811188881111188888111888881118888111444444444111888881114444444444141166551141444444
                    4411155555111555551115555111115555555511111111155555111441115555511144111888811188888811188888111888881118888111444444444111888881114444444444111666555111444444
                    4411155555111555551115555111115555555511111111155555111441115555511144111888811188888811188888111888881118888111444444444111888881114444444444111661515111444444
                    4411155555111555551115555111111115555511111111155555111441115555511144111888811111188811188888111888881118888111444444444111888881114444444444411666555114444444
                    4411155555111555551115555111111115555511111111155555111441115555511144111888811111188811188888111888881118888111111111144111888881114444444444441166551144444444
                    4411155555111555551115555111115555555511111111155555111441115555511144111888811111188811188888111888881118888111111111144111888881111111111111444111111444444444
                    4411155555111555551115555111115555555511111111155555111441115555511144111888811111188811188888111888881118888111111111144111888881111111111111444414414444444444
                    4411155555111555551115555555555555511111555555555555111441115555511144111888811111188811188888111888881118888888888811144111888881111111111111444414414444444444
                    4411155555111555551115555555555555511111555555555555111441115555511144111888811111188811188888111888881118888888888811144111888888888811188111444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccccccccccccccaaacccccccccccccaaacccccccccccccccccccaaacccccccccccaaacccccccccccccaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccccccccccccccaaacccccccccccccaaacccccccccccccccccccaaacccccccccccaaacccccccccccccaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaaaaaaaaaaaaaacccccaaacccccaaaccccaaacccccaaaccccaaaccccaaaaaaaaaacccccaaaaaaaaaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaacccccccccaaacccccccccccccaaaccccaaacccccaaaccccaaacccccccccccaaacccccccccccccaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444aaaccccaaacccccccccaaacccccccccccccaaaccccaaacccccaaaccccaaacccccccccccaaacccccccccccccaaa444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaa2222222aaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaa222222222222222222aaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaaaaaaaaaaaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaaaaaaaaa222aaaaaaaaaaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaaaaaaaaaaaaaa222aaaaa222aaaaa222aaaa222aaaaa222aaaa222aaaaaaaaaaa222aaaaaaaaaaaaa222444
                    4444444444444444444444444444444444444444444444444444444444444444444222aaaaaaaaaaaaaaaa22222222222222222222222222222222222222222222222222222222222222222222222444
                    4444444444444444444444444444444444444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444
                    4444444444444444444444444444444444444444444444444444444444444444444222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    44111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11144
                    44111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11144
                    44111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11144
                    44111fff................................................................................................................................................fff11144
                    44111fff................................................................................................................................................fff11144
                    44111fff................................................................................................................................................fff11144
                    44111fff................................................................................................................................................fff11144
                    44111fff................................................................................................................................................fff11144
                    44111fff................................................................................................................................................fff11144
                    44111bbb................................................................................................................................................bbb11144
                    44111bbb................................................................................................................................................bbb11144
                    44111bbb................................................................................................................................................bbb11144
                    44111bbb................................................................................................................................................bbb11144
                    44111bbb................................................................................................................................................bbb11144
                    44111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11144
                    44111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11144
                    44111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11144
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    4411111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111144
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
                    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
        `, SpriteKind.Player)
    Loading.loadingScreen2(randint(1, 2), 0, 7, -1, HorizontalDirections.Right)
    sprites.destroy(loadingscreen)
    loadmenu_()
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile63
    `, function on_overlap_tile2(sprite2: Sprite, location2: tiles.Location) {
    
    color.Darken.startScreenEffect(500)
    brightflash = false
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile18
    `, function on_overlap_tile3(sprite3: Sprite, location3: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after2() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile22
    `, function on_overlap_tile4(sprite4: Sprite, location4: tiles.Location) {
    game.splash("" + lvname + " - 100%", "Coin Acquired? " + ("" + getcoin))
    game.splash("Attempts: " + ("" + attempts))
    color.startFade(color.originalPalette, color.Black, 500)
    game.reset()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        tile71
    `, function on_overlap_tile5(sprite5: Sprite, location5: tiles.Location) {
    color.startFade(color.originalPalette, color.Black, 500)
})
function forumlevels2() {
    
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`
        level28
    `)
    customlevels_p2 = miniMenu.createMenu(miniMenu.createMenuItem("Instinct - Taser", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Future - GRIND", img`
                . 2 . . . . 1 . 
                        2 f 2 2 1 1 b 1 
                        2 2 e e d d 1 1 
                        2 e 7 e d 8 d 1 
                        2 e e e d d d 1 
                        1 d b f 2 9 1 1 
                        1 d f b 9 2 1 1 
                        1 1 d d 1 1 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Unnamed 12 - unknown", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Ember - Blobbey", img`
                . f f f f 6 6 6 6 . 
                        f f 2 2 2 1 1 1 6 6 
                        f 2 2 5 5 4 4 1 1 6 
                        f 2 2 2 2 1 1 1 1 6 
                        f 2 5 2 5 4 1 4 1 6 
                        6 1 4 4 1 1 3 3 1 5 
                        6 1 4 1 4 3 1 3 1 5 
                        6 1 1 4 4 3 3 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("Unnamed 14 - unknown", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Unknown - JK1027", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Chalenge impossibel - beet", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Random Access Memory - JustAnotherGdPlayer", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Frost - Blobbey", img`
                . f f f f 6 6 6 6 . 
                        f f 2 2 2 1 1 1 6 6 
                        f 2 2 5 5 4 4 1 1 6 
                        f 2 2 2 2 1 1 1 1 6 
                        f 2 5 2 5 4 1 4 1 6 
                        6 1 4 4 1 1 3 3 1 5 
                        6 1 4 1 4 3 1 3 1 5 
                        6 1 1 4 4 3 3 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("CyberNet - PixelDoodle", img`
                . f 2 f f 6 6 1 6 . 
                        f 2 f 2 2 1 1 b 1 6 
                        f 2 2 d d 2 2 1 1 6 
                        f 2 d 7 d 2 8 2 1 6 
                        f 2 d d d 2 2 2 1 6 
                        6 1 2 b f 2 9 1 1 5 
                        6 1 2 f b 9 2 1 1 5 
                        6 1 1 2 2 1 1 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("Small Space - Buttertoast", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("BACK"))
    customlevels_p2.setDimensions(161, 120)
    customlevels_p2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    customlevels_p2.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    customlevels_p2.x = 80
    customlevels_p2.y = 60
    customlevels_p2.onButtonPressed(controller.A, function on_button_pressed(selection: any, selectedIndex: number) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        color.startFade(color.originalPalette, color.Black, 100)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 100)
        if (true) {
            sprites.destroy(r)
            sprites.destroy(o)
            sprites.destroy(l)
            sprites.destroy(l2)
            sprites.destroy(e)
            sprites.destroy(r2)
        }
        
        customlevels_p2.close()
        if (gamestart == false) {
            if (selection == "BACK") {
                game.reset()
            } else {
                attempts = 1
                forummenupage = 1
                music.stopAllSounds()
                music.play(music.createSong(hex`
                        00c8000408010100001c00010a006400f401640000040000000000000000000000000005000004180000000200011d02000400012404000600012706000800012c
                    `), music.PlaybackMode.UntilDone)
                loadLevel(true, selectedIndex)
            }
            
        }
        
    })
}

function forummenu3() {
    
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`
        level28
    `)
    customlevels_p3 = miniMenu.createMenu(miniMenu.createMenuItem("The Glory - Taser", img`
                . 2 . . . . 1 . 
                        2 f 2 2 1 1 b 1 
                        2 2 4 4 3 3 1 1 
                        2 4 7 4 3 8 3 1 
                        2 4 4 4 3 3 3 1 
                        1 3 b f 2 9 1 1 
                        1 3 f b 9 2 1 1 
                        1 1 3 3 1 1 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Lobotomy Roll - Unknown", img`
                . 2 2 2 1 1 1 . 
                        2 2 7 7 8 8 1 1 
                        2 7 2 7 8 1 8 1 
                        2 7 7 7 8 8 8 1 
                        1 8 1 8 9 1 9 1 
                        1 8 8 1 1 9 9 1 
                        1 1 8 8 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("buffer test - AbstractDesigner", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Iron Factory - AbstractDesigner", img`
                . f 2 f f 6 6 1 6 . 
                        f 2 f 2 2 1 1 b 1 6 
                        f 2 2 d d 2 2 1 1 6 
                        f 2 d 7 d 2 8 2 1 6 
                        f 2 d d d 2 2 2 1 6 
                        6 1 2 b f 2 9 1 1 5 
                        6 1 2 f b 9 2 1 1 5 
                        6 1 1 2 2 1 1 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("NOT_TROLL.exe", img`
                . 2 2 2 1 1 1 . 
                        2 2 7 7 8 8 1 1 
                        2 7 2 7 8 1 8 1 
                        2 7 7 7 8 8 8 1 
                        1 8 1 8 9 1 9 1 
                        1 8 8 1 1 9 9 1 
                        1 1 8 8 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("BACK"))
    customlevels_p3.setDimensions(160, 120)
    customlevels_p3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    customlevels_p3.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    customlevels_p3.x = 80
    customlevels_p3.y = 60
    if (true) {
        sprites.destroy(r)
        sprites.destroy(o)
        sprites.destroy(l)
        sprites.destroy(l2)
        sprites.destroy(e)
        sprites.destroy(r2)
    }
    
    customlevels_p3.onButtonPressed(controller.A, function on_button_pressed2(selection2: any, selectedIndex2: number) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        color.startFade(color.originalPalette, color.Black, 100)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 100)
        customlevels_p3.close()
        if (gamestart == false) {
            if (selection2 == "BACK") {
                game.reset()
            } else {
                attempts = 1
                forummenupage = 2
                music.stopAllSounds()
                music.play(music.createSong(hex`
                        00c8000408010100001c00010a006400f401640000040000000000000000000000000005000004180000000200011d02000400012404000600012706000800012c
                    `), music.PlaybackMode.UntilDone)
                loadLevel(true, selectedIndex2)
            }
            
        }
        
    })
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile42
    `, function on_overlap_tile6(sprite6: Sprite, location6: tiles.Location) {
    
    speed = 1
    roller.setVelocity(46, 0)
    noparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile42
            `, assets.tile`
                myTile46
            `)
        timer.after(200, function on_after3() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile46
                `, assets.tile`
                    myTile42
                `)
        })
    }
    
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile38
    `, function on_overlap_tile7(sprite7: Sprite, location7: tiles.Location) {
    
    speed = 4
    roller.setVelocity(100, 0)
    speedparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile38
            `, assets.tile`
                myTile46
            `)
        timer.after(200, function on_after4() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile46
                `, assets.tile`
                    myTile38
                `)
        })
    }
    
})
function forumpage() {
    
    forumpages = miniMenu.createMenu(miniMenu.createMenuItem("PAGE 1"), miniMenu.createMenuItem("PAGE 2"), miniMenu.createMenuItem("PAGE 3"), miniMenu.createMenuItem("BACK"))
    forumpages.setDimensions(160, 60)
    forumpages.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    forumpages.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    forumpages.x = 80
    forumpages.y = 105
    forumpages.onButtonPressed(controller.A, function on_button_pressed3(selection3: any, selectedIndex3: any) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        color.startFade(color.originalPalette, color.Black, 100)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 100)
        forummenupage = 0
        forumpages.close()
        if (menustart == false) {
            if (selectedIndex3 == 0) {
                ForumLevels()
            } else if (selectedIndex3 == 1) {
                forumlevels2()
            } else if (selectedIndex3 == 2) {
                forummenu3()
            } else if (selection3 == "BACK") {
                game.reset()
            }
            
        }
        
    })
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile95
    `, function on_overlap_tile8(sprite8: Sprite, location8: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after5() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
function loadLevel(forum: boolean, id2: number) {
    
    currentlevel = id2
    currentlevelisforum = forum
    if (forum) {
        if (forummenupage == 0) {
            if (id2 == 0) {
                lvname = "Metropolis"
                scene.setBackgroundColor(11)
                tiles.setSmallTilemap(tilemap`
                    level30
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
            } else if (id2 == 1) {
                lvname = "Fractured"
                scene.setBackgroundColor(12)
                tiles.setSmallTilemap(tilemap`
                    level32
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile80
                    `)
            } else if (id2 == 2) {
                lvname = "Inverted"
                scene.setBackgroundColor(15)
                tiles.setSmallTilemap(tilemap`
                    level29
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile83
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile54
                    `, assets.tile`
                        myTile83
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile61
                    `, assets.tile`
                        myTile83
                    `)
                music.play(music.createSong(hex`
                        0032000408030101001c000f05001202c102c20100040500280000006400280003140006020004a000000002000293a8040006000297a608000a00029a250c000e00029fa81000120001a614001600012518001a000293a81c001e000297a620002200029a2524002600029fa828002a0001a62c002e000125300032000212a63400360002951e38003a00029aa13c003e00021ea640004200011e4400460001a148004a000212a64c004e0002951e50005200029aa154005600021ea658005a00011e5c005e0001a1
                    `), music.PlaybackMode.LoopingInBackground)
            } else if (id2 == 3) {
                lvname = "Fitzgerald"
                scene.setBackgroundColor(11)
                tiles.setSmallTilemap(tilemap`
                    level60
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile54
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile61
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile79
                    `)
            } else if (id2 == 4) {
                lvname = "SMASH!"
                scene.setBackgroundColor(2)
                tiles.setSmallTilemap(tilemap`
                    level61
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile85
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile85
                    `)
            } else if (id2 == 5) {
                lvname = "Peaceful"
                scene.setBackgroundColor(12)
                tiles.setSmallTilemap(tilemap`
                    level62
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile84
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile84
                    `)
                tileUtil.coverTile(tiles.getTileLocation(77, 10), assets.tile`
                        myTile8
                    `)
                tileUtil.coverTile(tiles.getTileLocation(79, 6), assets.tile`
                        myTile24
                    `)
            } else if (id2 == 6) {
                game.splash("LEVEL LOAD FAIL")
                game.reset()
                lvname = "Forever Blue"
                scene.setBackgroundColor(4)
                tiles.setSmallTilemap(tilemap`
                    level65
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile72
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile72
                    `)
            } else if (id2 == 7) {
                lvname = "Space Invaders"
                scene.setBackgroundColor(1)
                tiles.setSmallTilemap(tilemap`
                    level66
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile84
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile84
                    `)
            } else if (id2 == 8) {
                lvname = "Unnamed 7"
                scene.setBackgroundColor(10)
                tiles.setSmallTilemap(tilemap`
                    level67
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile78
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile78
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile78
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile78
                    `)
            } else if (id2 == 9) {
                lvname = "Bloodpuzzle"
                scene.setBackgroundColor(4)
                tiles.setSmallTilemap(tilemap`
                    level68
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile72
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile72
                    `)
                coinplace = false
            } else if (id2 == 10) {
                lvname = "Unnamed 9"
                scene.setBackgroundColor(10)
                tiles.setSmallTilemap(tilemap`
                    level72
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile78
                    `)
                music.play(music.createSong(hex`
                        0096000408100303001c0001dc00690000045e01000400000000000000000000056400010400036000000018000124400058000127600078000125800098000124c000d8000127e000f000012cf000f80001abf8000001012c000118010124400158010127600178010125800198010124c001d8010127e001f001012cf001f80101abf8010002012c06001c00010a006400f401640000040000000000000000000000000000000002000300000400011404000800011b08000c0001270c001000012010001400012714001800012018001c0001271c002000011b20002400011624002800011d28002c0001272c003000012230003400012734003800012238003c0001273c004000011d40004400011844004800019f48004c0001274c005000012450005400012754005800012458005c0001275c006000019f60006400012064006800012268006c0001276c007000012470007400012c7400780001ab78007c0001297c008000012c80008400011484008800011b88008c0001278c009000012090009400012794009800012098009c0001279c00a000011ba000a4000116a400a800011da800ac000127ac00b0000122b000b4000127b400b8000122b800bc000127bc00c000011dc000c4000118c400c800019fc800cc000127cc00d0000124d000d4000127d400d8000124d800dc000127dc00e000019fe000e4000120e400e8000122e800ec000127ec00f0000124f000f400012cf400f80001abf800fc000129fc000001012c00010401011404010801011b08010c0101270c011001012010011401012714011801012018011c0101271c012001011b20012401011624012801011d28012c0101272c013001012230013401012734013801012238013c0101273c014001011d40014401011844014801019f48014c0101274c015001012450015401012754015801012458015c0101275c016001019f60016401012064016801012268016c0101276c017001012470017401012c7401780101ab78017c0101297c018001012c80018401011484018801011b88018c0101278c019001012090019401012794019801012098019c0101279c01a001011ba001a4010116a401a801011da801ac010127ac01b0010122b001b4010127b401b8010122b801bc010127bc01c001011dc001c4010118c401c801019fc801cc010127cc01d0010124d001d4010127d401d8010124d801dc010127dc01e001019fe001e4010120e401e8010122e801ec010127ec01f0010124f001f401012cf401f80101abf801fc010129fc010002012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a0010001010101040801090103110406100111010104180119010311040620012101010428012901031104063001310101043801390103110406400141010104480149010311040650015101010458015901031104066001610101046801690103110406700171010104780179010311040680018101010484018501010488018901031104068c018d01010490019101010494019501010498019901031104069c019d010104a001a1010104a401a5010104a801a90103110406ac01ad010104b001b1010104b401b5010104b801b90103110406bc01bd010104c001c1010104c201c3010104c401c5010104c601c7010104c801c90103110406ca01cb010104cc01cd010104ce01cf010104d001d1010104d201d3010104d401d5010104d601d7010104d801d90103110406da01db010104dc01dd010104de01df010104e001e1010104e201e3010104e401e5010104e601e7010104e801e90103110406ea01eb010104ec01ed010104ee01ef010104f001f1010104f201f3010104f401f5010104f601f7010104f801f90103110406fa01fb010104fc01fd010104fe01ff010104
                    `), music.PlaybackMode.InBackground)
            }
            
        } else if (forummenupage == 1) {
            if (id2 == 0) {
                lvname = "Instinct"
                scene.setBackgroundColor(6)
                tiles.setSmallTilemap(tilemap`
                    level74
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile74
                    `)
            } else if (id2 == 1) {
                lvname = "FUTURE"
                scene.setBackgroundColor(3)
                tiles.setSmallTilemap(tilemap`
                    level75
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile71
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile71
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile71
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile63
                    `, assets.tile`
                        myTile71
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile71
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile84
                    `)
            } else if (id2 == 2) {
                lvname = "Unnamed 12"
                scene.setBackgroundColor(15)
                tiles.setSmallTilemap(tilemap`
                    level77
                `)
                music.play(music.createSong(hex`
                        0096000408100303001c0001dc00690000045e01000400000000000000000000056400010400036000000018000124400058000127600078000125800098000124c000d8000127e000f000012cf000f80001abf8000001012c000118010124400158010127600178010125800198010124c001d8010127e001f001012cf001f80101abf8010002012c06001c00010a006400f401640000040000000000000000000000000000000002000300000400011404000800011b08000c0001270c001000012010001400012714001800012018001c0001271c002000011b20002400011624002800011d28002c0001272c003000012230003400012734003800012238003c0001273c004000011d40004400011844004800019f48004c0001274c005000012450005400012754005800012458005c0001275c006000019f60006400012064006800012268006c0001276c007000012470007400012c7400780001ab78007c0001297c008000012c80008400011484008800011b88008c0001278c009000012090009400012794009800012098009c0001279c00a000011ba000a4000116a400a800011da800ac000127ac00b0000122b000b4000127b400b8000122b800bc000127bc00c000011dc000c4000118c400c800019fc800cc000127cc00d0000124d000d4000127d400d8000124d800dc000127dc00e000019fe000e4000120e400e8000122e800ec000127ec00f0000124f000f400012cf400f80001abf800fc000129fc000001012c00010401011404010801011b08010c0101270c011001012010011401012714011801012018011c0101271c012001011b20012401011624012801011d28012c0101272c013001012230013401012734013801012238013c0101273c014001011d40014401011844014801019f48014c0101274c015001012450015401012754015801012458015c0101275c016001019f60016401012064016801012268016c0101276c017001012470017401012c7401780101ab78017c0101297c018001012c80018401011484018801011b88018c0101278c019001012090019401012794019801012098019c0101279c01a001011ba001a4010116a401a801011da801ac010127ac01b0010122b001b4010127b401b8010122b801bc010127bc01c001011dc001c4010118c401c801019fc801cc010127cc01d0010124d001d4010127d401d8010124d801dc010127dc01e001019fe001e4010120e401e8010122e801ec010127ec01f0010124f001f401012cf401f80101abf801fc010129fc010002012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a0010001010101040801090103110406100111010104180119010311040620012101010428012901031104063001310101043801390103110406400141010104480149010311040650015101010458015901031104066001610101046801690103110406700171010104780179010311040680018101010484018501010488018901031104068c018d01010490019101010494019501010498019901031104069c019d010104a001a1010104a401a5010104a801a90103110406ac01ad010104b001b1010104b401b5010104b801b90103110406bc01bd010104c001c1010104c201c3010104c401c5010104c601c7010104c801c90103110406ca01cb010104cc01cd010104ce01cf010104d001d1010104d201d3010104d401d5010104d601d7010104d801d90103110406da01db010104dc01dd010104de01df010104e001e1010104e201e3010104e401e5010104e601e7010104e801e90103110406ea01eb010104ec01ed010104ee01ef010104f001f1010104f201f3010104f401f5010104f601f7010104f801f90103110406fa01fb010104fc01fd010104fe01ff010104
                    `), music.PlaybackMode.InBackground)
            } else if (id2 == 3) {
                lvname = "Ember"
                scene.setBackgroundColor(4)
                tiles.setSmallTilemap(tilemap`
                    level78
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile72
                    `)
            } else if (id2 == 4) {
                lvname = "Unnamed 14"
                scene.setBackgroundColor(7)
                tiles.setSmallTilemap(tilemap`
                    level79
                `)
                coinplace = false
                music.play(music.createSong(hex`
                        0096000408100303001c0001dc00690000045e01000400000000000000000000056400010400036000000018000124400058000127600078000125800098000124c000d8000127e000f000012cf000f80001abf8000001012c000118010124400158010127600178010125800198010124c001d8010127e001f001012cf001f80101abf8010002012c06001c00010a006400f401640000040000000000000000000000000000000002000300000400011404000800011b08000c0001270c001000012010001400012714001800012018001c0001271c002000011b20002400011624002800011d28002c0001272c003000012230003400012734003800012238003c0001273c004000011d40004400011844004800019f48004c0001274c005000012450005400012754005800012458005c0001275c006000019f60006400012064006800012268006c0001276c007000012470007400012c7400780001ab78007c0001297c008000012c80008400011484008800011b88008c0001278c009000012090009400012794009800012098009c0001279c00a000011ba000a4000116a400a800011da800ac000127ac00b0000122b000b4000127b400b8000122b800bc000127bc00c000011dc000c4000118c400c800019fc800cc000127cc00d0000124d000d4000127d400d8000124d800dc000127dc00e000019fe000e4000120e400e8000122e800ec000127ec00f0000124f000f400012cf400f80001abf800fc000129fc000001012c00010401011404010801011b08010c0101270c011001012010011401012714011801012018011c0101271c012001011b20012401011624012801011d28012c0101272c013001012230013401012734013801012238013c0101273c014001011d40014401011844014801019f48014c0101274c015001012450015401012754015801012458015c0101275c016001019f60016401012064016801012268016c0101276c017001012470017401012c7401780101ab78017c0101297c018001012c80018401011484018801011b88018c0101278c019001012090019401012794019801012098019c0101279c01a001011ba001a4010116a401a801011da801ac010127ac01b0010122b001b4010127b401b8010122b801bc010127bc01c001011dc001c4010118c401c801019fc801cc010127cc01d0010124d001d4010127d401d8010124d801dc010127dc01e001019fe001e4010120e401e8010122e801ec010127ec01f0010124f001f401012cf401f80101abf801fc010129fc010002012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a0010001010101040801090103110406100111010104180119010311040620012101010428012901031104063001310101043801390103110406400141010104480149010311040650015101010458015901031104066001610101046801690103110406700171010104780179010311040680018101010484018501010488018901031104068c018d01010490019101010494019501010498019901031104069c019d010104a001a1010104a401a5010104a801a90103110406ac01ad010104b001b1010104b401b5010104b801b90103110406bc01bd010104c001c1010104c201c3010104c401c5010104c601c7010104c801c90103110406ca01cb010104cc01cd010104ce01cf010104d001d1010104d201d3010104d401d5010104d601d7010104d801d90103110406da01db010104dc01dd010104de01df010104e001e1010104e201e3010104e401e5010104e601e7010104e801e90103110406ea01eb010104ec01ed010104ee01ef010104f001f1010104f201f3010104f401f5010104f601f7010104f801f90103110406fa01fb010104fc01fd010104fe01ff010104
                    `), music.PlaybackMode.InBackground)
            } else if (id2 == 5) {
                lvname = "Unknown"
                scene.setBackgroundColor(4)
                tiles.setSmallTilemap(tilemap`
                    level2
                `)
                coinplace = false
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile72
                    `)
            } else if (id2 == 6) {
                lvname = "Chalenge impossibel"
                scene.setBackgroundColor(1)
                tiles.setSmallTilemap(tilemap`
                    level4
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile19
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile63
                    `, assets.tile`
                        myTile19
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile19
                    `)
            } else if (id2 == 7) {
                game.splash("LEVEL LOAD FAIL")
                game.reset()
                lvname = "Random Access Memory"
                scene.setBackgroundColor(11)
                tiles.setSmallTilemap(tilemap`
                    level13
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile54
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile61
                    `, assets.tile`
                        myTile79
                    `)
            } else if (id2 == 8) {
                lvname = "Frost"
                scene.setBackgroundColor(12)
                tiles.setSmallTilemap(tilemap`
                    level14
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile80
                    `)
            } else if (id2 == 9) {
                lvname = "CyberNet"
                tiles.setSmallTilemap(tilemap`
                    level15
                `)
                scene.setBackgroundColor(11)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile79
                    `)
            } else if (id2 == 10) {
                lvname = "Small Space"
                scene.setBackgroundColor(11)
                tiles.setSmallTilemap(tilemap`
                    level16
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile63
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile79
                    `)
            }
            
        } else if (forummenupage == 2) {
            if (id2 == 0) {
                lvname = "The Glory"
                scene.setBackgroundColor(12)
                tiles.setSmallTilemap(tilemap`
                    level17
                `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile67
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile68
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile80
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile63
                    `, assets.tile`
                        myTile80
                    `)
            } else if (id2 == 1) {
                lvname = "Lobotomy Roll"
                scene.setBackgroundColor(10)
                tiles.setSmallTilemap(tilemap`
                    level19
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile78
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile78
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile78
                    `)
                coinplace = false
                music.play(music.createSong(hex`
                        0096000408110502001c000c960064006d019001000478002c010000640032000000000a0600051d00d0008c01180506080a0c0d0f1112141618191b1d1e2022242527292a2c03001c0001dc00690000045e0100040000000000000000000005640001040003120000001800012440005800012760007800012506001c00010a006400f4016400000400000000000000000000000000000000024a0100000400011404000800011b08000c0001270c001000012010001400012714001800012018001c0001271c002000011b20002400011624002800011d28002c0001272c003000012230003400012734003800012238003c0001273c004000011d40004400011844004800019f48004c0001274c005000012450005400012754005800012458005c0001275c006000019f60006400012064006800012268006c0001276c007000012470007400012c7400780001ab78007c0001297c008000012c80008100012a81008200012982008300012783008400012584008500012485008600012286008700012087008800011e88008900011d89008a00011b8a008b0001198b008c0001188c008d0001168d008e0001148e008f0001128f009000011190009100010f91009200010d92009300010c93009400010a94009500010895009600010696009700010507001c00020a006400f401640000040000000000000000000000000000000003c700d0001001070d121e2425272910013001070c111427292a2c30015001050d2527292a5001540102122554015801011e58015c01010d5c016001012560016401011468016c01011d70017401020d2978017c0101227c018001012784018801012090019401010d94019801012098019c01031222299c01a001010aa001a401030f1b22a401a801021227a801ac01020c1dac01b0010120b001b4010114bc01c001021229c401c8010124d401d801011ed801dc01010fe001e4010120e401e8010125ec01f001011608001c000e050046006603320000040a002d00000064001400013200020100023a00d0008001180506080a0c0d0f1112141618191b1d1e2022242527292a2c80012002180506080a0c0d0f1112141618191b1d1e2022242527292a2c
                    `), music.PlaybackMode.InBackground)
            } else if (id2 == 2) {
                lvname = "buffer test"
                scene.setBackgroundColor(10)
                tiles.setSmallTilemap(tilemap`
                    level20
                `)
                coinplace = false
            } else if (id2 == 3) {
                lvname = "Iron Factory"
                scene.setBackgroundColor(11)
                tiles.setSmallTilemap(tilemap`
                    level21
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile69
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile54
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile21
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile63
                    `, assets.tile`
                        myTile79
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        myTile56
                    `, assets.tile`
                        myTile79
                    `)
                coinplace = false
                music.play(music.createSong(hex`
                        009b000408100500001c00010a006400f4016400000400000000000000000000000000050000049300000004000224290c00100002242918001c00022429240028000224293000340002242938003c0002252a400044000224294c00500002242958005c00022429640068000224297000740002242978007c00022227800084000224298c00900002242998009c00022429a400a800022429b000b400022429b800bc0002252ac000c400022429cc00d000022429d800dc0002242903001c0001dc00690000045e0100040000000000000000000005640001040003300000013801010538014001010640017801010578017c0101087c01800101068001b8010105b801c0010106c0010002010a05001c000f0a006400f4010a00000400000000000000000000000000000000026a0200000400010c04000800010c0c001000010c10001400010c14001800010c1c002000010c20002400010c24002800010c2c003000010c30003400010c34003800010c38003c00010d3c004000010d40004400010c44004800010c4c005000010c50005400010c54005800010c5c006000010c60006400010c64006800010c6c007000010c70007400010c74007800010c78007c0001117c008000011180008400010c84008800010c8c009000010c90009400010c94009800010c9c00a000010ca000a400010ca400a800010cac00b000010cb000b400010cb400b800010cb800bc00010dbc00c000010dc000c400010cc400c800010ccc00d000010cd000d400010cd400d800010cdc00de00010cde00e0000116e000e200011de200e4000124e400f0000129f000f4000129f400f8000129f800fc000129fc000001012900010401010c04010801010c0c011001010c10011401010c14011801010c1c012001010c20012401010c24012801010c2c013001010c30013401010c34013801010c38013c01010d3c014001010d40014401010c44014801010c4c015001010c50015401010c54015801010c5c016001010c60016401010c64016801010c6c017001010c70017401010c74017801010c78017c0101117c018001011180018401010c84018801010c8c019001010c90019401010c94019801010c9c01a001010ca001a401010ca401a801010cac01b001010cb001b401010cb401b801010cb801bc01010dbc01c001010dc001c4010111c401c8010111cc01d0010111d001d4010111d401d8010111dc01e0010111e001e4010111e401e8010111ec01f0010111f001f4010111f801fc01011106001c00010a006400f401640000040000000000000000000000000000000002300000013801011d38014001011e40017801011d78017c0101207c018001011e8001b801011db801c001011ec0010002012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800bf01e400e500021114f000f100021114fc00fd00021114000101010411140207040105010107080109010204070c010d01010710011101020207140115010107180119010204071c011d01010720012101020207240125010107280129010204072c012d01010730013101020207340135010107380139010204073c013d01010740014101020207440145010107480149010204074c014d01010750015101020207540155010107580159010204075c015d01010760016101020207640165010107680169010204076c016d01010770017101020207740175010107780179010204077c017d01010780018101020207840185010107880189010204078c018d01010790019101020207940195010107980199010204079c019d010107a001a101020207a401a5010107a801a901020407ac01ad010107b001b101020207b401b5010107b801b901020407bc01bd010107c001c1010411140207c401c5010107c801c901020407cc01cd010107d001d101020207d401d5010107d801d901020407dc01dd010107e001e1010411140207e401e5010107e801e901020407ec01ed0103111407f001f101020207f401f5010107f801f9010411140407fc01fd010107
                    `), music.PlaybackMode.InBackground)
            } else if (id2 == 4) {
                lvname = "NOT_TROLL.exe"
                scene.setBackgroundColor(6)
                tiles.setSmallTilemap(tilemap`
                    level23
                `)
                tileUtil.coverAllTiles(assets.tile`
                        tile71
                    `, assets.tile`
                        myTile74
                    `)
                tileUtil.coverAllTiles(assets.tile`
                        tile72
                    `, assets.tile`
                        myTile74
                    `)
                coinplace = false
            }
            
        }
        
    } else if (id2 == 0) {
        lvname = "Sprinter"
        scene.setBackgroundColor(10)
        tiles.setSmallTilemap(tilemap`
                level1
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile78
                `)
        music.play(music.createSong(hex`
                    0096000408100303001c0001dc00690000045e01000400000000000000000000056400010400036000000018000124400058000127600078000125800098000124c000d8000127e000f000012cf000f80001abf8000001012c000118010124400158010127600178010125800198010124c001d8010127e001f001012cf001f80101abf8010002012c06001c00010a006400f401640000040000000000000000000000000000000002000300000400011404000800011b08000c0001270c001000012010001400012714001800012018001c0001271c002000011b20002400011624002800011d28002c0001272c003000012230003400012734003800012238003c0001273c004000011d40004400011844004800019f48004c0001274c005000012450005400012754005800012458005c0001275c006000019f60006400012064006800012268006c0001276c007000012470007400012c7400780001ab78007c0001297c008000012c80008400011484008800011b88008c0001278c009000012090009400012794009800012098009c0001279c00a000011ba000a4000116a400a800011da800ac000127ac00b0000122b000b4000127b400b8000122b800bc000127bc00c000011dc000c4000118c400c800019fc800cc000127cc00d0000124d000d4000127d400d8000124d800dc000127dc00e000019fe000e4000120e400e8000122e800ec000127ec00f0000124f000f400012cf400f80001abf800fc000129fc000001012c00010401011404010801011b08010c0101270c011001012010011401012714011801012018011c0101271c012001011b20012401011624012801011d28012c0101272c013001012230013401012734013801012238013c0101273c014001011d40014401011844014801019f48014c0101274c015001012450015401012754015801012458015c0101275c016001019f60016401012064016801012268016c0101276c017001012470017401012c7401780101ab78017c0101297c018001012c80018401011484018801011b88018c0101278c019001012090019401012794019801012098019c0101279c01a001011ba001a4010116a401a801011da801ac010127ac01b0010122b001b4010127b401b8010122b801bc010127bc01c001011dc001c4010118c401c801019fc801cc010127cc01d0010124d001d4010127d401d8010124d801dc010127dc01e001019fe001e4010120e401e8010122e801ec010127ec01f0010124f001f401012cf401f80101abf801fc010129fc010002012c09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800a0010001010101040801090103110406100111010104180119010311040620012101010428012901031104063001310101043801390103110406400141010104480149010311040650015101010458015901031104066001610101046801690103110406700171010104780179010311040680018101010484018501010488018901031104068c018d01010490019101010494019501010498019901031104069c019d010104a001a1010104a401a5010104a801a90103110406ac01ad010104b001b1010104b401b5010104b801b90103110406bc01bd010104c001c1010104c201c3010104c401c5010104c601c7010104c801c90103110406ca01cb010104cc01cd010104ce01cf010104d001d1010104d201d3010104d401d5010104d601d7010104d801d90103110406da01db010104dc01dd010104de01df010104e001e1010104e201e3010104e401e5010104e601e7010104e801e90103110406ea01eb010104ec01ed010104ee01ef010104f001f1010104f201f3010104f401f5010104f601f7010104f801f90103110406fa01fb010104fc01fd010104fe01ff010104
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 1) {
        lvname = "Travel"
        scene.setBackgroundColor(14)
        tiles.setSmallTilemap(tilemap`
                level3
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile82
                `)
        music.play(music.createSong(hex`
                    008c000408100405001c000f0a006400f4010a000004000000000000000000000000000000000268010000200001142000400001904000600001126000800001168000a0000114a000c0000190c000e0000112e0000001011600010401011b04010c01011b0c010e01011b0e011001011e10011401011b14011601011916011801011b18012001011920012401019724012c0101972c012e0101972e013001011b3001340101973401360101123601380101143801400101124001440101a344014c0101a34c014e0101274e015001012a50015401012c54015601012a56015801012758016001012560016401012264016c01012280018401011b84018c01011b8c018e01011b8e019001011e90019401011b94019601011996019801011b9801a0010119a001a4010197a401ac010197ac01ae010197ae01b001011bb001b4010197b401b6010112b601b8010114b801c0010112c001c40101a3c401cc0101a3cc01ce010127ce01d001012ad001d401012cd401d601012ad601d8010127d801e0010125e001e4010122e401ec01012206001c00010a006400f40164000004000000000000000000000000000000000230000000200001142000400001904000600001126000800001168001a0010114a001c0010190c001e0010197e0010002011207001c00020a006400f401640000040000000000000000000000000000000003860400000200012702000400011b0400060001200600080001a308000a0001270a000c00011b0c000e0001200e00100001a310001200012712001400011b1400160001201600180001a318001a0001271a001c00011b1c001e0001201e00200001a32000220001a822002400019c2400260001202600280001a328002a0001a82a002c00019c2c002e0001202e00300001a33000320001a832003400019c3400360001203600380001a338003a0001a83a003c00019c3c003e0001203e00400001a340004200012542004400011944004600011e46004800016348004a0001254a004c0001194c004e00011e4e005000016350005200012552005400011954005600011e56005800016358005a0001255a005c0001195c005e00011e5e006000016360006200012562006400011964006600011e66006800012268006a0001256a006c0001196c006e00011e6e007000012270007200012572007400011974007600011e76007800012278007a0001257a007c0001197c007e00011e7e008000012280008200012782008400011b8400860001208600880001a388008a0001278a008c00011b8c008e0001208e00900001a390009200012792009400011b9400960001209600980001a398009a0001279a009c00011b9c009e0001209e00a00001a3a000a20001a8a200a400019ca400a6000120a600a80001a3a800aa0001a8aa00ac00019cac00ae000120ae00b00001a3b000b20001a8b200b400019cb400b6000120b600b80001a3b800ba0001a8ba00bc00019cbc00be000120be00c00001a3c000c2000125c200c4000119c400c600011ec600c8000163c800ca000125ca00cc000119cc00ce00011ece00d0000163d000d2000125d200d4000119d400d600011ed600d8000163d800da000125da00dc000119dc00de00011ede00e0000163e000e2000125e200e4000119e400e600011ee600e8000122e800ea000125ea00ec000119ec00ee00011eee00f0000122f000f2000125f200f4000119f400f600011ef600f8000122f800fa000125fa00fc000119fc00fe00011efe000001012200010201012702010401011b0401060101200601080101a308010a0101270a010c01011b0c010e0101200e01100101a310011201012712011401011b1401160101201601180101a318011a0101271a011c01011b1c011e0101201e01200101a32001220101a822012401019c2401260101202601280101a328012a0101a82a012c01019c2c012e0101202e01300101a33001320101a832013401019c3401360101203601380101a338013a0101a83a013c01019c3c013e0101203e01400101a340014201012542014401011944014601011e46014801016348014a0101254a014c0101194c014e01011e4e015001016350015201012552015401011954015601011e56015801016358015a0101255a015c0101195c015e01011e5e016001016360016201012562016401011964016601011e66016801012268016a0101256a016c0101196c016e01011e6e017001012270017201012572017401011974017601011e76017801012278017a0101257a017c0101197c017e01011e7e018001012280018201012509010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8009b020000010004141500031c001d000200032000210004131600033800390004131600034000410004141500036000610004160003048000810002160384008500010388008900020f038c008d0002120390009100020f0392009300011294009500030f16039600970001129800990001039c009d00021003a000a100021603a400a5000103a800a900020f03ac00ad00021203b000b100020f03b200b3000112b400b500030f1603b600b7000112b800b9000103bc00bd00021003c000c100021603c400c5000103c800c900020f03cc00cd00021203d000d100020f03d200d3000112d400d500030f1603d600d7000112d800d9000103dc00dd00021003e000e100021603e400e5000103e800e900020f03ec00ed00021203f000f100030f1603f200f300021216f400f500020f03f600f7000112f800f9000103fc00fd0003101603fe00ff0001160001010102160304010501010308010901020f030c010d0102120310011101020f0312011301011214011501030f16031601170101121801190101031c011d010210032001210102160324012501010328012901020f032c012d0102120330013101020f0332013301011234013501030f16033601370101123801390101033c013d010210034001410102160344014501010348014901020f034c014d0102120350015101020f0352015301011254015501030f16035601570101125801590101035c015d010210036001610102160364016501010368016901020f036c016d0102120370017101030f16037201730102121674017501020f037601770101127801790101037c017d01031016037e017f0101168001810102160388018901010f8c018d01011290019101020f169201930102121694019501010f960197010112a001a1010116e001e1010113e401e5010113
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 2) {
        lvname = "Phantom"
        scene.setBackgroundColor(5)
        tiles.setSmallTilemap(tilemap`
                level7
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile73
                `)
        music.play(music.createSong(hex`
                    008c0004080f0200001c00010a006400f401640000040000000000000000000000000005000004d80100000400030c111408000c0001050c001000030c111414001800010818001c00030c111424002800010528002c00030c11142c003000010830003400030c111438003c00030c11143c004000010a40004400030a8e934400480001874c005000030a8e9354005800018958005c00030a8e935c006000018764006800018968006c00030a8e9370007400030a8e9378007c00030a0d127c008000010c8000840003050d118c00900003050d1198009c0003050d11a800ac0003050d11b000b40003050d11b800bc0003050d11c000c40003050c11cc00d00003050c11d800dc0003050c11dc00e00003050c1100010401030c111408010c0101050c011001030c111414011801010818011c01030c111424012801010528012c01030c11142c013001010830013401030c111438013c01030c11143c014001010a40014401030a8e934401480101874c015001030a8e9354015801018958015c01030a8e935c016001018764016801018968016c01030a8e9370017401030a8e9378017c01030a0d127c018001010c8001840103050d118c01900103050d1198019c0103050d11a801ac0103050d11b001b40103050d11b801bc0103050d11c001c40103050c11cc01d00103050c11d801dc0103050c11dc01e00103050c1109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8000802400041000200014c004d00020001500051000203045400550002000164006500020001680069000200016c006d00020001700071000203047c007d00020001800081000200018c008d000200019000910002030494009500020001a400a500020001a800a900020001ac00ad00020001b000b100020304bc00bd00020001c000c100020001e400e5000105e800e9000105ec00ed000105f000f1000105f400f5000105f800f9000105fc00fd0001050001010104130001050401050101060801090101070c010d01010610011101010514011501010618011901030304071c011d0101062001210101052401250101062801290101072c012d0101063001310103000105340135010300010638013901030001073c013d010300010640014101030001054401450101064801490101074c014d0103000106500151010303040554015501030001065801590101075c015d010106600161010105640165010300010668016901030001076c016d010300010670017101030304057401750101067801790101077c017d010300010680018101030001058401850101068801890101078c018d0103000106900191010303040594019501030001069801990101079c019d010106a001a1010105a401a50103000106a801a90103000107ac01ad0103000106b001b10103030405b401b5010106b801b9010107bc01bd0103000106c001c10103000105
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 3) {
        lvname = "Aurora"
        scene.setBackgroundColor(12)
        tiles.setSmallTilemap(tilemap`
                level12
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile80
                `)
        music.play(music.createSong(hex`
                    00780004080d0300001c00010a006400f401640000040000000000000000000000000005000004200100000400011e08000c00012210001400012518001c00012220002400011e28002c00012230003400012538003c00012240004400011d48004c00012250005400012558005c00012260006400011d68006c00012270007400012578007c00012280008400011b88008c00012290009400012598009c000122a000a400011ba800ac000122b000b4000125b800bc000122c000c4000119c800cc00011ed000d4000122d800dc000125e000e400012ae800ec00012cf000f400012af800fc00012500010401011e08010c01012210011401012518011c01012220012401011e28012c01012230013401012538013c01012240014401011d48014c01012250015401012558015c01012260016401011d68016c01012270017401012578017c01012206001c00010a006400f40164000004000000000000000000000000000000000224000000400001124000800001118000c000010fc0000001010d00014001011240018001011109010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800bf00380039000300050b400041000301050b700071000300050b800081000301050bb800b9000300050bc000c1000301050bf000f1000300050b000101010301050b0801090101051001110102020518011901010520012101010528012901010530013101020205380139010300050b400141010301050b4801490101055001510102020558015901010560016101010568016901010570017101040002050b780179010105800181010301050b88018901010590019101020205980199010105
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 4) {
        lvname = "Dehydrated"
        scene.setBackgroundColor(4)
        tiles.setSmallTilemap(tilemap`
                level9
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile72
                `)
    } else if (id2 == 5) {
        lvname = "Breaker"
        scene.setBackgroundColor(6)
        tiles.setSmallTilemap(tilemap`
                level27
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile74
                `)
        music.play(music.createSong(hex`
                    007d0004080b0207001c00020a006400f401640000040000000000000000000000000000000003a80030003400011b34003800011d38003c0001193c00400001164000440001184c005000012468006c00011870007400011b78007c00010c7c008000011880008400011198009c00010f9c00a0000111b000b400011bb400b800011db800bc000119bc00c0000116c000c4000118cc00d0000124e400e8000118f000f4000116fc000001011830013401011b38013c0101194001440101184b014c0101184c014d01019f4d015001012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001402000001000200010600070001020800090001040c000d000102100011000200011600170001021800190001041c001d000102200021000200012600270001022800290001042c002d000102300031000200013600370001023800390001043c003d000102400041000200014600470001024800490001044c004d000102500051000200015600570001025800590001045c005d000102600061000200016600670001026800690001046c006d000102700071000200017600770001027800790001047c007d000102800081000200018600870001028800890001048c008d000102900091000200019600970001029800990001049c009d000102a000a100020001a600a7000102a800a9000104ac00ad000102b000b100020001b600b7000102b800b9000104bc00bd000102c000c100020001c600c7000102c800c9000104cc00cd000102d000d100020001d600d7000102d800d9000104dc00dd000102e000e100020001e600e7000102e800e9000104ec00ed000102f000f100020001f600f7000102f800f9000104fc00fd000102000101010200010601070101020801090101040c010d010102100111010200011601170101021801190101041c011d010102200121010200012601270101022801290101042c012d010102300131010200013601370101023801390101043c013d010102400141010200014601470101024801490101044c014d01010250015101020e08
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 6) {
        lvname = "Zero"
        scene.setBackgroundColor(8)
        tiles.setSmallTilemap(tilemap`
                level5
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile76
                `)
        music.play(music.createSong(hex`
                    007d0004080a0600001c00010a006400f4016400000400000000000000000000000000050000044000000020000322252920004000031e2225400060000325292c60008000032024278000a00003222529a000c000031e2225c000e0000325292ce00000010320242701001c000f05001202c102c20100040500280000006400280003140006020004d80000000200012202000400012506000800012208000a0001250c000e0001220e001000012514001600012218001a0001291c001e0001253e004000012740004200012948004a0001294e00500001275000520001295200540001275600580001255a005c00012460006200012780008200012282008400012586008800012288008a0001258c008e0001228e009000012594009600012298009a0001299c009e000125be00c0000127c000c2000129c800ca000129ce00d0000127d000d2000129d200d4000127d600d8000125da00dc000124e000e200012705001c000f0a006400f4010a0000040000000000000000000000000000000002300000002000011620004000011240006000010d6000800001148000a0000116a000c0000112c000e0000119e0000001011b06001c00010a006400f401640000040000000000000000000000000000000002300000002000012220004000011e4000600001196000800001208000a0000122a000c000011ec000e0000119e0000001012008001c000e050046006603320000040a002d0000006400140001320002010002e00100000600011606000800011408000c0001160c000e00011610001200011612001400011616001800011618001a0001141c001e00011620002600011226002800011128002c0001122c002e00011230003200011232003400011236003800011238003a0001113c003e00011240004600010d46004800010c48004c00010d4c004e00010d50005200010d52005400010d56005800010d58005a00010c5c005e00010d60006600011466006800011268006c0001146c006e00011470007200011472007400011674007600011978007a0001187c007e0001167e008000011480008600011686008800011488008c0001168c008e00011690009200011692009400011696009800011698009a0001149c009e000116a000a6000112a600a8000111a800ac000112ac00ae000112b000b2000112b200b4000112b600b8000112b800ba000111bc00be000112c000c600010dc600c800010cc800cc00010dcc00ce00010dd000d200010dd200d400010dd600d800010dd800da00010cdc00de00010de000e6000114e600e8000112e800ec000114ec00ee000114f000f2000114f200f4000114f600f8000114f800fa000112fc00fe000114fe00000101160001020101190401060101180a010c0101160e011001011410011201011614011601011609010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800420200000100041200050804000500010508000900030005080c000d00010510001100041200050814001500010518001900030005081c001d00010520002100041200050824002500010528002900030005082c002d00010530003100041200050834003500010538003900030005083c003d00010540004100041200050844004500010548004900030005084c004d00010550005100041200050854005500010558005900030005085c005d00010560006100041200050864006500010568006900030005086c006d00010570007100041200050874007500010578007900030005087c007d00010580008100041200050884008500010588008900030005088c008d00010590009100041200050894009500010598009900030005089c009d000105a000a1000412000508a400a5000105a800a9000412000508ac00ad000105b000b1000412000508b400b5000105b800b9000412000508bc00bd000105c000c1000412000508c400c500021205c800c9000412000508cc00cd00021205d000d1000412000508d400d500021205d800d9000412000508dc00dd00021205e000e1000412000508e200e3000112e400e500021205e600e7000112e800e9000412000508ea00eb000112ec00ed00021205ee00ef000112f000f1000412000508f100f2000106f200f300021206f400f500021205f500f6000106f600f700021206f800f900051200050608f900fa000106fa00fb00021206fc00fd0003120506fd00fe000106fe00ff000112ff000001010600010101050e1200050814011501020e14
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 7) {
        lvname = "Virus"
        scene.setBackgroundColor(2)
        tiles.setSmallTilemap(tilemap`
                level18
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile85
                `)
        music.play(music.createSong(hex`
                    0082000408080304001c00100500640000041e000004000000000000000000000000000a0400046e0100000200011804000600011808000a0001160a000c00011810001200011814001600011816001800011b1a001c0001161e002000011820002200019324002600019328002a0001112a002c0001933000320001933400360001933600380001183a003c0001113e004000019340004200011844004600011848004a00011b4a004c00019a50005200019a54005600019a5600580001245a005c0001a65e006000012960006200019364006600019368006a0001186a006c00011680008200011884008600011888008a0001188a008c0001188e00900001189200940001189600980001189a009c0001189c009e0001189e00a0000118a000a2000116a400a6000116a800aa000116aa00ac000116ae00b0000116b200b4000116b600b8000116ba00bc000116bc00be000116be00c0000116c000c2000193c400c6000193c800ca000193ca00cc000193ce00d0000193d200d6000193d600d8000193da00dc000193dc00de000193de00e000019305001c000f0a006400f4010a0000040000000000000000000000000000000002b00100000400012404000600012406000c0001ab0c000e00012910001400012014001600012016001c0001271c001e0001a620002400012224002600012226002c0001292c002e0001ab30003400019f34003600019f36003c0001a63c003e00012240004400012444004600012446004c0001ab4c004e00012950005400012054005600012056005c0001275c005e0001a660006400012264006600012266006c0001296c006e00012770007400019f74007600019f7600780001297a007c0001297c007d0001ab7d007e0001297e007f0001a67f008000012280008400012484008600012486008c0001ab8c008e00012990009400012094009600012096009c0001279c009e0001a6a000a4000122a400a6000122a600ac000129ac00ae0001abb000b400019fb400b600019fb600bc0001a6bc00be000122c000c4000124c400c6000124c600cc0001abcc00ce000129d000d4000120d400d6000120d600dc000127dc00de0001a6e000e4000122e400e6000122e600ec000129ec00ee000127f000f400019ff400f600019ff600f8000129fa00fc000129fc00fd0001abfd00fe000129fe00ff0001a6ff000001012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800dc01000001000200060400050002020608000900030006080c000d00020206100011000200061400150002020618001900030006081c001d00020206200021000200062400250002020628002900030006082c002d00020206300031000200063400350002020638003900030006083c003d00020206400041000200064400450002020648004900030006084c004d00020206500051000200065400550002020658005900030006085c005d00020206600061000200066400650002020668006900030006086c006d00020206700071000200067400750002020675007600011376007700011478007900030006087c007d00020206800081000200068400850002020688008900030006088c008d00020206900091000200069400950002020698009900030006089c009d00020206a000a100020006a400a500020206a800a90003000608ac00ad00020206b000b100020006b400b500020206b800b90003000608bc00bd00020206c000c100020006c400c500020206c800c90003000608cc00cd00020206d000d100020006d400d500020206d800d90003000608dc00dd00020206e000e100020006e400e500020206e800e90003000608ec00ed00020206f000f100020006f400f500020206f800f90003000608fc00fd00020206
                `), music.PlaybackMode.InBackground)
    } else if (id2 == 8) {
        lvname = "Thunder"
        scene.setBackgroundColor(14)
        tiles.setSmallTilemap(tilemap`
                level33
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile82
                `)
        tileUtil.coverAllTiles(assets.tile`
                    tile67
                `, assets.tile`
                    myTile82
                `)
        tileUtil.coverAllTiles(assets.tile`
                    tile68
                `, assets.tile`
                    myTile82
                `)
        tileUtil.coverAllTiles(assets.tile`
                    tile69
                `, assets.tile`
                    myTile82
                `)
    } else if (id2 == 9) {
        lvname = "Prism Plasma"
        scene.setBackgroundColor(13)
        tiles.setSmallTilemap(tilemap`
                level58
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile81
                `)
        tileUtil.coverAllTiles(assets.tile`
                    tile69
                `, assets.tile`
                    myTile81
                `)
    } else if (id2 == 10) {
        lvname = "Breeze"
        scene.setBackgroundColor(9)
        tiles.setSmallTilemap(tilemap`
                level71
            `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile21
                `, assets.tile`
                    myTile77
                `)
        tileUtil.coverAllTiles(assets.tile`
                    tile69
                `, assets.tile`
                    myTile77
                `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile56
                `, assets.tile`
                    myTile77
                `)
        tileUtil.coverAllTiles(assets.tile`
                    myTile63
                `, assets.tile`
                    myTile77
                `)
        music.play(music.createSong(hex`
                    0078000408080700001c00010a006400f401640000040000000000000000000000000005000004a80008000c00010c10001400010d18001c00010c24002800010c28002c00010c30003400010d38003c00010c48004c00010c50005400010d58005c00010c64006800010c68006c00010c70007400010d78007c00010c88008c00010c90009400010d98009c00010ca400a800010ca800ac00010cb000b400010db800bc00010cc800cc00010cd000d400010dd800dc00010ce400e800010ce800ec00010cf000f400010df800fc00010c03001c0001dc00690000045e0100040000000000000000000005640001040003780000000600010c06000c00010c0c001600010c40004600010f46004c00010f4c005600010f60006600011166006c0001116c007000011170007400010d80008600010c86008c00010c8c009600010cc000c600010fc600cc00010fcc00d600010fe000e6000111e600ec000111ec00f0000111f000f800019304001c00100500640000041e000004000000000000000000000000000a040004720008000c00010c18001c00010c28002c00010c38003c00010c48004c00010f58005c00010f68006c00010578007c00018788008c00010c98009c00010ca800ac00010cb400b800010cb800bc00010dbc00c000010cc800cc00010cd800dc00010ce800ec00010cf400f800010cf800fc00010a05001c000f0a006400f4010a0000040000000000000000000000000000000002c0000400080001180c001000011814001800011818001c0001992400280001182c003000011830003400011b38003c00011d4400480001184c005000011854005800011858005c0001996400680001186c00700001187000740001168400880001188c009000011894009800011898009c000199a400a8000118ac00b0000118b000b400011bb800bc00011dc400c8000118cc00d0000118d400d8000118d800dc000199e000e4000118e600ea000118ec00f0000118f200f6000118f800fc00011807001c00020a006400f401640000040000000000000000000000000000000003480088008c00012490009400012498009c000125a800ac000124b000b4000127b800bc000129c800cc000124d000d4000124d800dc000125e800ec000124f000f4000127f800fc00012908001c000e050046006603320000040a002d0000006400140001320002010002600020002400012428002c00012430003400012438003c00012460006400012468006c00012470007400012578007c000122a000a4000124a800ac000124b000b4000124b800bc000124e000e4000124e800ec000124f000f4000125f800fc00012209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800cc0100000100020106060007000201050800090001060c000d0001010e000f000105100011000106160017000105180019000206081e001f0001052000210002010626002700010528002900030106082e002f0001053000310002010636003700010538003900030106083c003d0001013e003f00010540004100020106460047000201054800490001064c004d0001014e004f000105500051000106560057000105580059000206085e005f0001056000610002010666006700010568006900030106086e006f00010570007100050105060708800081000301060886008700020105880089000206088c008d0001018e008f000105900091000106960097000105980099000206089e009f000105a000a100020106a600a7000105a800a90003010608ae00af000105b000b100020106b200b3000107b400b5000107b600b7000105b800b90003010608bc00bd000101be00bf000105c000c100020106c600c700020105c800c900020608cc00cd000101ce00cf000105d000d1000106d600d7000105d800d900020608de00df000105e000e100020106e600e7000105e800e90003010608ee00ef000105f000f100020106f200f3000107f400f5000107f600f7000105f800f90003010608
                `), music.PlaybackMode.InBackground)
    }
    
    color.startFade(color.Black, color.originalPalette, 500)
    spawn()
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile70
    `, function on_overlap_tile9(sprite9: Sprite, location9: tiles.Location) {
    
    if (gamestart == true) {
        gravity = 1
        extraEffects.createSpreadEffectOnAnchor(roller, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), 100, 1, 1)
        roller.vy = -65
        roller.ay = -320
    }
    
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile37
    `, function on_overlap_tile10(sprite10: Sprite, location10: tiles.Location) {
    
    speed = 3
    roller.setVelocity(150, 0)
    speedparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile37
            `, assets.tile`
                myTile46
            `)
        timer.after(200, function on_after6() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile46
                `, assets.tile`
                    myTile37
                `)
        })
    }
    
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile86
    `, function on_overlap_tile11(sprite11: Sprite, location11: tiles.Location) {
    
    if (gamestart == true) {
        gravity = 0
        extraEffects.createSpreadEffectOnAnchor(roller, extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), 100, 1, 1)
        roller.vy = 65
        roller.ay = 320
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        tile72
    `, function on_overlap_tile12(sprite12: Sprite, location12: tiles.Location) {
    color.startFade(color.Black, color.originalPalette, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile54
    `, function on_overlap_tile13(sprite13: Sprite, location13: tiles.Location) {
    color.startFade(color.originalPalette, color.GrayScale, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile36
    `, function on_overlap_tile14(sprite14: Sprite, location14: tiles.Location) {
    
    speed = 2
    roller.setVelocity(75, 0)
    speedparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile36
            `, assets.tile`
                myTile46
            `)
        timer.after(200, function on_after7() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile46
                `, assets.tile`
                    myTile36
                `)
        })
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        tile67
    `, function on_overlap_tile15(sprite15: Sprite, location15: tiles.Location) {
    color.startFade(color.originalPalette, color.White, 500)
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile92
    `, function on_overlap_tile16(sprite16: Sprite, location16: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after8() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    
    if (practicemode == true) {
        if (gamestart == true) {
            checkpointsprite = sprites.create(img`
                    . . 2 2 1 1 . . 
                                    . . 2 f 7 1 . . 
                                    . 2 2 f 7 1 1 . 
                                    . 2 f f 7 7 1 . 
                                    . 1 7 7 8 8 1 . 
                                    . 1 1 7 8 1 1 . 
                                    . . 1 7 8 1 . . 
                                    . . 1 1 1 1 . .
                `, SpriteKind.checkpoint)
            checkpointsprite.x = roller.x
            checkpointsprite.y = roller.y
            if (true) {
                
            }
            
        }
        
    }
    
})
function ForumLevels() {
    
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`
        level28
    `)
    customlevels = miniMenu.createMenu(miniMenu.createMenuItem("Metropolis - PixelDoodle", img`
                . f f f f 6 6 6 6 . 
                        f f 2 2 2 1 1 1 6 6 
                        f 2 2 5 5 4 4 1 1 6 
                        f 2 2 2 2 1 1 1 1 6 
                        f 2 5 2 5 4 1 4 1 6 
                        6 1 4 4 1 1 3 3 1 5 
                        6 1 4 1 4 3 1 3 1 5 
                        6 1 1 4 4 3 3 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("Fractured - BlastBoxGames", img`
                . 2 2 2 1 1 1 . 
                        2 2 7 7 8 8 1 1 
                        2 7 2 7 8 1 8 1 
                        2 7 7 7 8 8 8 1 
                        1 8 1 8 9 1 9 1 
                        1 8 8 1 1 9 9 1 
                        1 1 8 8 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Inverted - AbstractDesigner", img`
                . . 2 . . . . 1 . . 
                        . 2 f 2 2 1 1 b 1 . 
                        2 b 2 4 4 3 3 1 9 1 
                        . 2 4 7 4 3 8 3 1 . 
                        . 2 4 4 4 3 3 3 1 . 
                        . 1 3 b f 2 9 1 1 . 
                        . 1 b f b 9 2 9 1 . 
                        . 1 1 3 3 1 1 1 1 . 
                        . . 1 1 1 1 1 1 . .
            `), miniMenu.createMenuItem("Fitzgerald - V", img`
                . f 2 f f 6 6 1 6 . 
                        f 2 f 2 2 1 1 b 1 6 
                        f 2 2 d d 2 2 1 1 6 
                        f 2 d 7 d 2 8 2 1 6 
                        f 2 d d d 2 2 2 1 6 
                        6 1 2 b f 2 9 1 1 5 
                        6 1 2 f b 9 2 1 1 5 
                        6 1 1 2 2 1 1 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("SMASH! - TeddyB", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Peaceful - GRIND", img`
                . 2 2 2 1 1 1 . 
                        2 2 c c a a 1 1 
                        2 c 2 c a 1 a 1 
                        2 c c c a a a 1 
                        1 a 1 1 1 1 9 1 
                        1 a a 1 1 9 9 1 
                        1 1 a a 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Forever Blue - PixelDoodle", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Space Invaders - GRIND", img`
                . f f f f 6 6 6 6 . 
                        f f 2 2 2 1 1 1 6 6 
                        f 2 2 5 5 4 4 1 1 6 
                        f 2 2 2 2 1 1 1 1 6 
                        f 2 5 2 5 4 1 4 1 6 
                        6 1 4 4 1 1 3 3 1 5 
                        6 1 4 1 4 3 1 3 1 5 
                        6 1 1 4 4 3 3 1 1 5 
                        6 6 1 1 1 1 1 1 5 5 
                        . 6 6 6 6 5 5 5 5 .
            `), miniMenu.createMenuItem("Unnamed 7 - unknown", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Bloodpuzzle - Rage", img`
                . . 2 . . . . 1 . . 
                        . 2 f 2 f 6 1 b 1 . 
                        f 2 2 f 2 1 b 1 1 6 
                        2 b 2 3 3 2 2 1 9 1 
                        f 2 3 7 3 2 8 2 1 6 
                        f 2 3 3 3 2 2 2 1 6 
                        6 1 2 b f 2 9 1 1 5 
                        6 1 b f b 9 2 9 1 5 
                        6 1 2 2 2 1 1 1 1 5 
                        . 6 1 1 1 1 1 1 5 .
            `), miniMenu.createMenuItem("Unnamed 9 - unknown", img`
                . 2 2 2 1 1 1 . 
                        2 2 f f b b 1 1 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b b b 9 9 9 1 
                        1 1 b b 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("BACK"))
    customlevels.setDimensions(160, 120)
    customlevels.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    customlevels.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    customlevels.x = 80
    customlevels.y = 60
    customlevels.onButtonPressed(controller.A, function on_button_pressed4(selection4: any, selectedIndex4: number) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        color.startFade(color.originalPalette, color.Black, 100)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 100)
        if (true) {
            sprites.destroy(r)
            sprites.destroy(o)
            sprites.destroy(l)
            sprites.destroy(l2)
            sprites.destroy(e)
            sprites.destroy(r2)
        }
        
        customlevels.close()
        if (gamestart == false) {
            if (selection4 == "BACK") {
                game.reset()
            } else {
                attempts = 1
                forummenupage = 0
                music.stopAllSounds()
                music.play(music.createSong(hex`
                        00c8000408010100001c00010a006400f401640000040000000000000000000000000005000004180000000200011d02000400012404000600012706000800012c
                    `), music.PlaybackMode.UntilDone)
                loadLevel(true, selectedIndex4)
            }
            
        }
        
    })
}

sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function on_on_overlap(sprite17: Sprite, otherSprite: Sprite) {
    coinanimation.ay = 200
    coinanimation.vy = -40
    coinanimation.setFlag(SpriteFlag.GhostThroughWalls, true)
    timer.after(650, function on_after9() {
        
        extraEffects.createSpreadEffectOnAnchor(coinanimation, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Spark), 10, 1, 10)
        sprites.destroy(coinanimation)
        getcoin = true
    })
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile104
    `, function on_overlap_tile17(sprite18: Sprite, location17: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after10() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
function spawn() {
    
    mainmenu.close()
    if (coinplace == true) {
        coinanimation = sprites.create(img`
                . . 2 2 1 1 . . 
                            . 2 6 6 5 5 1 . 
                            2 6 6 2 1 5 5 1 
                            2 6 2 6 5 5 5 1 
                            1 5 1 5 3 3 3 1 
                            1 5 5 1 1 3 3 1 
                            . 1 5 5 3 3 1 . 
                            . . 1 1 1 1 . .
            `, SpriteKind.coin)
        animation.runImageAnimation(coinanimation, [img`
                    . . 2 2 1 1 . . 
                                . 2 6 6 5 5 1 . 
                                2 6 6 2 1 5 5 1 
                                2 6 2 6 5 5 5 1 
                                1 5 1 5 3 3 3 1 
                                1 5 5 1 1 3 3 1 
                                . 1 5 5 3 3 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 2 6 5 1 1 . 
                                . 2 6 2 1 5 1 . 
                                . 2 6 2 5 5 1 . 
                                . 1 5 1 3 3 1 . 
                                . 1 5 1 1 3 1 . 
                                . 1 1 5 3 1 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . . 2 1 . . . 
                                . . 2 2 1 1 . . 
                                . . 2 6 5 1 . . 
                                . . 2 6 5 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 1 1 1 . . 
                                . . . 1 1 . . .
                `, img`
                    . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . .
                `, img`
                    . . . 2 1 . . . 
                                . . 2 2 1 1 . . 
                                . . 2 6 5 1 . . 
                                . . 2 6 5 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 1 1 1 . . 
                                . . . 1 1 . . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 2 6 5 1 1 . 
                                . 2 6 2 1 5 1 . 
                                . 2 6 6 1 5 1 . 
                                . 1 5 5 1 3 1 . 
                                . 1 5 1 1 3 1 . 
                                . 1 1 5 3 1 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 6 6 5 5 1 . 
                                2 6 6 2 1 5 5 1 
                                2 6 6 6 5 1 5 1 
                                1 5 5 5 5 1 3 1 
                                1 5 5 1 1 3 3 1 
                                . 1 5 5 3 3 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 2 6 5 1 1 . 
                                . 2 6 2 1 5 1 . 
                                . 2 6 6 1 5 1 . 
                                . 1 5 5 1 3 1 . 
                                . 1 5 1 1 3 1 . 
                                . 1 1 5 3 1 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . . 2 1 . . . 
                                . . 2 2 1 1 . . 
                                . . 2 6 5 1 . . 
                                . . 2 6 5 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 1 1 1 . . 
                                . . . 1 1 . . .
                `, img`
                    . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 2 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . . 
                                . . . 1 1 . . .
                `, img`
                    . . . 2 1 . . . 
                                . . 2 2 1 1 . . 
                                . . 2 6 5 1 . . 
                                . . 2 6 5 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 5 3 1 . . 
                                . . 1 1 1 1 . . 
                                . . . 1 1 . . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 2 6 5 1 1 . 
                                . 2 6 2 1 5 1 . 
                                . 2 6 2 5 5 1 . 
                                . 1 5 1 3 3 1 . 
                                . 1 5 1 1 3 1 . 
                                . 1 1 5 3 1 1 . 
                                . . 1 1 1 1 . .
                `], 200, true)
        tiles.placeOnRandomTile(coinanimation, assets.tile`
            myTile21
        `)
    } else {
        
    }
    
    roller = sprites.create(img`
            . . 2 2 1 1 . . 
                    . 2 f f b b 1 . 
                    2 f f f b b b 1 
                    2 f 2 f b 1 b 1 
                    1 b b b 9 9 9 1 
                    1 b 1 1 1 1 9 1 
                    . 1 b b 9 9 1 . 
                    . . 1 1 1 1 . .
        `, SpriteKind.Player)
    hitbox_ = sprites.create(img`
        7
    `, SpriteKind.hitbox)
    camera = sprites.create(img`
        c
    `, SpriteKind.hitbox)
    scene.cameraFollowSprite(camera)
    roller.y = 92
    roller.x = 0
    hitbox_.y = 92
    hitbox_.x = 0
    roller.ay = 400
    roller.setVelocity(48, 0)
    hitbox_.setFlag(SpriteFlag.Invisible, true)
    camera.setFlag(SpriteFlag.Invisible, true)
    camera.setFlag(SpriteFlag.Ghost, true)
    animation.runImageAnimation(roller, [img`
                . . 2 2 1 1 . . 
                        . 2 f f b b 1 . 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b 1 1 1 1 9 1 
                        . 1 b b 9 9 1 . 
                        . . 1 1 1 1 . .
            `, img`
                . . 2 2 1 1 . . 
                        . 2 f f b b 1 . 
                        2 f 2 f 1 b b 1 
                        2 f 2 f b b b 1 
                        1 b 1 b 9 9 9 1 
                        1 b 1 b 1 9 9 1 
                        . 1 b b 9 9 1 . 
                        . . 1 1 1 1 . .
            `, img`
                . . 2 2 1 1 . . 
                        . 2 f f b b 1 . 
                        2 f 2 2 1 1 b 1 
                        2 f f f b b b 1 
                        1 b 1 b 9 1 9 1 
                        1 b b b 9 9 9 1 
                        . 1 b b 9 9 1 . 
                        . . 1 1 1 1 . .
            `, img`
                . . 2 2 1 1 . . 
                        . 2 f f b b 1 . 
                        2 f f 2 b 1 b 1 
                        2 f f f b 1 b 1 
                        1 b b b 9 1 9 1 
                        1 b b 1 9 1 9 1 
                        . 1 b b 9 9 1 . 
                        . . 1 1 1 1 . .
            `], 100, true)
    sprites.destroy(attemptcounter)
    attemptcounter = textsprite.create("Attempt " + ("" + attempts), 0, 15)
    attemptcounter.setOutline(2, 1)
    attemptcounter.x = 50
    gamestart = true
    if (gamestart == true) {
        
    }
    
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile61
    `, function on_overlap_tile18(sprite19: Sprite, location18: tiles.Location) {
    color.startFade(color.GrayScale, color.originalPalette, 500)
})
function loadmenu_() {
    
    scene.setBackgroundColor(randint(0, 15))
    tiles.setSmallTilemap(tilemap`
        level25
    `)
    music.stopAllSounds()
    fakerollerfunction()
    color.startFade(color.Black, color.originalPalette, 200)
    r_o_l_l_e_r()
    mainmenu = miniMenu.createMenu(miniMenu.createMenuItem("MAIN LEVELS"), miniMenu.createMenuItem("FORUM LEVELS"), miniMenu.createMenuItem("CREDITS"))
    mainmenu.setDimensions(160, 49)
    mainmenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    mainmenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    mainmenu.x = 80
    mainmenu.y = 109
    mainmenu.onButtonPressed(controller.A, function on_button_pressed5(selection5: any, selectedIndex5: any) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        mainmenu.close()
        fakerollervariable = false
        sprites.destroy(fakeroller)
        if (menustart == false) {
            if (selectedIndex5 == 0) {
                gamemenu_()
            } else if (selectedIndex5 == 1) {
                forumpage()
            } else {
                game.showLongText("Art - AbstractDesigner", DialogLayout.Full)
                game.showLongText("Menu - PixelDoodle", DialogLayout.Full)
                game.showLongText("Breeze - @InvalidPraject", DialogLayout.Full)
                game.showLongText("Reset fix - Sarge", DialogLayout.Full)
                game.reset()
            }
            
        }
        
    })
    music.play(music.createSong(hex`
            00f0000408080300001c00010a006400f401640000040000000000000000000000000005000004880000000200010c10001200030c93181e002000018e20002200010f30003200030c0f9340004200010c50005200030a8e115e006000010c60006200010a7000720003870a8e80008200010c90009200030c93189e00a000018ea000a200010fb000b200030c0f93c000c200010cd000d200030a8e11de00e000010ce000e200010af000f20003870a8e06001c00010a006400f4016400000400000000000000000000000000000000024600000020000218242000400002939f4000600002111d60007000020f1b70008000028e9a8000a000021824a000c00002939fc000e0000295a1e000f000029aa6f000000102162209010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001001000001000201040800090001040c000d0001021000110001081800190001021c001d00010424002500010428002900010430003100010838003900020104400041000201044800490001044c004d0001015000510001085800590001015c005d000104640065000104680069000104700071000108740075000108780079000201087c007d000108800081000201048800890001048c008d0001029000910001089800990001029c009d000104a400a5000104a800a9000104b000b1000108b800b900020104c000c100020104c800c9000104cc00cd000101d000d1000108d800d9000101dc00dd000104e400e5000104e800e9000104f000f1000108f400f5000108f800f900020108fc00fd000108
        `), music.PlaybackMode.LoopingInBackground)
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile40
    `, function on_overlap_tile19(sprite20: Sprite, location19: tiles.Location) {
    
    speed = 5
    roller.setVelocity(200, 0)
    speedparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile40
            `, assets.tile`
                myTile46
            `)
        timer.after(200, function on_after11() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile46
                `, assets.tile`
                    myTile40
                `)
        })
    }
    
})
function deathanimation() {
    
    music.play(music.createSoundEffect(WaveShape.Square, 4335, 186, 250, 0, 386, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    characterAnimations.setCharacterAnimationsEnabled(roller, false)
    animation.stopAnimation(animation.AnimationTypes.All, roller)
    animation.runImageAnimation(roller, [img`
                . . 2 2 1 1 . . 
                        . 2 f f b b 1 . 
                        2 f f f b b b 1 
                        2 f 2 f b 1 b 1 
                        1 b b b 9 9 9 1 
                        1 b 1 1 1 1 9 1 
                        . 1 b b 9 9 1 . 
                        . . 1 1 1 1 . .
            `, img`
                . . 1 1 2 . . . 
                        . . b b f . . . 
                        . . 1 b 2 . . . 
                        1 b 1 b f f f 2 
                        1 9 . . . b b 1 
                        1 9 . . . b b 1 
                        . 1 . . . b 1 . 
                        . . 1 1 1 1 . .
            `, img`
                . . . . . . . . 
                        . 1 . . . . . . 
                        1 . . . . . . 1 
                        . . . . . . . 1 
                        . . . . . . . 2 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . 2 . . .
            `, img`
                . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . . 
                        . . . . . . . .
            `], 100, false)
    if (true) {
        deathparticle = sprites.create(img`
                . 1 1 1 
                            . 1 b b 
                            1 1 b b 
                            1 f f 1
            `, SpriteKind.Particle)
        deathparticle.x = roller.x
        deathparticle.y = roller.y
        deathparticle.setVelocity(randint(-30, 10), randint(20, 30))
        deathparticle.ay = 400
        deathparticle.vy = randint(-50, -150)
        deathparticle.setFlag(SpriteFlag.Ghost, true)
    }
    
    if (true) {
        deathparticle = sprites.create(img`
                b b 9 9 1 
                            b b 9 9 1 
                            b b 9 1 1 
                            1 1 1 1 .
            `, SpriteKind.Particle)
        deathparticle.x = roller.x
        deathparticle.y = roller.y
        deathparticle.setVelocity(randint(-10, 30), randint(20, 30))
        deathparticle.ay = 400
        deathparticle.vy = randint(-50, -150)
        deathparticle.setFlag(SpriteFlag.Ghost, true)
    }
    
    if (true) {
        deathparticle = sprites.create(img`
                1 1 1 1 1 
                            b b b 1 1 
                            f f 1 1 .
            `, SpriteKind.Particle)
        deathparticle.x = roller.x
        deathparticle.y = roller.y
        deathparticle.setVelocity(randint(-25, 25), randint(20, 30))
        deathparticle.ay = 400
        deathparticle.vy = randint(-50, -150)
        deathparticle.setFlag(SpriteFlag.Ghost, true)
    }
    
    if (true) {
        deathparticle = sprites.create(img`
                1 b 
                            1 b 
                            1 1
            `, SpriteKind.Particle)
        deathparticle.x = roller.x
        deathparticle.y = roller.y
        deathparticle.setVelocity(randint(-10, 50), randint(20, 30))
        deathparticle.ay = 400
        deathparticle.vy = randint(-50, -150)
        deathparticle.setFlag(SpriteFlag.Ghost, true)
    }
    
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile
    `, function on_overlap_tile20(sprite21: Sprite, location20: tiles.Location) {
    if (gamestart == true) {
        extraEffects.createSpreadEffectOnAnchor(roller, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Twinkle), 100, 1, 1)
        roller.vy = -125
        if (roller.isHittingTile(CollisionDirection.Bottom)) {
            animation.stopAnimation(animation.AnimationTypes.All, roller)
            animation.runImageAnimation(roller, [img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f f f b b b 1 
                                        2 f 2 f b 1 b 1 
                                        1 b b b 9 9 9 1 
                                        1 b 1 1 1 1 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f 2 f 1 b b 1 
                                        2 f 2 f b b b 1 
                                        1 b 1 b 9 9 9 1 
                                        1 b 1 b 1 9 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f 2 2 1 1 b 1 
                                        2 f f f b b b 1 
                                        1 b 1 b 9 1 9 1 
                                        1 b b b 9 9 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f f 2 b 1 b 1 
                                        2 f f f b 1 b 1 
                                        1 b b b 9 1 9 1 
                                        1 b b 1 9 1 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `], 100, true)
        }
        
    }
    
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        tile69
    `, function on_overlap_tile21(sprite22: Sprite, location21: tiles.Location) {
    scene.cameraShake(2, 500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile41
    `, function on_overlap_tile22(sprite23: Sprite, location22: tiles.Location) {
    
    speed = 0
    roller.setVelocity(24, 0)
    noparticles()
    if (true) {
        tileUtil.replaceAllTiles(assets.tile`
                myTile41
            `, assets.tile`
                myTile25
            `)
        timer.after(200, function on_after12() {
            tileUtil.replaceAllTiles(assets.tile`
                    myTile25
                `, assets.tile`
                    myTile41
                `)
        })
    }
    
})
function fakerollerfunction() {
    
    if (fakerollervariable == true) {
        fakeroller = sprites.create(img`
                . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . . 
                            . . . . . . . .
            `, SpriteKind.fake)
        animation.runImageAnimation(fakeroller, [img`
                    . . 2 2 1 1 . . 
                                . 2 f f b b 1 . 
                                2 f f f b b b 1 
                                2 f 2 f b 1 b 1 
                                1 b b b 9 9 9 1 
                                1 b 1 1 1 1 9 1 
                                . 1 b b 9 9 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 f f b b 1 . 
                                2 f 2 f 1 b b 1 
                                2 f 2 f b b b 1 
                                1 b 1 b 9 9 9 1 
                                1 b 1 b 1 9 9 1 
                                . 1 b b 9 9 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 f f b b 1 . 
                                2 f 2 2 1 1 b 1 
                                2 f f f b b b 1 
                                1 b 1 b 9 1 9 1 
                                1 b b b 9 9 9 1 
                                . 1 b b 9 9 1 . 
                                . . 1 1 1 1 . .
                `, img`
                    . . 2 2 1 1 . . 
                                . 2 f f b b 1 . 
                                2 f f 2 b 1 b 1 
                                2 f f f b 1 b 1 
                                1 b b b 9 1 9 1 
                                1 b b 1 9 1 9 1 
                                . 1 b b 9 9 1 . 
                                . . 1 1 1 1 . .
                `], 100, true)
        fakeroller.x = 5
        fakeroller.y = 66
        fakeroller.ay = 400
        fakeroller.setVelocity(randint(50, 120), 0)
        fakeroller.lifespan = 4000
        fakeroller.setFlag(SpriteFlag.GhostThroughTiles, true)
        fakeroller.setFlag(SpriteFlag.GhostThroughWalls, false)
        timer.after(randint(4000, 5000), function on_after13() {
            sprites.destroyAllSpritesOfKind(SpriteKind.fake)
            fakerollerfunction()
        })
    }
    
}

function r_o_l_l_e_r() {
    
    r = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 . . . 
                    1 1 1 b b b b b b b b 1 1 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b 1 1 1 1 b b b 1 . 
                    1 1 1 b b b 1 1 1 1 b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `, SpriteKind.letter)
    r.x = 38
    r.y = 40
    animation.runMovementAnimation(r, animation.animationPresets(animation.bobbing), 2000, true)
    o = sprites.create(img`
            1111.................
                    144111...11111111....
                    154441111111ffff111..
                    1554444411fffffbbb11.
                    115544441ffffffbbbb1.
                    .15555411fffffbbbbb11
                    .1165551bfffffbbb1bb1
                    ..116651bbbff1bbbbbb1
                    ...11661bbbbbb9911bb1
                    ....1661bbbbbb11999b1
                    ....1161bbbbbb9999911
                    .....1111bbbb9999991.
                    .......111bbb9999911.
                    .........1119999111..
                    ...........111111....
        `, SpriteKind.letter)
    o.x = 56
    o.y = 40
    timer.after(200, function on_after14() {
        animation.runMovementAnimation(o, animation.animationPresets(animation.bobbing), 2000, true)
    })
    l = sprites.create(img`
            1 1 1 1 1 1 1 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 1 1 1 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `, SpriteKind.letter)
    l.x = 78
    l.y = 40
    timer.after(400, function on_after15() {
        animation.runMovementAnimation(l, animation.animationPresets(animation.bobbing), 2000, true)
    })
    l2 = sprites.create(img`
            1 1 1 1 1 1 1 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 b b b b 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 . . . . . . . 
                    1 1 1 9 9 9 9 1 1 1 1 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `, SpriteKind.letter)
    l2.x = 93
    l2.y = 40
    timer.after(600, function on_after16() {
        animation.runMovementAnimation(l2, animation.animationPresets(animation.bobbing), 2000, true)
    })
    e = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b 1 1 1 1 1 1 1 . 
                    1 1 1 b b b b 1 1 1 1 1 1 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 1 1 1 1 1 . 
                    1 1 1 9 9 9 9 1 1 1 1 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `, SpriteKind.letter)
    e.x = 108
    e.y = 40
    timer.after(800, function on_after17() {
        animation.runMovementAnimation(e, animation.animationPresets(animation.bobbing), 2000, true)
    })
    r2 = sprites.create(img`
            1 1 1 1 1 1 1 1 1 1 1 1 . . . 
                    1 1 1 b b b b b b b b 1 1 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b 1 1 1 1 b b b 1 . 
                    1 1 1 b b b 1 1 1 1 b b b 1 . 
                    1 1 1 b b b b b b b b b b 1 . 
                    1 1 1 b b b b b b b b 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 1 1 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 9 9 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 9 9 9 9 1 1 9 9 9 9 1 . 
                    1 1 1 1 1 1 1 1 1 1 1 1 1 1 .
        `, SpriteKind.letter)
    r2.x = 125
    r2.y = 40
    timer.after(1000, function on_after18() {
        animation.runMovementAnimation(r2, animation.animationPresets(animation.bobbing), 2000, true)
    })
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    `)
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . .
    `)
}

function practicemoderespawn() {
    roller.setImage(img`
        . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . .
    `)
    music.stopAllSounds()
    deathanimation()
    roller.setVelocity(0, 0)
    camera.setVelocity(0, 0)
    timer.after(1000, function on_after19() {
        roller.x = 0
        roller.y = 0
    })
}

function gamemenu_() {
    
    scene.setBackgroundColor(0)
    tiles.setCurrentTilemap(tilemap`
        level28
    `)
    gamemenu = miniMenu.createMenu(miniMenu.createMenuItem("Sprinter", img`
                . 2 2 2 1 1 1 . 
                        2 2 c c a a 1 1 
                        2 c 2 c a 1 a 1 
                        2 c c c a a a 1 
                        1 a 1 1 1 1 9 1 
                        1 a a 1 1 9 9 1 
                        1 1 a a 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Travel", img`
                . 2 2 2 1 1 1 . 
                        2 2 c c a a 1 1 
                        2 c 2 c a 1 a 1 
                        2 c c c a a a 1 
                        1 a 1 1 1 1 9 1 
                        1 a a 1 1 9 9 1 
                        1 1 a a 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Phantom", img`
                . 2 2 2 1 1 1 . 
                        2 2 7 7 8 8 1 1 
                        2 7 2 7 8 1 8 1 
                        2 7 7 7 8 8 8 1 
                        1 8 1 8 9 1 9 1 
                        1 8 8 1 1 9 9 1 
                        1 1 8 8 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Aurora", img`
                . 2 2 2 1 1 1 . 
                        2 2 7 7 8 8 1 1 
                        2 7 2 7 8 1 8 1 
                        2 7 7 7 8 8 8 1 
                        1 8 1 8 9 1 9 1 
                        1 8 8 1 1 9 9 1 
                        1 1 8 8 9 9 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Dehydrated", img`
                . 2 2 2 1 1 1 . 
                        2 2 6 6 5 5 1 1 
                        2 6 6 6 5 5 5 1 
                        2 6 2 6 5 1 5 1 
                        1 5 5 5 3 3 3 1 
                        1 5 1 1 1 1 3 1 
                        1 1 5 5 3 3 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Breaker", img`
                . 2 2 2 1 1 1 . 
                        2 2 5 5 4 4 1 1 
                        2 2 2 2 1 1 1 1 
                        2 5 2 5 4 1 4 1 
                        1 4 4 1 1 3 3 1 
                        1 4 1 4 3 1 3 1 
                        1 1 4 4 3 3 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Zero", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Virus", img`
                . 2 . . . . 1 . 
                        2 f 2 2 1 1 b 1 
                        2 2 4 4 3 3 1 1 
                        2 4 7 4 3 8 3 1 
                        2 4 4 4 3 3 3 1 
                        1 3 b f 2 9 1 1 
                        1 3 f b 9 2 1 1 
                        1 1 3 3 1 1 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Thunder", img`
                . 2 2 2 1 1 1 . 
                        2 2 6 6 5 5 1 1 
                        2 6 6 6 5 5 5 1 
                        2 6 2 6 5 1 5 1 
                        1 5 5 5 3 3 3 1 
                        1 5 1 1 1 1 3 1 
                        1 1 5 5 3 3 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Prism Plasma", img`
                . 2 2 2 1 1 1 . 
                        2 e 2 2 1 1 d 1 
                        2 e 2 e d 1 d 1 
                        2 e e 2 1 d d 1 
                        1 d 1 1 1 1 2 1 
                        1 d 1 1 1 1 2 1 
                        1 1 d d 2 2 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("Breeze", img`
                . 2 . . . . 1 . 
                        2 f 2 2 1 1 b 1 
                        2 2 4 4 3 3 1 1 
                        2 4 7 4 3 8 3 1 
                        2 4 4 4 3 3 3 1 
                        1 3 b f 2 9 1 1 
                        1 3 f b 9 2 1 1 
                        1 1 3 3 1 1 1 1 
                        . 1 1 1 1 1 1 .
            `), miniMenu.createMenuItem("BACK"))
    gamemenu.setDimensions(160, 120)
    gamemenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 16)
    gamemenu.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Foreground, 15)
    gamemenu.x = 80
    gamemenu.y = 60
    gamemenu.onButtonPressed(controller.A, function on_button_pressed6(selection6: any, selectedIndex6: number) {
        
        music.play(music.createSoundEffect(WaveShape.Square, 419, 324, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        color.startFade(color.originalPalette, color.Black, 100)
        color.pauseUntilFadeDone()
        color.startFade(color.Black, color.originalPalette, 100)
        if (true) {
            sprites.destroy(r)
            sprites.destroy(o)
            sprites.destroy(l)
            sprites.destroy(l2)
            sprites.destroy(e)
            sprites.destroy(r2)
        }
        
        gamemenu.close()
        if (menustart == false) {
            if (selection6 == "BACK") {
                game.reset()
            } else {
                attempts = 1
                music.stopAllSounds()
                music.play(music.createSong(hex`
                        00c8000408010100001c00010a006400f401640000040000000000000000000000000005000004180000000200011d02000400012404000600012706000800012c
                    `), music.PlaybackMode.UntilDone)
                loadLevel(false, selectedIndex6)
            }
            
        }
        
    })
}

scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile7
    `, function on_overlap_tile23(sprite24: Sprite, location23: tiles.Location) {
    if (gamestart == true) {
        extraEffects.createSpreadEffectOnAnchor(roller, extraEffects.createSingleColorSpreadEffectData(6, ExtraEffectPresetShape.Twinkle), 100, 1, 1)
        roller.vy = 125
        if (roller.isHittingTile(CollisionDirection.Top)) {
            animation.stopAnimation(animation.AnimationTypes.All, roller)
            animation.runImageAnimation(roller, [img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f f f b b b 1 
                                        2 f 2 f b 1 b 1 
                                        1 b b b 9 9 9 1 
                                        1 b 1 1 1 1 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f f 2 b 1 b 1 
                                        2 f f f b 1 b 1 
                                        1 b b b 9 1 9 1 
                                        1 b b 1 9 1 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f 2 2 1 1 b 1 
                                        2 f f f b b b 1 
                                        1 b 1 b 9 1 9 1 
                                        1 b b b 9 9 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `, img`
                        . . 2 2 1 1 . . 
                                        . 2 f f b b 1 . 
                                        2 f 2 f 1 b b 1 
                                        2 f 2 f b b b 1 
                                        1 b 1 b 9 9 9 1 
                                        1 b 1 b 1 9 9 1 
                                        . 1 b b 9 9 1 . 
                                        . . 1 1 1 1 . .
                    `], 100, true)
        }
        
    }
    
})
function speedparticles() {
    
    particletoggle = true
}

scene.onOverlapTile(SpriteKind.Player, assets.tile`
        myTile56
    `, function on_overlap_tile24(sprite25: Sprite, location24: tiles.Location) {
    
    brightflash = true
    color.Brighten.startScreenEffect(500)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function on_menu_pressed() {
    
    practicemode = true
    game.splash("PRACTICE MODE")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        tile68
    `, function on_overlap_tile25(sprite26: Sprite, location25: tiles.Location) {
    color.startFade(color.White, color.originalPalette, 500)
})
scene.onOverlapTile(SpriteKind.hitbox, assets.tile`
        myTile105
    `, function on_overlap_tile26(sprite27: Sprite, location26: tiles.Location) {
    if (practicemode == false) {
        if (gamestart == true) {
            sprites.destroy(roller)
            music.stopAllSounds()
            deathanimation()
            sprites.destroy(hitbox_)
            roller.setVelocity(0, 0)
            camera.setVelocity(0, 0)
            timer.after(1000, function on_after20() {
                restartlevel()
            })
        }
        
    } else {
        practicemoderespawn()
    }
    
})
let speedparticle : Sprite = null
let gamemenu : miniMenu.MenuSprite = null
let deathparticle : Sprite = null
let fakeroller : Sprite = null
let attemptcounter : TextSprite = null
let mainmenu : miniMenu.MenuSprite = null
let coinanimation : Sprite = null
let customlevels : miniMenu.MenuSprite = null
let checkpointsprite : Sprite = null
let forumpages : miniMenu.MenuSprite = null
let customlevels_p3 : miniMenu.MenuSprite = null
let forummenupage = 0
let r2 : Sprite = null
let e : Sprite = null
let l2 : Sprite = null
let l : Sprite = null
let o : Sprite = null
let r : Sprite = null
let customlevels_p2 : miniMenu.MenuSprite = null
let lvname = ""
let loadingscreen : Sprite = null
let gravity = 0
let attempts = 0
let camera : Sprite = null
let hitbox_ : Sprite = null
let roller : Sprite = null
let gamestart = false
let practicemode = false
let hitwall = false
let particletoggle = false
let menustart = false
let currentlevelisforum = false
let currentlevel = 0
let getcoin = false
let brightflash = false
let coinplace = false
let speed = 0
let fakerollervariable = false
fakerollervariable = true
speed = 1
coinplace = true
brightflash = true
getcoin = false
currentlevel = 0
currentlevelisforum = false
menustart = false
particletoggle = false
hitwall = false
practicemode = false
loadingcreen_()
game.onUpdate(function on_on_update() {
    
    if (practicemode == false) {
        if (gamestart == true) {
            if (hitwall == false) {
                if (roller.isHittingTile(CollisionDirection.Right)) {
                    hitwall = true
                    roller.setVelocity(0, 0)
                    camera.setVelocity(0, 0)
                    sprites.destroy(roller)
                    sprites.destroy(hitbox_)
                    music.stopAllSounds()
                    deathanimation()
                    timer.after(1000, function on_after21() {
                        restartlevel()
                    })
                }
                
            }
            
        }
        
    } else {
        practicemoderespawn()
    }
    
})
game.onUpdate(function on_on_update2() {
    if (gamestart == true) {
        if (roller.isHittingTile(CollisionDirection.Bottom)) {
            if (0 < roller.vx) {
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Spark), roller.x - 5, roller.y + 3, 100, 1, 1)
            }
            
        } else if (roller.isHittingTile(CollisionDirection.Top)) {
            if (0 < roller.vx) {
                extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Spark), roller.x - 5, roller.y - 4, 100, 1, 1)
            }
            
        }
        
    }
    
})
game.onUpdate(function on_on_update3() {
    
    if (gamestart == true) {
        if (controller.A.isPressed()) {
            if (roller.isHittingTile(CollisionDirection.Top)) {
                if (gravity == 1) {
                    gravity = 0
                    if (speed == 0) {
                        roller.vy = 2
                    } else if (speed == 1) {
                        roller.vy = 5
                    } else if (speed == 2) {
                        roller.vy = 8
                    } else if (speed == 3) {
                        roller.vy = 10
                    } else if (speed == 4) {
                        roller.vy = 15
                    } else if (speed == 5) {
                        roller.vy = 20
                    }
                    
                    roller.ay = 324
                    animation.stopAnimation(animation.AnimationTypes.All, roller)
                    animation.runImageAnimation(roller, [img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f f f b b b 1 
                                                        2 f 2 f b 1 b 1 
                                                        1 b b b 9 9 9 1 
                                                        1 b 1 1 1 1 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f 2 f 1 b b 1 
                                                        2 f 2 f b b b 1 
                                                        1 b 1 b 9 9 9 1 
                                                        1 b 1 b 1 9 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f 2 2 1 1 b 1 
                                                        2 f f f b b b 1 
                                                        1 b 1 b 9 1 9 1 
                                                        1 b b b 9 9 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f f 2 b 1 b 1 
                                                        2 f f f b 1 b 1 
                                                        1 b b b 9 1 9 1 
                                                        1 b b 1 9 1 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `], 100, true)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), roller.x - 5, roller.y - 4, 100, 5, 5)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(10, ExtraEffectPresetShape.Spark), roller.x - 5, roller.y - 4, 5, 2, 2)
                }
                
            }
            
            if (roller.isHittingTile(CollisionDirection.Bottom)) {
                if (gravity == 0) {
                    gravity = 1
                    if (speed == 0) {
                        roller.vy = -2
                    } else if (speed == 1) {
                        roller.vy = -5
                    } else if (speed == 2) {
                        roller.vy = -8
                    } else if (speed == 3) {
                        roller.vy = -10
                    } else if (speed == 4) {
                        roller.vy = -15
                    } else if (speed == 5) {
                        roller.vy = -20
                    }
                    
                    roller.ay = -324
                    animation.stopAnimation(animation.AnimationTypes.All, roller)
                    animation.runImageAnimation(roller, [img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f f f b b b 1 
                                                        2 f 2 f b 1 b 1 
                                                        1 b b b 9 9 9 1 
                                                        1 b 1 1 1 1 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f f 2 b 1 b 1 
                                                        2 f f f b 1 b 1 
                                                        1 b b b 9 1 9 1 
                                                        1 b b 1 9 1 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f 2 2 1 1 b 1 
                                                        2 f f f b b b 1 
                                                        1 b 1 b 9 1 9 1 
                                                        1 b b b 9 9 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `, img`
                                . . 2 2 1 1 . . 
                                                        . 2 f f b b 1 . 
                                                        2 f 2 f 1 b b 1 
                                                        2 f 2 f b b b 1 
                                                        1 b 1 b 9 9 9 1 
                                                        1 b 1 b 1 9 9 1 
                                                        . 1 b b 9 9 1 . 
                                                        . . 1 1 1 1 . .
                            `], 100, true)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(12, ExtraEffectPresetShape.Twinkle), roller.x - 5, roller.y + 3, 100, 5, 5)
                    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(10, ExtraEffectPresetShape.Spark), roller.x - 5, roller.y + 3, 5, 2, 2)
                }
                
            }
            
        }
        
    }
    
})
game.onUpdate(function on_on_update4() {
    if (gamestart == true) {
        hitbox_.x = roller.x
        hitbox_.y = roller.y
        camera.x = roller.x + 40
    }
    
})
game.onUpdate(function on_on_update5() {
    if (fakerollervariable == true) {
        extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(11, ExtraEffectPresetShape.Spark), fakeroller.x - 5, fakeroller.y + 3, 100, 1, 1)
    }
    
})
game.onUpdateInterval(500, function on_update_interval() {
    
    if (particletoggle == true) {
        if (Math.percentChance(33.3)) {
            speedparticle = sprites.create(img`
                f f f
            `, SpriteKind.Particle)
            speedparticle.setPosition(randint(20, 3000), randint(10, 75))
            speedparticle.setVelocity(-200, 0)
            speedparticle.lifespan = 3000
            speedparticle.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        
        if (Math.percentChance(33.3)) {
            speedparticle = sprites.create(img`
                b b
            `, SpriteKind.Particle)
            speedparticle.setPosition(randint(20, 3000), randint(10, 75))
            speedparticle.setVelocity(-200, 0)
            speedparticle.lifespan = 3000
            speedparticle.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        
        if (Math.percentChance(33.3)) {
            speedparticle = sprites.create(img`
                1 1
            `, SpriteKind.Particle)
            speedparticle.setPosition(randint(20, 3000), randint(10, 75))
            speedparticle.setVelocity(-200, 0)
            speedparticle.lifespan = 3000
            speedparticle.setFlag(SpriteFlag.GhostThroughWalls, true)
        }
        
    } else if (particletoggle == false) {
        
    }
    
})
