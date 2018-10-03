import { Component, OnInit } from '@angular/core';
import {Partner} from '../../../model/partner';
import {GetPartnersService} from '../../../service/get-partners.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-partner',
  templateUrl: './get-partner.component.html',
  styleUrls: ['./get-partner.component.css']
})
export class GetPartnerComponent implements OnInit {

  partner: Partner;

  constructor(
    private getPartnersService: GetPartnersService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getPartner();
  }

  getPartner(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getPartnersService.getPartner(id).subscribe(partner => this.partner = partner);
  }

}
