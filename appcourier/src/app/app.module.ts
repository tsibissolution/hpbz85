import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DisplayModule } from './layout/display/display.module';
import { MasterComponent } from './views/master/master.component';


@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
