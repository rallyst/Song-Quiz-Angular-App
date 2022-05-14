import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './shared/logo/logo.component';
import { WelcomeModule } from './welcome/welcome.module';
import { ButtonComponent } from './shared/button/button.component';
import { QuizModule } from './quiz/quiz.module';

@NgModule({
  declarations: [
    AppComponent,
    // ButtonComponent,
    // LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    QuizModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
