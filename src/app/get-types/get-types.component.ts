import { Component, OnInit } from '@angular/core';

import { Type } from '../model/type';
import { GetTypesService } from '../service/get-types.service';

@Component({
  selector: 'app-get-types',
  templateUrl: './get-types.component.html',
  styleUrls: ['./get-types.component.css']
})
export class GetTypesComponent implements OnInit {

  types: Type[];

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
}
