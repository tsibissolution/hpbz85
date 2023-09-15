import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayComponent } from './layout/display/display.component';
import { HeaderComponent } from './shared/header/header.component';
import { MasterComponent } from './views/master/master.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      
    ])
  ],
  declarations: [
    AppComponent,
    DisplayComponent,
    HeaderComponent,
    MasterComponent,
    
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