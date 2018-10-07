import {Component, OnInit, ViewContainerRef} from '@angular/core';

import { Type } from '../../../model/type';
import { GetTypesService } from '../../../service/get-types.service';
import {HttpResponse} from '@angular/common/http';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-get-types',
  templateUrl: './get-types.component.html',
  styleUrls: ['./get-types.component.css']
})
export class GetTypesComponent implements OnInit {

  types: Type[];
  message = '';
  error = '';

  constructor(
    private getTypesService: GetTypesService,
    private modalService: ModalDialogService,
    private viewRef: ViewContainerRef
  ) { }

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
    this.modalService.openDialog(this.viewRef, {
      title: 'Please confirm',
      childComponent: SimpleModalComponent,
      data: {
        text: 'Are you sure that you want to delete partner type ?'
      },
      settings: {
        closeButtonClass: 'close theme-icon-close'
      },
      actionButtons: [
        {
          text: 'Yes',
          buttonClass: 'btn btn-success',
          onAction: () => { this.deletePartnerType(type); return true; }
        },
        {
          text: 'No',
          buttonClass: 'btn btn-danger',
          onAction: () => true
        }
      ]
    });
  }

  deletePartnerType(type: Type) {
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
