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

  type: Type;
  message = '';
  error = '';

  constructor(private getTypesService: GetTypesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getType();
  }

  getType(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getTypesService.getType(id).subscribe(type => this.type = type);
  }

  onSubmit(): void {
    this.message = '';
    this.error = '';
    this.getTypesService.updateType(this.type)
      .subscribe(type => {
        if (type.id !== undefined) {
          this.showAlert();
        } else {
          this.showError();
        }
      });
  }

  showAlert(): void {
    this.message = 'The partner type has been updated.';
  }

  showError(): void {
    this.error = 'An error occurred. Could not update the partner type.';
  }
}
