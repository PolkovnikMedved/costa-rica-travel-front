import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetRequestsService} from '../../../service/get-requests.service';
import { Request } from '../../../model/request';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {

  request: Request;
  message = '';
  error = '';

  constructor(private getRequestsService: GetRequestsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getRequest();
  }

  getRequest(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getRequestsService.getRequest(id).subscribe(request => this.request = request);
  }

  onSubmit(): void {
    this.getRequestsService.updateRequest(this.request)
      .subscribe(request => {
        if (request.id !== undefined) {
          this.message = 'The partner request has been updated.';
        } else {
          this.error = 'An error occurred: could not update the partner request.';
        }
      });
  }
}
