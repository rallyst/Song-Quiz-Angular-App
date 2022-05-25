import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  currentTime: number = 0;
  state = 'play';
  timeCounter!: any
  durationInSeconds!: number;
  player!: any;
  convertedDuration!: string;
  minutes!: any;
  seconds!: any;

  constructor( ) { }

  startPlayer(id: string) {
    this.player = document.getElementById(id);
    this.player.controls = false;
  }

  stateChanger(state: any) {
    this.state === 'pause'
      ? this.state = 'play'
      : this.state = 'pause'
  }

  playMusic(curTime: number) {
    this.player.currentTime = curTime;
    this.player.play();
    this.getCurrentTime();
  }

  loadMusic() {
    this.player.load();
  }

  getTime(curTime: number) {
    this.currentTime = curTime;
  }

  reloadAudio() {
    this.state = 'play';
    this.pauseAudio();
    this.getTime(0);
    this.loadMusic();

  }

  audioHandler(curTime: number, id: string) {
    this.convertedDuration = this.convertDuration(this.player.duration)
    this.durationInSeconds = +(this.player.duration).toFixed(0);

    if (this.state === 'pause') {
      this.pauseAudio();
    } else {
      this.playMusic(curTime);
    }

    this.stateChanger(this.state);
  }

  pauseAudio() {
    this.player.pause();
    clearInterval(this.timeCounter);
  }

  convertDuration(duration: any | null = 0) {
    this.minutes = Math.floor(duration / 60);
    this.seconds = Math.floor(duration) - (this.minutes * 60);

    if(this.minutes.toString().length < 2) {
      this.minutes = `0${this.minutes}`;
    }

    if(this.seconds.toString().length < 2) {
      this.seconds = `0${this.seconds}`;
    }

    return `${this.minutes}:${this.seconds}`
  }

  getCurrentTime() {
    this.timeCounter = setInterval(() => {
      this.currentTime = Math.round(this.player.currentTime);
    }, 1000)
  }
}
