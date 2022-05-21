import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioPlayerComponent } from './audio-player.component';
import { PlayerButtonComponent } from './components/player-button/player-button.component';
import { ProgressComponent } from './components/progress/progress.component';

@NgModule({
  declarations: [
    AudioPlayerComponent,
    PlayerButtonComponent,
    ProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AudioPlayerComponent,
    PlayerButtonComponent,
    ProgressComponent
  ]

})
export class AudioPlayerModule { }
