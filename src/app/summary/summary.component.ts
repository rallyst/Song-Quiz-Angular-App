import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
 @Input() name = 'Roman';
  @Input() headerMessage = 'did so great!';
  @Input() totalScores = this.quizService.totalScores;
  @Input() message = `You've got ${ this.totalScores } out of 12 points. You are definetly a music lover!`

  constructor(
    private quizService: QuizService,
    private router: Router) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    if (this.quizService.totalScores < 12) {
      this.headerMessage = 'you can do better, try again!';
    }
  }

  startNewGame() {
    this.quizService.startGame();
    this.router.navigate(['/quiz']);
  }
}
