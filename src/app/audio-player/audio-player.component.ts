import { Component, OnInit } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  song = '../../assets/Reamonn - Josephine.mp3'

  currentTime: number = 0;

  timeCounter!: any
  durationTime!: number;
  player!: any;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {
    this.audioService.startplayer();

    // this.audioService.getSeconds()
  }

}
