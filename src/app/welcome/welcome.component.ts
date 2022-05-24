import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  playerName!: string;

  constructor(
    private router: Router,
    private quizService: QuizService) { }

  ngOnInit(): void {
  }

  onSubmit(formName: any) {
    this.quizService.playerName = this.playerName;
    this.router.navigateByUrl('/quiz');
    this.quizService.getGenre()
  }
}
