import {Component, OnInit} from '@angular/core';
import {Type} from '../model/type';
import {GetTypesService} from '../service/get-types.service';

@Component({
  selector: 'app-create-type',
  templateUrl: './create-type.component.html',
  styleUrls: ['./create-type.component.css']
})
export class CreateTypeComponent implements OnInit {

  type = new Type(undefined, '', '');
  file: File;
  message = '';
  error = '';

  constructor(private getTypesService: GetTypesService) { }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  onSubmit(): void {
    this.message = '';
    this.error = '';
    this.getTypesService.uploadFile(this.file, this.type)
      .subscribe(
        data => {
          if (data.id !== undefined) {
            this.showMessage();
          } else {
            this.showError('undefined');
          }
        },
        err => this.showError(err)
        );
  }

  showMessage() {
    this.message = 'The partner type has been created';
  }

  showError(code) {
    this.error = `Could not create partner type. Server returned ${code} status.`;
  }
}
