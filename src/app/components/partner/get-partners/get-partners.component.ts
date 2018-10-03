import {Component, OnInit} from '@angular/core';
import {GetPartnersService} from '../../../service/get-partners.service';
import {PageablePartner} from '../../../model/pageablePartner';
import {Partner} from '../../../model/partner';
import {Type} from '../../../model/type';
import {HttpResponse} from '@angular/common/http';

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

  constructor(private getPartnersService: GetPartnersService) { }

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
