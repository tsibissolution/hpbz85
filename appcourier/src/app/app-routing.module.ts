import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './layout/display/display.component';
import { LoginComponent } from './views/login/login/login.component';
import { RegisterComponent } from './views/login/register/register.component';
import { MasterComponent } from './views/master/master.component';

const routes: Routes = [
  { path: 'dsh', component: DisplayComponent },
  {
    path: 'dashboard',
    component: DisplayComponent,
    children: [{ path: 'master', component: MasterComponent, loadChildren:()=>import('./views/master/master.module').then(m=>m.MasterModule) }],
  },{
    path:'',component:LoginComponent,
  },
  {
    path:'register', component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
