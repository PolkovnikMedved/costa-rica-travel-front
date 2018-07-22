import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetLocationsComponent } from './get-locations/get-locations.component';

const routes: Routes = [
  { path: '',         component: WelcomeComponent },
  { path: 'location/all', component: GetLocationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
