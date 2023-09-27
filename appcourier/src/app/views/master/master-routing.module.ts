import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PartyaddComponent } from './partyadd/partyadd.component';
import { PartyComponent } from './party/party.component';
import { PartyeditComponent } from './partyedit/partyedit.component';
import { MasterComponent } from './master.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'partylist', component: PartyComponent },
      
      { path: 'partyadd', component: PartyaddComponent },
      { path: 'partyedit', component: PartyeditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
