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


  @Input() cheked: any = 'checked';


  correctAnswerStyle = 'background-color: #3E6441; border-color: #619A65'
  wrongAnswerStyle = 'background-color: #853838; border-color: #B55A5A';

  correctBackgroundIcon = "background: #3E6441 url('../../../../assets/check.png') no-repeat 50% 50%";
  wrongBackgroundIcon = "background: #853838 url('../../../../assets/x.png') no-repeat 50% 50%";


  gotAnswer: any = this.quizeService.answer;

  constructor(private quizeService: QuizService) { }

  ngOnInit(): void {
  }

  onChecked(id: any) {
    const targetInput = document.getElementById(id);

    if (this.gotAnswer === false) {

      const answerCard = document.querySelector(`#card-${id}`);
      const inputLabel = document.querySelector(`#label-${id}`)

      if (targetInput?.hasAttribute('checked')) {

        targetInput?.removeAttribute('checked')
      } else {

        targetInput?.setAttribute('checked', 'checked')
      }

      if (id ===  this.quizeService.correctId) {
        this.quizeService.answer = true;

        answerCard?.setAttribute('style', this.correctAnswerStyle);
        inputLabel?.setAttribute('style', this.correctBackgroundIcon);

        console.log('Correct')
      } else {
        console.log('Wrong')
        answerCard?.setAttribute('style', this.wrongAnswerStyle);
        inputLabel?.setAttribute('style', this.wrongBackgroundIcon);
      }

      console.log(this.gotAnswer)
    } else {

      this.quizeService.showInfo()

    }
  }
}

