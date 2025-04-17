/* global Phaser */

// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This is the Splash Scene

/**
 * This class is the Splash Scene.
*/
class SpashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'spashScene' })
  }

  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload () {
    console.log('Spash Scene')
  }

  create (data) {
  }

  update (time, delta) {
  }
}

export default SplashScene