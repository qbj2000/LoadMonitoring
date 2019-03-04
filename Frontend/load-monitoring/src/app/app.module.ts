import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { PlotlyModule } from 'angular-plotly.js';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { FooterComponent } from './footer/footer.component'

import { LoadService } from './load.service'
import { MessageService } from './message.service'
import { DatePipe } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MessagesComponent } from './messages/messages.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DateService } from './date.service'
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    AboutComponent,
    MessagesComponent,
    StatisticsComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PlotlyModule,
    FormsModule
  ],
  providers: [LoadService, DatePipe, MessageService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
