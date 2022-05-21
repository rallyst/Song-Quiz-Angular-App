import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit, DoCheck {

  @Input() clicked = this.quizService.clicked;
  @Input() imageUrl = this.quizService.getImageUrl();
  songsArray = this.quizService.getGenreSongs();

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.clicked = this.quizService.clicked;
    this.imageUrl = this.quizService.getImageUrl();
  }
}
