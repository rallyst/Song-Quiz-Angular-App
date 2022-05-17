import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionsComponent } from './quiz-questions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AudioPlayerModule } from 'src/app/audio-player/audio-player.module';



@NgModule({
  declarations: [
    QuizQuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AudioPlayerModule
  ],
  exports: [
    QuizQuestionsComponent
  ]
})
export class QuizQuestionsModule { }
