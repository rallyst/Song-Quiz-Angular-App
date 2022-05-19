import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AudioPlayerService } from '../audio-player/audio-player.service';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  playerName = this.quizService.playerName;
  totalScores = this.quizService.totalScores;


  // correctIndex: number = this.generateNumber(this.quizService.quizData.length)


// arrNew: any = []
  // song: any;

  constructor(
    private quizService: QuizService,
  ) {}

  ngOnInit(): void {
    this.quizService.correctId
    // this.quizService.answer
    console.log(this.quizService.correctId)
  }


  generateRound() {

  }

}
