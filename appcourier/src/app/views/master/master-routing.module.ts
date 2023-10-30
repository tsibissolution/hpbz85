import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartyComponent } from './party/party.component';
import { RegisterComponent } from '../register/register.component';
import { MraccountComponent } from './mraccount/mraccount.component';
import { DestinationComponent } from './destination/destination.component';
import { SampleprodComponent } from './sampleprod/sampleprod.component';
import { TransportaccountComponent } from './transportaccount/transportaccount.component';
import { CompanyaccountComponent } from './companyaccount/companyaccount.component';

const routes: Routes = [
  {
    path: '', children: [
      { path: 'partylist', component: PartyComponent },      
      { path: 'mraccount', component: MraccountComponent },
      { path: 'destination', component: DestinationComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'sampleprod', component: SampleprodComponent },
      { path: 'transport', component: TransportaccountComponent },
      { path: 'company', component: CompanyaccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterRoutingModule {}
