import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { AppConstants } from '../constants/app.constants';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    static readonly SESSION_STORAGE_KEY: string = "userdetails";
    static readonly AUTH_STATUS: string = "AUTH";
    private isAuthenticated: boolean = false;
    private logoutRedictUrl: string = '';

    constructor(private readonly keycloak: KeycloakService, private route: ActivatedRoute, private router: Router) {

    }

    public isLoggedIn(): boolean {        
        return this.isAuthenticated;
    }

    public setLogoutRedictUrl(logoutRedictUrl: string) {
        this.logoutRedictUrl = logoutRedictUrl;
    }

    public setAuthStatus(isLoginedIn: boolean): void {
        this.isAuthenticated = isLoginedIn;
        if (isLoginedIn) {
            this.saveAuthStausInBrowserSession();
        }else{
            this.clearAuthStausFromBrowserSession();
        }
        
    }

    public login() {
        this.keycloak.login();             
    }

    public async logout_old() {
        // this.keycloak.logout();
        await this.keycloak.logout(environment.APP_ROOT_URL + AppConstants.HOME_PATH).then(() => {
            this.keycloak.clearToken(); // the problem is with this line!!
        });
        // window.sessionStorage.setItem("userdetails", '');
        // window.sessionStorage.setItem("XSRF-TOKEN",null);
        // this.router.navigate(['/home']);
        // this.router.navigateByUrl('http://localhost:5006/home');
    }

    public logout() {             
        // this.keycloak.logout(this.logoutRedictUrl);   
        // this.keycloak.logout();    
        this.keycloak.logout(environment.APP_ROOT_URL + AppConstants.HOME_PATH);
    }

    private saveAuthStausInBrowserSession() {        
        this.keycloak.loadUserProfile().then((keyCloakProfile) => {
            let user: User = new User();
            user.authStatus = UserService.AUTH_STATUS;
            user.name = keyCloakProfile.firstName;
            let userDetails: string = JSON.stringify(user);
            console.log('Saving Auth status in Browser session, userdetails=' + userDetails)
            window.sessionStorage.setItem(UserService.SESSION_STORAGE_KEY, userDetails);
        })
    }

    public clearAuthStausFromBrowserSession() {
        window.sessionStorage.removeItem(UserService.SESSION_STORAGE_KEY);
    }

    public verifyAuthStatus() : boolean {   
        let userDetails: string = window.sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (userDetails != null) {
            let user: User = JSON.parse(userDetails);
            return UserService.AUTH_STATUS == user.authStatus
        }
        return false
    }

    public getAuthUserDetails() : User | null {
        let userDetails: string = window.sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        return userDetails != null ? JSON.parse(userDetails) : new User();
    }
}    