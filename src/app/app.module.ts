import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { DisplayModule } from './layout/display/display.module';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingRoutingModule,
    DisplayModule
  ],
  declarations: [
    AppComponent,
    
    
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/