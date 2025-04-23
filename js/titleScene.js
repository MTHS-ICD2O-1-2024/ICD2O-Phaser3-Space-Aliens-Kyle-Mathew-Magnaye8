/* global Phaser */

// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Apirl 17 2025
// This is the Title Scene

/**
 * This class is the Splash Scene.
*/
class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }

  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }

  preload() {
    console.log('Title Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}
export default TitleScene