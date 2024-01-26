import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ServerConstants } from '../constants/server.api.constants';
import { NewsSubscription } from '../models/news-subscription.model';

@Injectable({
  providedIn: 'root'
})
export class NewsSubscriptionService {

  constructor(private httpClient: HttpClient) { }

  doNewsSubscription(newsSubscription : NewsSubscription){
    console.log(newsSubscription)
    return this.httpClient.post(environment.SERVER_API_ROOT_URL + ServerConstants.NEWS_SUBSCRIPTION_API_ENDPOINT, newsSubscription, { observe: 'response'});
  }
  
}
