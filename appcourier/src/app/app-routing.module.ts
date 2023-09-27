import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './layout/display/display.component';
import { MasterComponent } from './views/master/master.component';

const routes: Routes = [
  { path: 'dashboard', component: DisplayComponent },
  {
    path: '',
    component: DisplayComponent,
    children: [{ path: 'master', component: MasterComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
