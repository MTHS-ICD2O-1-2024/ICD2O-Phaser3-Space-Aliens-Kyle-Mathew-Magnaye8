
/* global Phaser */

// Copyright (c) 2025 Emre Guzel All rights reserved
//
// Created by: Kyle Matthew
// Created on: Apr 2025
// This is the Menu Scene

class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'menuScene' })
  }


  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff') // missing # symbol
  }

  preload() {
    console.log('Menu Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default MenuScene
