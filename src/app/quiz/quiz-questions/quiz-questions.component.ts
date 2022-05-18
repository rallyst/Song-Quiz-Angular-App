import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  song = '../../../assets/Reamonn - Josephine.mp3'
  songs = this.quizService.songs;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

}
