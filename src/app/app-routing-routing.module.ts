import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './layout/display/display.component';
import { MasterComponent } from './views/master/master.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DisplayComponent,
    children: [{ path: '', component: MasterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingRoutingModule {}
