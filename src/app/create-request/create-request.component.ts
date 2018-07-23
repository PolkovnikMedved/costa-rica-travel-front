import { Component, OnInit } from '@angular/core';

import { Request } from '../model/request';
import {GetRequestsService} from '../service/get-requests.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  request = new Request(undefined, '', '', '');
  message = '';

  constructor(private getRequestsService: GetRequestsService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    this.getRequestsService.createRequest(this.request)
      .subscribe(request => {
        if (request.id !== undefined) {
          this.showAlert();
        }
      });
  }

  showAlert(): void {
    this.message = 'The partner request has been created.';
  }
}
