import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionsComponent } from './quiz-questions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AudioPlayerModule } from 'src/app/audio-player/audio-player.module';
import { AnswerCardComponent } from '../components/answer-card/answer-card.component';

@NgModule({
  declarations: [
    QuizQuestionsComponent,
    AnswerCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AudioPlayerModule
  ],
  exports: [
    QuizQuestionsComponent,
    AnswerCardComponent
  ]
})
export class QuizQuestionsModule { }
