import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { PartyComponent } from './party/party.component';
import { PartyaddComponent } from './partyadd/partyadd.component';
import { PartyeditComponent } from './partyedit/partyedit.component';


@NgModule({
  declarations: [
    PartyComponent,
    PartyaddComponent,
    PartyeditComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
