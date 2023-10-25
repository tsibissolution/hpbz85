import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MasterComponent } from '../../views/master/master.component';
import { MasterModule } from '../../views/master/master.module';

@NgModule({
  declarations: [DisplayComponent],
  imports: [CommonModule, SharedModule, MasterModule, RouterModule],
})
export class DisplayModule {}
