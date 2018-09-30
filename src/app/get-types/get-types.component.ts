import { Component, OnInit } from '@angular/core';

import { Type } from '../model/type';
import { GetTypesService } from '../service/get-types.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-get-types',
  templateUrl: './get-types.component.html',
  styleUrls: ['./get-types.component.css']
})
export class GetTypesComponent implements OnInit {

  types: Type[];
  message = '';
  error = '';

  constructor(private getTypesService: GetTypesService) { }

  ngOnInit() {
    this.getTypes();
  }

  /*
    get partner types asynchronous
  */
  getTypes(): void {
    this.getTypesService.getTypes().subscribe(types => this.types = types);
  }

  deleteType(type: Type): void {
    this.types = this.types.filter(t => t !== type);
    this.getTypesService.deleteType(type).subscribe(
      (response: HttpResponse<Type>) => {
        if (response.status === 200) {
          this.showMessage();
          window.scrollTo(0, 0);
        } else {
          this.showError(response.status);
          window.scrollTo(0, 0);
        }
      });
  }

  showMessage() {
    this.message = 'The partner type has been successfully deleted.';
  }

  showError(code) {
    this.error = `The partner type could not be deleted. Error code : ${code}`;
  }
}
