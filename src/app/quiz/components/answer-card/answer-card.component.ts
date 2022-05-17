import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
