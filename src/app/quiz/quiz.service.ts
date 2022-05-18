import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  correctId = '04';

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
}
