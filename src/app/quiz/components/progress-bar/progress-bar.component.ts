import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() setStyle1: string = 'current-genre';
  @Input() setStyle2: string = '';
  @Input() setStyle3: string = '';
  @Input() setStyle4: string = '';

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.drawProgressTrack()
  }

  drawProgressTrack() {
    if (!this.quizService.correctAnswer && this.quizService.quizRound === 1) {
      return `linear-gradient(270deg, rgba(255, 255, 255, 0) 74.64%, #FFFFFF 87.86%), rgba(255, 255, 255, 0.2)`
    } else if (!this.quizService.correctAnswer && this.quizService.quizRound === 2) {
      this.setStyle1 = 'previous-genre';
      this.setStyle2 = 'current-genre';
      return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) 73.26%, #A769C4 85%, #A769C4 99.71%), linear-gradient(270deg, rgba(255, 255, 255, 0) 48.96%, #FFFFFF 75.09%), rgba(255, 255, 255, 0.2)`
    } else if (!this.quizService.correctAnswer && this.quizService.quizRound === 3) {
      this.setStyle2 = 'previous-genre';
      this.setStyle3 = 'current-genre';
      return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) 40.26%, #A769C4 65%, #A769C4 99.71%), linear-gradient(270deg, rgba(255, 255, 255, 0) 22%, #FFFFFF 45.09%), rgba(255, 255, 255, 0.2)`
    } else if (!this.quizService.correctAnswer && this.quizService.quizRound === 4) {
      this.setStyle3 = 'previous-genre';
      this.setStyle4 = 'current-genre';
      return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) 4.32%, #A769C4 18.98%, #A769C4 99.11%), #FFFFFF`
    } else if (this.quizService.correctAnswer && this.quizService.quizRound === 4) {
      this.setStyle4 = 'previous-genre';
      return '#A769C4';
    } else {
      return `linear-gradient(270.05deg, rgba(126, 85, 179, 0) ${100 - ((36 * this.quizService.quizRound) + this.quizService.quizRound)}%, #A769C4 ${70}%, #A769C4 99.71%), rgba(255, 255, 255, 0.2)`
    }
  }
}
