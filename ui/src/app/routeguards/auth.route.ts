import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { UserService } from '../services/user.service';
// import { KeycloakProfile } from 'keycloak-js';
// import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthKeyClockGuard extends KeycloakAuthGuard {
  // user = new User();
  // public userProfile: KeycloakProfile | null = null;

  constructor(protected override router: Router, protected readonly keycloak: KeycloakService, private userService: UserService) {
    super(router, keycloak);
  }

  public async isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Force the user to log in if currently not authenticated.
    if (!this.authenticated) {
      this.userService.setAuthStatus(false);

      await this.keycloak.login({        
        redirectUri: window.location.origin + state.url,
      });
    }
    else {
      // this.userProfile = await this.keycloak.loadUserProfile();
      // this.user.authStatus = 'AUTH';
      // this.user.name = this.userProfile.firstName;
      // this.user.email = this.userProfile.email;
      // window.sessionStorage.setItem("userdetails", JSON.stringify(this.user));
      this.userService.setAuthStatus(true);
      this.userService.setLogoutRedictUrl(window.location.origin + state.url);
    }

    // Get the roles required from the route.
    const requiredRoles = route.data['roles'];

    // Allow the user to to proceed if no additional roles are required to access the route.
    if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
      return true;
    }

    // Allow the user to proceed if all the required roles are present.
    return requiredRoles.some((role) => this.roles.includes(role));
  }
}