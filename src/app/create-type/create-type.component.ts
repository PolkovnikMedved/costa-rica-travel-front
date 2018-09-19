import { Component, OnInit } from '@angular/core';
import {Type} from '../model/type';
import {GetTypesService} from '../service/get-types.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

  type: Type;
  file: any;
  message = '';
  error = '';

  constructor(private getTypesService: GetTypesService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    console.log('Type = ' + JSON.stringify(this.type));
    this.file = event.target.files[0];
  }

  onSubmit(): void {}
}
