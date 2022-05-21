import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizInfoComponent } from './quiz-info.component';
import { AudioPlayerModule } from 'src/app/audio-player/audio-player.module';

@NgModule({
  declarations: [
    QuizInfoComponent
  ],
  imports: [
    CommonModule,
    AudioPlayerModule
  ],
  exports: [
    QuizInfoComponent
  ]
})
export class QuizInfoModule { }
