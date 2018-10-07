import {Component, OnInit, ViewContainerRef} from '@angular/core';

import {Request} from '../../../model/request';
import {GetRequestsService} from '../../../service/get-requests.service';
import {HttpResponse} from '@angular/common/http';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html',
  styleUrls: ['./get-requests.component.css']
})
export class GetRequestsComponent implements OnInit {

  requests: Request[];
  message = '';
  error = '';

  constructor(
    private getRequestsService: GetRequestsService,
    private modalService: ModalDialogService,
    private viewRef: ViewContainerRef
    ) { }

  ngOnInit() {
    this.getRequests();
  }

  /*
    get partner requests asynchronous
  */
  getRequests(): void {
    this.getRequestsService.getRequests().subscribe(requests => this.requests = requests);
  }

  deleteRequest(request: Request): void {
    this.modalService.openDialog(this.viewRef, {
      title: 'Please confirm',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Are you sure that you want to delete partner type ?'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-success',
          onAction: () => { this.deleteTheRequest(request); return true; }
        },
        {
          text: 'No',
          buttonClass: 'btn btn-danger',
          onAction: () => true
        }
      ]
    });
  }

  deleteTheRequest(request: Request): void {
    this.getRequestsService.deleteRequest(request)
      .subscribe((res: HttpResponse<any>) => {
        if (res.status === 200) {
          const index = this.requests.indexOf(request, 0);
          if (index > -1) {
            this.requests.splice(index, 1);
          }
          this.message = 'The partner request has been deleted.';
          window.scrollTo(0, 0);
        } else {
          this.error = 'An error occurred: could not delete the partner request.';
        }
      });
  }
}
