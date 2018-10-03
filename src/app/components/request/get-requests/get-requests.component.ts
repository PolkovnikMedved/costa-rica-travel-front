import {Component, OnInit} from '@angular/core';

import {Request} from '../../../model/request';
import {GetRequestsService} from '../../../service/get-requests.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html',
  styleUrls: ['./get-requests.component.css']
})
export class GetRequestsComponent implements OnInit {

  requests: Request[];
  message = '';
  error = '';

  constructor(private getRequestsService: GetRequestsService) { }

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
    console.log('clicked');
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
