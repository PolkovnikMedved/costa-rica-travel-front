import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetLocationsComponent } from './get-locations/get-locations.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { GetRequestsComponent } from './get-requests/get-requests.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { GetTypesComponent } from './get-types/get-types.component';
import { CreateTypeComponent } from './create-type/create-type.component';
import { GetPartnersComponent } from './get-partners/get-partners.component';
import {GetPartnerComponent} from './get-partner/get-partner.component';
import { CreatePartnerComponent } from './create-partner/create-partner.component';
import {UpdateLocationComponent} from './update-location/update-location.component';
import {UpdateRequestComponent} from './update-request/update-request.component';
import {UpdateTypeComponent} from './update-type/update-type.component';

const routes: Routes = [
  { path: '',                     component: WelcomeComponent },
  { path: 'location/all',         component: GetLocationsComponent },
  { path: 'location/create',      component: CreateLocationComponent },
  { path: 'location/:id/update',  component: UpdateLocationComponent },
  { path: 'request/all',          component: GetRequestsComponent },
  { path: 'request/create',       component: CreateRequestComponent },
  { path: 'request/:id/update',   component: UpdateRequestComponent },
  { path: 'type/all',             component: GetTypesComponent },
  { path: 'type/create',          component: CreateTypeComponent },
  { path: 'type/:id/update',      component: UpdateTypeComponent },
  { path: 'partner/all',          component: GetPartnersComponent },
  { path: 'partner/create',       component: CreatePartnerComponent },
  { path: 'partner/:id',          component: GetPartnerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
