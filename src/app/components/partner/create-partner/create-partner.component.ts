import { Component, OnInit } from '@angular/core';
import {Partner} from '../../../model/partner';
import {GetPartnersService} from '../../../service/get-partners.service';
import {GetTypesService} from '../../../service/get-types.service';
import {Type} from '../../../model/type';
import {Location} from '../../../model/location';
import {GetLocationsService} from '../../../service/get-locations.service';

@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.css']
})
export class CreatePartnerComponent implements OnInit {

  partner = new Partner(undefined, '', '', '', '', '', undefined, undefined, '', '', false, '', null, '', null, '', null);
  types: Type[];
  locations: Location[];
  message = '';
  error = '';

  constructor(
    private getPartnersService: GetPartnersService,
    private getTypesService: GetTypesService,
    private getLocationService: GetLocationsService
  ) {}

  ngOnInit() {
    this.loadInitialData();
  }

  loadInitialData() {
    this.getLocationService.getLocations().subscribe(locations => this.locations = locations);
    this.getTypesService.getTypes().subscribe(types => this.types = types);
  }

  /*
      SENT JSON
      =========

      Partner = {"name":"Test production","email":"v.solodoukhin@outlook.com","phone":"32489836733","address":"brolekestraat","picture":"","latitude":"55","longitude":"1.23424324","horary":"9 - 18 every day","comment":"aaaaaaaaaaaaaaaaaaaaaaaaaaaaa","specialOffer":true,"offer":"5%","location":"[object Object]","tripAdvisorLink":"http://brol.be","type":"[object Object]","country":"Belgium","hotWords":null}
   */

  onSubmit() {
    console.log('Partner = ' + JSON.stringify(this.partner));
    this.getPartnersService.createPartner(this.partner)
      .subscribe(partner => {
        if (partner.id !== undefined) {
          this.showMessage();
          window.scrollTo(0, 0);
        } else {
          this.showError();
          window.scrollTo(0, 0);
        }
      });
  }

  showMessage(): void {
    this.message = 'The partner has been created.';
  }

  showError(): void {
    this.error = `Could not create partner.`;
  }
}
