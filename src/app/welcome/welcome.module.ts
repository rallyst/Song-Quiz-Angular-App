import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { LogoComponent } from '../shared/logo/logo.component';
import { ButtonComponent } from '../shared/button/button.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    WelcomeComponent,
    // LogoComponent,
    // ButtonComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }

