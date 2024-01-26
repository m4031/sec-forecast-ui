import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  user = new User();

  constructor(private readonly userService: UserService) {
    
  }

  ngOnInit() {   
    this.user = this.userService.getAuthUserDetails();
  }
}
