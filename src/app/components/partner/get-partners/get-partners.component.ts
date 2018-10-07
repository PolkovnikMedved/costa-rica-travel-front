import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {GetPartnersService} from '../../../service/get-partners.service';
import {PageablePartner} from '../../../model/pageablePartner';
import {Partner} from '../../../model/partner';
import {HttpResponse} from '@angular/common/http';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';

@Component({
  selector: 'app-get-partners',
  templateUrl: './get-partners.component.html',
  styleUrls: ['./get-partners.component.css']
})
export class GetPartnersComponent implements OnInit {

  page: PageablePartner;
  p = 1;
  message = '';
  error = '';

  constructor(
    private getPartnersService: GetPartnersService,
    private modalService: ModalDialogService,
    private viewRef: ViewContainerRef
    ) { }

  ngOnInit() {
    this.onPageChange(1);
  }

  /*
    get partners asynchronous
  */
  onPageChange(pageNumber: number): void {
    this.p = pageNumber;
    this.getPartnersService.getPartners(pageNumber)
      .subscribe(pageablePartner => this.page = pageablePartner);
  }

  deletePartner(partner: Partner): void {
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
          onAction: () => { this.deleteThePartner(partner); return true; }
        },
        {
          text: 'No',
          buttonClass: 'btn btn-danger',
          onAction: () => true
        }
      ]
    });
  }

  deleteThePartner(partner: Partner): void {
    this.getPartnersService.deletePartner(partner)
      .subscribe((response: HttpResponse<Partner>) => {
        if (response.status === 200) {
          this.showMessage();
          this.page.content = this.page.content.filter(p => p !== partner);
          window.scrollTo(0, 0);
        } else {
          this.showError(response.status);
          window.scrollTo(0, 0);
        }
      });
  }

  showMessage() {
    this.message = 'The partner has been successfully deleted.';
  }

  showError(code) {
    this.error = `The partner could not be deleted. Error code : ${code}`;
  }
}
