import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LrupdationComponent } from './lrupdation/lrupdation.component';
import { SampleinvoiceComponent } from './sampleinvoice/sampleinvoice.component';
import { DispatchComponent } from './dispatch/dispatch.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'lrupdation', component: LrupdationComponent },
      { path: 'sample', component: SampleinvoiceComponent },
      { path: 'dispatch', component: DispatchComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntriesRoutingModule {}
