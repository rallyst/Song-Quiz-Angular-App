import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  @Input() name = 'Roman';
  @Input() headerMessage = 'did so great!';
  @Input() message = "You've got 12 out of 12 points. You are definetly a music lover!"
  @Input() totalScores = 12;

  constructor() { }

  ngOnInit(): void {
  }
}
