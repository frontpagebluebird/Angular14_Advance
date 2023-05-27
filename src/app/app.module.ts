import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewChildViewChildrenComponent } from './view-child-view-children/view-child-view-children.component';
import { CounterComponent } from './view-child-view-children/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewChildViewChildrenComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
