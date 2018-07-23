import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { GetLocationsComponent } from './get-locations/get-locations.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GetRequestsComponent } from './get-requests/get-requests.component';
import { GetTypesComponent } from './get-types/get-types.component';
import { GetPartnersComponent } from './get-partners/get-partners.component';
import { GetPartnerComponent } from './get-partner/get-partner.component';
import { CreateLocationComponent } from './create-location/create-location.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { CreatePartnerComponent } from './create-partner/create-partner.component';
import { CreateTypeComponent } from './create-type/create-type.component';


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
    CreateTypeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
