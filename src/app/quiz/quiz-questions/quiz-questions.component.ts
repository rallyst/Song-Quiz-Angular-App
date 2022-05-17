import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  songs = [{
      id: '01',
      name: 'Duke Ellington',
      title: 'Take the A Train',
    },
    {
      id: '02',
      name: 'Miles Davis',
      title: 'Take the A Train',
    },
    {
      id: '03',
      name: 'John Coltrane',
      title: 'So What',
    },
    {
      id: '04',
      name: 'Ella Fitzgerald',
      title: 'Mack the Knife',
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
