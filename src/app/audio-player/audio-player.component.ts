import { Component, OnInit } from '@angular/core';
import { AudioPlayerService } from './audio-player.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {

  song = '../../../assets/Reamonn - Josephine.mp3'

  currentTime: number = 0;
  // state = 'play';
  timeCounter!: any
  durationTime!: number;
  player!: any;

  constructor(private audioService: AudioPlayerService) { }

  ngOnInit(): void {
    // this.startplayer()
    console.log(this.audioService.state)
  }

  playAudio() {
    console.log(this.audioService.state)
  }
  // startplayer() {
  // this.player = document.getElementById('music_player');
  // this.player.controls = false;

  // }

  // playAudio() {
  //   console.log(this.state)
  //   if (this.state === 'pause') {
  //     console.log('if pause')
  //     this.pause_aud()
  //     this.state = 'play'
  //   } else {
  //     this.state = 'pause'
  //     this.player.play();
  //     this.getCurrentTime();
  //     this.durationTime = +(this.player.duration / 60).toFixed(2);
  //     console.log(this.player.duration)
  //     console.log((this.player.duration / 60).toFixed(2))
  //   }


  // }


  // pause_aud() {
  //   this.player.pause();
  //   clearInterval(this.timeCounter)
  // }

  // stop_aud() {
  //   this.player.pause();
  //   this.player.currentTime = 0;
  // }


  // getCurrentTime() {
  //   this.timeCounter = setInterval(() => {
  //     this.currentTime = Math.ceil(this.player.currentTime);
  //     console.log(this.currentTime)
  //   }, 1000)
  // }
  // change_vol() {
  //  this.player.volume = document.getElementById("change_vol").value;
  // }

  onClick() {



    console.log('erere')

  }


}
