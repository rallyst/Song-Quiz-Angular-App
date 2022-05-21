import { Component, DoCheck, Input,  OnInit } from '@angular/core';
import { QuizService } from './quiz.service';
import { Song } from '../quiz/song.model'

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

  @Input() correctAnswer = this.quizService.correctAnswer;
  @Input() clicked = this.quizService.clicked;
  @Input() selectedID = this.quizService.selectedID;
  @Input() cardId!: string;
  @Input() id = this.quizService.selectedID;
  @Input() song: Song = this.songsArray[this.id];
  @Input() imageUrl = this.quizService.getImageUrl();

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.selectedID = this.quizService.selectedID
  }

  ngDoCheck() {
    this.clicked = this.quizService.clicked;
    this.correctAnswer = this.quizService.correctAnswer
    this.totalScores = this.quizService.totalScores;
    this.selectedID = this.quizService.selectedID;
    this.imageUrl = this.quizService.getImageUrl();
    this.id = this.quizService.selectedID;
    this.song = this.songsArray[this.id - 1];
  }

  nextRound() {
    this.quizService.nextRound();
  }
}
