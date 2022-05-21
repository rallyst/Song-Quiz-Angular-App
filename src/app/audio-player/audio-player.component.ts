import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz/quiz.service';
import { AudioPlayerService } from './audio-player.service';


@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})

export class AudioPlayerComponent implements OnInit {
  song = this.quizService.getSong();
  currentTime: number = 0;
  timeCounter!: any;
  durationTime!: number;
  player!: any;

  constructor(
    private audioService: AudioPlayerService,
    private quizService: QuizService) { }

  ngOnInit(): void {
    this.song = this.quizService.getSong();
    this.audioService.startplayer();
  }
}
