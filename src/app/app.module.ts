import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './part/welcome/welcome.component';
import { GetLocationsComponent } from './components/location/get-locations/get-locations.component';
import { FooterComponent } from './part/footer/footer.component';
import { HeaderComponent } from './part/header/header.component';
import { GetRequestsComponent } from './components/request/get-requests/get-requests.component';
import { GetTypesComponent } from './components/type/get-types/get-types.component';
import { GetPartnersComponent } from './components/partner/get-partners/get-partners.component';
import { GetPartnerComponent } from './components/partner/get-partner/get-partner.component';
import { CreateLocationComponent } from './components/location/create-location/create-location.component';
import { CreateRequestComponent } from './components/request/create-request/create-request.component';
import { CreatePartnerComponent } from './components/partner/create-partner/create-partner.component';
import { CreateTypeComponent } from './components/type/create-type/create-type.component';
import { UpdateLocationComponent } from './components/location/update-location/update-location.component';
import { UpdateRequestComponent } from './components/request/update-request/update-request.component';
import { UpdateTypeComponent } from './components/type/update-type/update-type.component';
import {ModalDialogModule} from 'ngx-modal-dialog';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    GetLocationsComponent,
    FooterComponent,
    HeaderComponent,
    GetRequestsComponent,
    GetTypesComponent,
    GetPartnersComponent,
    GetPartnerComponent,
    CreateLocationComponent,
    CreateRequestComponent,
    CreatePartnerComponent,
    CreateTypeComponent,
    UpdateLocationComponent,
    UpdateRequestComponent,
    UpdateTypeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    NgxPaginationModule,
    ModalDialogModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
