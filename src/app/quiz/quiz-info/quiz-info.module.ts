import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizInfoComponent } from './quiz-info.component';
import { AudioPlayerModule } from 'src/app/audio-player/audio-player.module';
import { PlayerButtonComponent } from 'src/app/audio-player/components/player-button/player-button.component';



@NgModule({
  declarations: [
    QuizInfoComponent,
    // PlayerButtonComponent
  ],
  imports: [
    CommonModule,
    AudioPlayerModule
  ],
  exports: [
    QuizInfoComponent,

    // PlayerButtonComponent

  ]
})
export class QuizInfoModule { }
