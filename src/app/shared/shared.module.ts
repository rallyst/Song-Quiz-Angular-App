import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { ButtonComponent } from './button/button.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';



@NgModule({
  declarations: [
    LogoComponent,
    ButtonComponent,
    AudioPlayerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
