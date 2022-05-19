import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }

