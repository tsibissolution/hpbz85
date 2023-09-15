import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayComponent } from './display.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from 'src/app/views/master/master.component';

@NgModule({
  declarations: [DisplayComponent,MasterComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class DisplayModule {}
