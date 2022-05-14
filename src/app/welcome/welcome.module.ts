import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { ButtonComponent } from '../shared/button/button.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    LogoComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
    
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }

