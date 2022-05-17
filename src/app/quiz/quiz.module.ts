import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuizQuestionsModule } from './quiz-questions/quiz-questions.module';
import { QuizImageComponent } from './components/quiz-image/quiz-image.component';
import { AudioPlayerModule } from '../audio-player/audio-player.module';



@NgModule({
  declarations: [
    QuizComponent,
    ProgressBarComponent,
    QuizImageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizQuestionsModule,
    AudioPlayerModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
