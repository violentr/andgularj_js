import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  //list of components
  declarations: [
    AppComponent
  ],
  imports: [ BrowserModule, CommonModule],
  bootstrap: [AppComponent]
})

export class AppModule {}
