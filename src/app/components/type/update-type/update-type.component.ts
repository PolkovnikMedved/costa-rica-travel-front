import { Component, OnInit } from '@angular/core';
import {Type} from '../../../model/type';
import {GetTypesService} from '../../../service/get-types.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-type',
  templateUrl: './update-type.component.html',
  styleUrls: ['./update-type.component.css']
})
export class UpdateTypeComponent implements OnInit {

  type = new Type(undefined, '', '');
  file: File;
  message = '';
  error = '';

  constructor(private getTypesService: GetTypesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getType();
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  getType(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getTypesService.getType(id).subscribe(type => this.type = type);
  }

  onSubmit(): void {
    this.message = '';
    this.error = '';
    this.getTypesService.updateType(this.file, this.type)
      .subscribe(type => {
        if (type.id !== undefined) {
          this.showAlert();
        } else {
          this.showError('');
        }},
        err => this.showError(err)
      );
  }

  showAlert(): void {
    this.message = 'The partner type has been updated.';
  }

  showError(errorCode): void {
    this.error = `An error occurred. Could not update the partner type. Code : ${errorCode}`;
  }
}
