
/* global Phaser */

// Copyright (c) 2025 Emre Guzel All rights reserved
//
// Created by: Kyle Matthew
// Created on: Apr 2025
// This is the Game Scene

class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'gameScene' })
  }


  init(data) {
    this.cameras.main.setBackgroundColor('#ffffff') // missing # symbol
  }

  preload() {
    console.log('Game Scene')
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default GameScene
