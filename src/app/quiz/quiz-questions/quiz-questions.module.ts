import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizQuestionsComponent } from './quiz-questions.component';



@NgModule({
  declarations: [
    QuizQuestionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QuizQuestionsComponent
  ]
})
export class QuizQuestionsModule { }
