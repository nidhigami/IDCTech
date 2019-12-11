import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TrainingService } from './training.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TrainingFormComponent } from './training-form/training-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, TrainingService],
  bootstrap: [AppComponent, TrainingFormComponent]
})
export class AppModule { }
