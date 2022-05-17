import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  song = '../../../assets/Reamonn - Josephine.mp3'

  currentTime: number = 0;
  state = 'play';
  timeCounter!: any
  durationTime!: number;
  player!: any;

  constructor( ) { }

  // startplayer() {
    // this.player = document.getElementById('music_player');
    // this.player.controls = false;
    // }

  // changeState() {
  //   this.state = 'pause';
  //   // console.log(this.state)
  // }

  // test() {
  //   console.log()
  //   console.log('play song')
  // }

    audioHandler() {
      this.player = document.getElementById('music_player');
      this.player.controls = false;

      if (this.state === 'pause') {
        this.pauseAudio()
        this.state = 'play'
      } else {
        this.state = 'pause'
        this.player.play();
        this.getCurrentTime();
        this.durationTime = +(this.player.duration / 60).toFixed(2);
        console.log(this.player.duration)
        console.log((this.player.duration / 60).toFixed(2))
      }
    }

    pauseAudio() {
      console.log('pauseAudio')
      this.player.pause();
      clearInterval(this.timeCounter)
    }

    // stop_aud() {
    //   this.player.pause();
    //   this.player.currentTime = 0;
    // }


    getCurrentTime() {
      this.timeCounter = setInterval(() => {
        this.currentTime = Math.ceil(this.player.currentTime);
        console.log(this.currentTime)
      }, 1000)
    }
  }

