import React,{ useCallback, useEffect, useMemo, useState } from 'react';
import Phaser from 'phaser';
import TestScene from './TestScene';


export default function GameComponent() {

  useEffect(() => {
    const game = new Phaser.Game({
      type: Phaser.AUTO,
      title: 'some-game-title',
      parent: 'game-content',
      orientation: Phaser.Scale.LANDSCAPE,
      localStorageName: 'some-game-title',
      width:0.9*window.screen.width,
      height:0.9*window.screen.height,
      autoRound: true,
      pixelArt: true,
      scene: [
        TestScene
      ],
      physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 0 },
        }
          },
      backgroundColor: '#000000',
    });

  }, []);



  return (
        <>
          <div id="game-content">
          </div>
      </>
  );
}


//add infront of build and start in package.json SET NODE_OPTIONS=--openssl-legacy-provider &&
