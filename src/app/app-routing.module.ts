import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './part/welcome/welcome.component';
import { GetLocationsComponent } from './components/location/get-locations/get-locations.component';
import { CreateLocationComponent } from './components/location/create-location/create-location.component';
import { GetRequestsComponent } from './components/request/get-requests/get-requests.component';
import { CreateRequestComponent } from './components/request/create-request/create-request.component';
import { GetTypesComponent } from './components/type/get-types/get-types.component';
import { CreateTypeComponent } from './components/type/create-type/create-type.component';
import { GetPartnersComponent } from './components/partner/get-partners/get-partners.component';
import {GetPartnerComponent} from './components/partner/get-partner/get-partner.component';
import { CreatePartnerComponent } from './components/partner/create-partner/create-partner.component';
import {UpdateLocationComponent} from './components/location/update-location/update-location.component';
import {UpdateRequestComponent} from './components/request/update-request/update-request.component';
import {UpdateTypeComponent} from './components/type/update-type/update-type.component';

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
