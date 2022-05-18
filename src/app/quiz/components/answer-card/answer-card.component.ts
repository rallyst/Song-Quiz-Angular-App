import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.scss']
})
export class AnswerCardComponent implements OnInit {

  @Input() song!: {
    id: any;
    name: any;
    title: any;
  }

  @Input() cheked: any = 'checked';

  // correctId = ;

  correctAnswerStyle = 'background-color: #3E6441; border-color: #619A65'
  wrongAnswerStyle = 'background-color: #853838; border-color: #B55A5A';

  correctBackgroundIcon = "background: #3E6441 url('../../../../assets/check.png') no-repeat 50% 50%";
  wrongBackgroundIcon = "background: #853838 url('../../../../assets/x.png') no-repeat 50% 50%";

  constructor(private quizeService: QuizService) { }

  ngOnInit(): void {
  }


  onChecked(id: any) {

    const targetInput = document.getElementById(id);
    const answerCard = document.querySelector(`#card-${id}`);
    const inputLabel = document.querySelector(`#label-${id}`)

    if (targetInput?.hasAttribute('checked')) {
      targetInput?.removeAttribute('checked')
    } else {

      targetInput?.setAttribute('checked', 'checked')
    }

    if (id ===  this.quizeService.correctId) {
      answerCard?.setAttribute('style', this.correctAnswerStyle);
      inputLabel?.setAttribute('style', this.correctBackgroundIcon);
      console.log(answerCard)
      console.log('Correct')
    } else {
      answerCard?.setAttribute('style', this.wrongAnswerStyle);
      inputLabel?.setAttribute('style', this.wrongBackgroundIcon);

    }



  }
}

