import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntriesRoutingModule } from './entries-routing.module';
import { LrupdationComponent } from './lrupdation/lrupdation.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { SampleinvoiceComponent } from './sampleinvoice/sampleinvoice.component';
import { EntriesComponent } from './entries.component';


@NgModule({
  declarations: [
    LrupdationComponent,
    DispatchComponent,
    SampleinvoiceComponent,
    EntriesComponent,
  ],
  imports: [
    CommonModule,
    EntriesRoutingModule
  ]
})
export class EntriesModule { }
