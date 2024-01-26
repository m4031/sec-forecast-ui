import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { Contact } from "src/app/models/contact.model";
import { ContactService } from 'src/app/services/contact.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public isLoggedIn: boolean = false;
  contact = new Contact();
  contactUsEmail: string;
  contactUsPhone: string;
  contactUsFax: string;
  contactUsAddress: string;
  
  
  constructor(private readonly keycloak: KeycloakService, private contactService: ContactService) {
    this.contactUsEmail = environment.CONTACT_US_EMAIL;
    this.contactUsPhone = environment.CONTACT_US_PHONE;
    this.contactUsFax = environment.CONTACT_US_FAX;
    this.contactUsAddress = environment.CONTACT_US_ADDRESS;
    this.contactUsAddress = environment.CONTACT_US_ADDRESS;
  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
  }

  saveMessage(contactForm: NgForm) {
    this.contactService.saveMessage(this.contact).subscribe(
      responseData => {
        this.contact = <any> responseData.body;
        contactForm.resetForm();
      }, error => {
        console.log(error);
      });
  }

}
