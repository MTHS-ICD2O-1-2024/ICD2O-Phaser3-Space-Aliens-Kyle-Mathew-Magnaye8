
/* global Phaser */

// Copyright (c) 2025 Emre Guzel All rights reserved
//
// Created by: Kyle Matthew
// Created on: Apr 2025
// This is the Title Scene

class TitleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'titleScene' })
  }
  
  
  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff") // missing # symbol
  }

  preload() {
    console.log("Title Scene")
  }

  create(data) {
  }

  update(time, delta) {
  }
}

export default TitleScene
