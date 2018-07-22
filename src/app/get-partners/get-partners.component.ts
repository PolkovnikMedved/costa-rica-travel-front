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

  constructor(private getPartnersService: GetPartnersService) { }

  ngOnInit() {
    this.getPartners();
  }

  /*
    get partners asynchronous
  */
  getPartners(): void {
    this.getPartnersService.getPartners().subscribe(pageablePartner => this.page = pageablePartner );
  }
}
