import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { AudioPlayerService } from 'src/app/audio-player/audio-player.service';
import { QuizService } from '../quiz.service';
import { Song } from '../song.model';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit, DoCheck {

  @Input() correctAnswer = this.quizService.correctAnswer;
  @Input() imageUrl!: string;
  @Input() genre = this.quizService.getGenre();
  @Input() song = this.quizService.getAudioUrl(this.quizService.correctId);

  songsArray$!: Observable<Array<Song>>;
  refreshSongs$ = new BehaviorSubject<boolean>(true);

  constructor(
    private quizService: QuizService,
    private audioService: AudioPlayerService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.genre = this.quizService.getGenre();
    this.correctAnswer = this.quizService.correctAnswer;
    this.imageUrl = this.quizService.getCorrectImageUrl();
    this.song = this.quizService.getAudioUrl(this.quizService.correctId);
    this.audioService.startPlayer('music-player-1');
    this.songsArray$ = this.refreshSongs$
      .pipe(switchMap(_ => this.quizService.getSongs()))
  }
}
