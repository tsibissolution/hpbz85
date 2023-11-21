import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './layout/display/display.component';
import { LoginComponent } from './views/login/login/login.component';
import { RegisterComponent } from './views/login/register/register.component';
import { MasterComponent } from './views/master/master.component';
import { EntriesComponent } from './views/entries/entries.component';

const routes: Routes = [
  // { path: 'dashboard', component: DisplayComponent },
  {
    path: 'dashboard',
    component: DisplayComponent,
    children: [
      {
        path: 'master',
        component: MasterComponent,
        loadChildren: () =>
          import('./views/master/master.module').then((m) => m.MasterModule),
      },
      {
        path: 'enteries',
        component: EntriesComponent,
        loadChildren: () =>
          import('./views/entries/entries.module').then((m) => m.EntriesModule),
      },
    ],
  },
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
