import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactUsEmail: string;
  contactUsPhone: string;
  contactUsFax: string;
  contactUsAddress: string;
  

  constructor() { 
    this.contactUsEmail = environment.CONTACT_US_EMAIL;
    this.contactUsPhone = environment.CONTACT_US_PHONE;
    this.contactUsFax = environment.CONTACT_US_FAX;
    this.contactUsAddress = environment.CONTACT_US_ADDRESS;
  }

  ngOnInit(): void {
  }

}
