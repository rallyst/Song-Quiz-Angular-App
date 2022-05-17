import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {

  song = '../../../assets/Reamonn - Josephine.mp3'

  currentTime: number = 0;
  state = 'play';
  timeCounter!: any
  durationInSeconds!: number;
  player!: any;

  convertedDuration!: string;

  minutes!: any;
  seconds!: any;

  constructor( ) { }

  startplayer() {
    this.player = document.getElementById('music_player');
    this.player.controls = false;
    // this.player.play();
    // this.getMinutes();
    // this.getSeconds();
    }


    audioHandler() {
      // this.getMinutes();
      // this.getSeconds();
      this.convertedDuration = this.convertDuration(this.player.duration)
      this.durationInSeconds = +(this.player.duration).toFixed(0);

      if (this.state === 'pause') {
        this.pauseAudio()
        this.state = 'play'
      } else {
        this.state = 'pause'
        this.player.play();
        this.getCurrentTime();
        // console.log(this.durationTime)
        // console.log((this.player.duration / 60).toFixed(2))
        // this.minutes = Math.floor(+this.player.duration / 60)
        // console.log(this.minutes)
      }
    }

    pauseAudio() {
      // console.log('pauseAudio')
      this.player.pause();
      clearInterval(this.timeCounter)
    }

    // minutes = this.player.duration / 60
    // stop_aud() {
    //   this.player.pause();
    //   this.player.currentTime = 0;
    // }

    // convertDuration(duration: any | null, result: any) {
    //   // console.log(duration)
    //   // this.durationInSeconds = +(duration).toFixed(0);

    //   this.minutes = Math.floor(+this.durationInSeconds / 60);
    //   this.seconds = Math.floor(+this.durationInSeconds) - (this.minutes * 60);

    //   if (this.minutes < 10) {
    //     console.log(`0${this.minutes}:${this.seconds}`)
    //     return this.convertedDuration = `0${this.minutes}:${this.seconds}`
    //   } else {
    //     console.log(`${this.minutes}:${this.seconds}`)
    //     return this.convertedDuration = `${this.minutes}:${this.seconds}`
    //   }

    // }

    convertDuration(duration: any | null) {
      // console.log(duration)
      duration = +(duration).toFixed(0);

      this.minutes = Math.floor(duration / 60);

      this.seconds = Math.floor(duration) - (this.minutes * 60);

      if(this.minutes.toString().length < 2) {

        this.minutes = `0${this.minutes}`;
        // console.log(this.minutes)
      }

      if(this.seconds.toString().length < 2) {
        this.seconds = `0${this.seconds}`;
      }

      console.log(`${this.minutes}:${this.seconds}`)
      return `${this.minutes}:${this.seconds}`
    }

    


    getCurrentTime() {
      this.timeCounter = setInterval(() => {
        this.currentTime = Math.round(this.player.currentTime);
        console.log(this.currentTime)
      }, 1000)
    }
  }

