/* global Phaser */

// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

import SpashScene from './spashScene.js'

//Our game scene
const spashScene = new SplashScene()

/**
 * Start Phaser Game.
 */
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  // set background color
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.FIT,
    // we place it in the middle of the page.
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

// Create the Phaser game instance
const game = new Phaser.Game(config)


// load scenes
// NOTE: remend=ber that any "key" is global and CAN NOT be reused!
game.scene.add('spashScene', spashScene)

// start title
game.scene.start('spashScene')