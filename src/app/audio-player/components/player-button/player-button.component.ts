import { Component, DoCheck, OnInit } from '@angular/core';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  selector: 'app-player-button',
  templateUrl: './player-button.component.html',
  styleUrls: ['./player-button.component.scss']
})
export class PlayerButtonComponent implements OnInit, DoCheck {

  state = this.audioService.state;
  currentTime!: number;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    this.currentTime = this.audioService.currentTime;
  }

  playAudio() {
    if (this.state === 'play') {
      this.state = 'pause';
    } else {
      this.state = 'play';
    }

    this.audioService.audioHandler(this.currentTime);
  }
}
