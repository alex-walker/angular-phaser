import { Component } from '@angular/core';
import { Game, AUTO } from 'phaser-ce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Phaser';

  game: Game;

  constructor() {
    this.game = new Game(800, 600, AUTO, '', { preload: this.preload, create: this.create });
  }

  preload() {
    this.game.load.image('logo', 'assets/phaser.png');
  }

  create() {
    let logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  }

}
