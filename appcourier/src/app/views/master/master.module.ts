import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { PartyComponent } from './party/party.component';
import { PartyaddComponent } from './partyadd/partyadd.component';
import { PartyeditComponent } from './partyedit/partyedit.component';

import { MasterComponent } from './master.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    PartyComponent,
    PartyaddComponent,
    PartyeditComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,AgGridModule
  ]
})
export class MasterModule { }
