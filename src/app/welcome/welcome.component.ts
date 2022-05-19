import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from '../quiz/quiz.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  // @Input() router

  playerName!: string;

  // @Input() routenav: any = '/quiz';
  constructor(
    private router: Router,
    private quizService: QuizService
  ) { }

  ngOnInit(): void {
  }



  // saveName() {
  //   console.log('Name: ' + this.playerName)
  //   this.quizService.playerName = this.playerName;
  //   this.router.navigateByUrl('/quiz');
  // }



  onSubmit(formName: any) {
    // console.log('Name: ' + this.playerName)
    this.quizService.playerName = this.playerName;
    this.router.navigateByUrl('/quiz');
  }
}

