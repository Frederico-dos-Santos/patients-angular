import { RoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaPatientModule } from './patient.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PaginaPatientModule,
    RoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
