import { Component, OnInit } from '@angular/core';

import { Request } from '../model/request';
import { GetRequestsService } from '../service/get-requests.service';

@Component({
  selector: 'app-get-requests',
  templateUrl: './get-requests.component.html',
  styleUrls: ['./get-requests.component.css']
})
export class GetRequestsComponent implements OnInit {

  requests: Request[];

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
}
