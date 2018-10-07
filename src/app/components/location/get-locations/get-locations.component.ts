import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { Location } from '../../../model/location';
import { GetLocationsService } from '../../../service/get-locations.service';
import {HttpResponse} from '@angular/common/http';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-get-locations',
  templateUrl: './get-locations.component.html',
  styleUrls: ['./get-locations.component.css']
})
export class GetLocationsComponent implements OnInit {

  locations: Location[];
  message = '';
  error = '';

  constructor(
    private getLocationService: GetLocationsService,
    private modalService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) { }

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
    this.modalService.openDialog(this.viewRef, {
      title: 'Please confirm',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Are you sure that you want to delete the location ?'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-success',
          onAction: () => { this.deleteTheLocation(location); return true; }
        },
        {
          text: 'No',
          buttonClass: 'btn btn-danger',
          onAction: () => true
        }
      ]
    });
  }

  deleteTheLocation(location: Location): void {
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
