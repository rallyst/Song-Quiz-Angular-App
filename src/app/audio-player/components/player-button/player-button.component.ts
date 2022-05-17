import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { AudioPlayerComponent } from '../../audio-player.component';
import { AudioPlayerService } from '../../audio-player.service';

@Component({
  selector: 'app-player-button',
  templateUrl: './player-button.component.html',
  styleUrls: ['./player-button.component.scss']
})
export class PlayerButtonComponent implements OnInit {


  state = this.audioService.state;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {}

  playAudio() {
    if (this.state === 'play') {
      this.state = 'pause';
    } else {
      this.state = 'play';
    }
    this.audioService.audioHandler();
  }
}
