import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  selector: 'app-player-button',
  templateUrl: './player-button.component.html',
  styleUrls: ['./player-button.component.scss']
})
export class PlayerButtonComponent implements OnInit, DoCheck {

  state = 'play';
  currentTime!: number;

  @Input() playerID = '';

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {}

  ngDoCheck() {
    this.state = this.audioService.state;
    this.currentTime = this.audioService.currentTime;
  }

  playAudio(id: string) {
    if (this.state === 'play') {
      this.state = 'pause';
    } else {
      this.state = 'play';
    }

    this.audioService.audioHandler(this.currentTime, this.playerID);
  }
}
