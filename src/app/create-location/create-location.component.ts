import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location';
import {GetLocationsService} from '../service/get-locations.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {

  location = new Location(undefined, '');
  message: string;

  constructor(private getLocationsService: GetLocationsService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.getLocationsService.createLocation(this.location)
      .subscribe(location => {
        if ( location.id !== undefined) {
          this.showAlert();
        }
      });
  }

  showAlert(): void {
    this.message = 'The location has been created.';
  }
}
