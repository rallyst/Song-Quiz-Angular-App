import { Component, DoCheck, Input,  OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Song } from '../quiz/song.model'
import { Router } from '@angular/router';
import { AudioPlayerService } from '../audio-player/audio-player.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, DoCheck {

  playerName = this.quizService.playerName;
  totalScores = this.quizService.totalScores;
  songsArray = this.quizService.getGenreSongs();
  selected = +this.quizService.selectedID;
  round: number = this.quizService.quizRound;
  btnName!: string;

  @Input() correctAnswer = this.quizService.correctAnswer;
  @Input() clicked = this.quizService.clicked;
  @Input() selectedID = this.quizService.selectedID;
  @Input() cardId!: string;
  @Input() id = this.quizService.selectedID;
  @Input() song: Song = this.songsArray[this.id];
  @Input() imageUrl = this.quizService.getImageUrl();
  @Input() songUrl = this.quizService.getAudioUrl(this.quizService.selectedTrueID)

  constructor(
    private quizService: QuizService,
    private router: Router,
    private audioService: AudioPlayerService) {}

  ngOnInit(): void {
    this.quizService.startGame();
  }

  ngDoCheck() {
    this.btnName = this.quizService.getButtonName();
    this.songsArray = this.quizService.getGenreSongs();
    this.clicked = this.quizService.clicked;
    this.correctAnswer = this.quizService.correctAnswer
    this.totalScores = this.quizService.totalScores;
    this.selectedID = this.quizService.selectedID;
    this.imageUrl = this.quizService.getImageUrl();
    this.id = this.quizService.selectedID;
    this.song = this.songsArray[this.id - 1];
  }

  nextStep() {
    if (this.quizService.quizRound < 4) {
      this.quizService.startNewRound();
      this.quizService.getSongs();
      this.audioService.reloadAudio();
      this.quizService.refreshSongs$.next(true);
    } else {
      this.router.navigate(['/summary']);
    }
  }
}
