/* global Phaser */

// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Apirl 17 2025
// This is the Splash Scene

/**
 * This class is the Splash Scene.
*/
class SpashScene extends Phaser.Scene {
  constructor() {
    super({ key: 'spashScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('ffffff')
  }

  preload() {
    console.log('Splash Scene')
    this.load.image('splashSceneBackground', './assets/splashSceneImage.png')
  }
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(0, 0, 'splashSceneBackground')
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }
  update(time, delta) {
    if (time > 3000) {
      this.scene.switch('titleScene')
    }
  }
}
export default SpashScene