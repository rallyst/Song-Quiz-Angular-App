import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { quizData } from './data';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {

  readonly audioPlaying$ = new BehaviorSubject<string>('');

  quizData = quizData;

  constructor(private http: HttpClient) { }

  URL: string = 'https://levi9-song-quiz.herokuapp.com/api';
  playerName!: string;

  quizRound = 1;
  totalScores: number = 0;
  pointsPerRound = 3;

  correctIndex: number = this.generateNumber(this.quizData.length - 1)
  correctId = `${this.quizRound}-${this.correctIndex + 1}`;
  cardsList = document.querySelector('.answer-list');

  correctAnswer!: any;
  clicked: any;

  answer: any = false;

  selectedID: any = 0;
  selected: any = 0;

  selectedTrueID: any;

  ngOnInit(){
  }

  gotCorrect() {
    if (this.correctAnswer) {
      console.log('GOT CORRECT')
    }

    else {

    }
  }

  nextRound() {
    console.log("this.nextRound")
  }

  generateNumber(length: any) {
    return Math.round(Math.random() * (length - 0) + 0);
  }


  getImageUrl() {
    return `${this.URL}/images/${this.selectedTrueID}.jpg`;
  }

  getSong() {
    return `${this.URL}/audio/${this.quizRound}-${this.correctIndex + 1}.mp3`
  }

  getGenreSongs() {
    return this.quizData[this.quizRound - 1].data;
  }
}
