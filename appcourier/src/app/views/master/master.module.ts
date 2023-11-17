import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { PartyComponent } from './party/party.component';


import { MasterComponent } from './master.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { RegisterComponent } from '../register/register.component';
import { MraccountComponent } from './mraccount/mraccount.component';
import { TransportaccountComponent } from './transportaccount/transportaccount.component';
import { CompanyaccountComponent } from './companyaccount/companyaccount.component';
import { DestinationComponent } from './destination/destination.component';
import { SampleprodComponent } from './sampleprod/sampleprod.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';

@NgModule({
  declarations: [
    PartyComponent,    
    MasterComponent,
    RegisterComponent,
    MraccountComponent,
    TransportaccountComponent,
    CompanyaccountComponent,
    DestinationComponent,
    SampleprodComponent,
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    AgGridModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
    MdbRippleModule,
    MdbFormsModule,
    MdbCheckboxModule, 
  ],
})
export class MasterModule {}
