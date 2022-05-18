import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz-info',
  templateUrl: './quiz-info.component.html',
  styleUrls: ['./quiz-info.component.scss']
})
export class QuizInfoComponent implements OnInit {

  @Input() song: {
    id: any;
    name: any;
    title: any;
  } = this.quizeService.songs[3];



  constructor(private quizeService: QuizService) { }



  ngOnInit(): void {
  }

}
