import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { KeycloakService } from 'keycloak-angular';
import { NewsSubscription } from 'src/app/models/news-subscription.model';
import { NewsSubscriptionService } from 'src/app/services/news.subscription.service';

@Component({
  selector: 'app-news-updates-subscription',
  templateUrl: './news-subscription.component.html',
  styleUrls: ['./news-subscription.component.scss']
})
export class NewsSubscriptionComponent {
  model: NewsSubscription = new NewsSubscription()
  public isLoggedIn: boolean = false;

  constructor(private newsSubscriptionService: NewsSubscriptionService, private readonly keycloak: KeycloakService) {

  }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
  }

  newsSingup(newsSingupForm: NgForm) {
    this.newsSubscriptionService.doNewsSubscription(this.model).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        
        newsSingupForm.resetForm();
      }, error => {
        console.log(error);
      });
  }

}
