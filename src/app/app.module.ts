import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCarouselViewComponent } from './auto-carousel-view/auto-carousel-view.component';

@NgModule({
  declarations: [AppComponent, AutoCarouselViewComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
