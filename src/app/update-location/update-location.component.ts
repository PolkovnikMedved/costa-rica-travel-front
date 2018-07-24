import { Component, OnInit } from '@angular/core';
import {GetLocationsService} from '../service/get-locations.service';
import { Location } from '../model/location';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.css']
})
export class UpdateLocationComponent implements OnInit {

  location: Location;
  message = '';
  error = '';

  constructor(private getLocationService: GetLocationsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLocation();
  }

  getLocation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getLocationService.getLocation(id).subscribe(location => this.location = location);
  }

  onSubmit(): void {
    this.getLocationService.updateLocation(this.location)
      .subscribe(location => {
        if (location.id !== undefined) {
          this.showAlert();
        } else {
          this.showError();
        }
      });
  }

  showAlert(): void {
    this.message = 'The location has been updated.';
  }

  showError(): void {
    this.error = 'An error occurred. Could not update the location.';
  }
}
