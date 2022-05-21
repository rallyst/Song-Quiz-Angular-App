import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { Song } from '../../song.model';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {

  @Input() song!: Song;
  @Input() cardId!: string;
  @Input() cheked: string = 'checked';

  correctAnswerStyle = 'background-color: #3E6441; border-color: #619A65'
  wrongAnswerStyle = 'background-color: #853838; border-color: #B55A5A';

  correctBackgroundIcon = "background: #3E6441 url('../../../../assets/check.png') no-repeat 50% 50%";
  wrongBackgroundIcon = "background: #853838 url('../../../../assets/x.png') no-repeat 50% 50%";

  constructor(
    private quizService: QuizService) { }

  ngOnInit(): void {
  }

  onChecked(id: any) {
    this.quizService.clicked = true;
    this.quizService.selectedID = this.cardId.replace('0', '');

    const targetInput = document.getElementById(id);
    const answerCard = document.querySelector(`#card-${id}`);
    const inputLabel = document.querySelector(`#label-${id}`);

    this.quizService.selectedTrueID = id
    targetInput?.setAttribute('checked', 'checked')
    console.log(this.quizService.selectedTrueID)

    if (id ===  this.quizService.correctId) {
      this.quizService.correctAnswer = true;
      this.quizService.gotCorrect();
      this.quizService.totalScores = this.quizService.pointsPerRound;
      this.quizService.quizRound = this.quizService.quizRound++;

      answerCard?.setAttribute('style', this.correctAnswerStyle);
      inputLabel?.setAttribute('style', this.correctBackgroundIcon);
    }

    if (id !== this.quizService.correctId && this.quizService.correctAnswer === undefined) {

      this.quizService.pointsPerRound--;

      answerCard?.setAttribute('style', this.wrongAnswerStyle);
      inputLabel?.setAttribute('style', this.wrongBackgroundIcon);
    }
  }
}
