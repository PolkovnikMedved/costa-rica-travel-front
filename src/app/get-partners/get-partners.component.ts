import {Component, OnInit} from '@angular/core';
import {GetPartnersService} from '../service/get-partners.service';
import {PageablePartner} from '../model/pageablePartner';

@Component({
  selector: 'app-get-partners',
  templateUrl: './get-partners.component.html',
  styleUrls: ['./get-partners.component.css']
})
export class GetPartnersComponent implements OnInit {

  page: PageablePartner;
  p = 1;

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
}
