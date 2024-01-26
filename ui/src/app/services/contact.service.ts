import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { environment } from '../../environments/environment';
import { AppConstants } from '../constants/app.constants';
import { HttpClient } from '@angular/common/http';
import { ServerConstants } from '../constants/server.api.constants';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  saveMessage(contact : Contact){
    return this.httpClient.post(environment.SERVER_API_ROOT_URL + ServerConstants.SAVE_CONTACT_MSG_API_ENDPOINT, contact, 
      {observe:'response'});
  }
  
}
