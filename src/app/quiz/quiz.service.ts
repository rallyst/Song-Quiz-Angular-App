import { Injectable, OnInit } from '@angular/core';
import { quizData } from './data';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService implements OnInit {

  quizData = quizData;
  URL: string = 'https://levi9-song-quiz.herokuapp.com/api';
  playerName!: string;
  btnName: string = '';
  quizRound: number = 1;
  totalScores: number = 0;
  pointsPerRound = 3;

  correctIndex: number = this.generateNumber(this.quizData.length - 1);
  correctId = `${this.quizRound}-${this.correctIndex + 1}`;
  correctAnswer!: any;

  clicked: any;

  selectedID: any = 0;
  selectedTrueID: any;

  refreshSongs$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  ngOnInit(){
  }

  startGame() {
    this.totalScores = 0;
    this.pointsPerRound = 3;
    this.quizRound = 1;
    this.correctAnswer = undefined;
    this.clicked = null;
    this.correctId = `${this.quizRound}-${this.correctIndex + 1}`;
  }

  startNewRound() {
    this.correctIndex = this.generateNumber(this.quizData.length - 1);
    this.correctAnswer = undefined;
    this.pointsPerRound = 3;
    this.quizRound++;
    this.correctId = `${this.quizRound}-${this.correctIndex + 1}`;
    this.clicked = false;
  }

  getButtonName() {
    return this.quizRound <= 3
      ? this.btnName = 'next quiz'
      : this.btnName = 'See My Score';
  }

  getSongs(): Observable<any[]> {
    return of (this.quizData[this.quizRound - 1].data);
  }

  generateNumber(length: any) {
    return Math.round(Math.random() * (length - 0) + 0);
  }

  getGenre() {
    return this.quizData[this.quizRound - 1].genre
  }

  getImageUrl() {
    return `${this.URL}/images/${this.selectedTrueID}.jpg`;
  }

  getCorrectImageUrl() {
    return `${this.URL}/images/${this.correctId}.jpg`;
  }

  getAudioUrl(id: string) {
    return `${this.URL}/audio/${id}.mp3`;
  }

  countScores() {
    this.totalScores += this.pointsPerRound;
    return this.totalScores;
  }

  getGenreSongs() {
    return this.quizData[this.quizRound - 1].data;
  }
}
