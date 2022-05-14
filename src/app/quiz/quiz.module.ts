import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { SharedModule } from '../shared/shared.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuizQuestionsModule } from './quiz-questions/quiz-questions.module';



@NgModule({
  declarations: [
    QuizComponent,
    ProgressBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    QuizQuestionsModule
  ],
  exports: [
    QuizComponent
  ]
})
export class QuizModule { }
