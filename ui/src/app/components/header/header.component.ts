import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public readonly userService: UserService, private route: Router) {

  }

  public async ngOnInit() {

  }

  login() {
    this.userService.login();
  }

  logout(redirectUrl : string) {
    // console.log(redirectUrl);
    // console.log('Host:' + window.location.host);
    console.log('Origin:' + window.location.origin);
    // let url = window.location.origin + this.route.url;
    console.log('Logut redirect url=' + redirectUrl);
    this.userService.logout();
  }
}
