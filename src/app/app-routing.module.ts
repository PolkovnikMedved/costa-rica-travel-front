import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetLocationsComponent } from './get-locations/get-locations.component';
import { GetRequestsComponent } from './get-requests/get-requests.component';
import { GetTypesComponent } from './get-types/get-types.component';
import { GetPartnersComponent } from './get-partners/get-partners.component';
import {GetPartnerComponent} from './get-partner/get-partner.component';

const routes: Routes = [
  { path: '',             component: WelcomeComponent },
  { path: 'location/all', component: GetLocationsComponent },
  { path: 'request/all',  component: GetRequestsComponent },
  { path: 'type/all',     component: GetTypesComponent },
  { path: 'partner/all',  component: GetPartnersComponent },
  { path: 'partner/:id',  component: GetPartnerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
