import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import { GetLocationsService } from '../service/get-locations.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent implements OnInit {

  locations: Location[];
  message = '';
  error = '';

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

  deleteLocation(location: Location): void {
    console.log('Clicked !');
    this.getLocationService.deleteLocation(location)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          const index = this.locations.indexOf(location, 0);
          if (index > -1) {
            this.locations.splice(index, 1);
          }
          this.message = 'The location has been deleted.';
          window.scrollTo(0, 0);
        } else {
          this.error = 'An error occurred: could not delete the location.';
        }
      });
  }
}
