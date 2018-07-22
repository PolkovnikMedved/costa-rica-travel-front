import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetLocationsComponent } from './get-locations/get-locations.component';
import { GetRequestsComponent } from './get-requests/get-requests.component';

const routes: Routes = [
  { path: '',         component: WelcomeComponent },
  { path: 'location/all', component: GetLocationsComponent },
  { path: 'request/all', component: GetRequestsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
