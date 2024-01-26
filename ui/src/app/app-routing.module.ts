import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {NgModule} from "@angular/core";
import {AboutComponent} from "./components/about/about.component";
import {ContactComponent} from "./components/contact/contact.component";
import {FaqsComponent} from "./components/faqs/faqs.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SubscriptionComponent } from "./components/subscription/subscription.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthKeyClockGuard } from "./routeguards/auth.route";
import { ViewForecastComponent } from "./components/view-forecast/view-forecast.component";
import { NewsUpdatesComponent } from "./components/news-updates/news-updates.component";
import { NewsSubscriptionComponent } from "./components/news-subscription/news-subscription.component";

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},  
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'faqs', component: FaqsComponent},
  {path: 'newssignup', component: NewsSubscriptionComponent},
  {path: 'newsupdates', component: NewsUpdatesComponent},
  // {path: '', component: HomeComponent, children:[            
  //     {path: 'profile', component: ProfileComponent},
  //     {path: 'subscription', component: SubscriptionComponent},
  //     {path: 'dashboard', component: DashboardComponent},
  //   ]
  // },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthKeyClockGuard], data: {roles: ['USER','ADMIN']}},
  {path: 'viewforecast', component: ViewForecastComponent, canActivate: [AuthKeyClockGuard], data: {roles: ['USER','ADMIN']}},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthKeyClockGuard], data: {roles: ['USER','ADMIN']}},
  {path: 'subscription', component: SubscriptionComponent, canActivate: [AuthKeyClockGuard], data: {roles: ['USER','ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
