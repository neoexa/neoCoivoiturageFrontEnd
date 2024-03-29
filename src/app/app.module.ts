import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TrajetService } from './services/trajet.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    TrajetService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }