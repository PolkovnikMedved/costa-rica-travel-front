import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { GetLocationsService } from '../service/get-locations.service';

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent implements OnInit {

  locations: Location[];

  constructor(private getLocationService: GetLocationsService) { }

  ngOnInit() {
    this.getLocations();
  }

  /*
    get location asynchronous
   */
  getLocations(): void {
    this.getLocationService.getLocations().subscribe(locations => this.locations = locations);
  }

}
