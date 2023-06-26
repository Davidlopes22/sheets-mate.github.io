import { TokenPermissionService } from './../token/token-permission/token-permission.service';
import { TokenUserService } from '../token/token-login/token-login.service';
import { Injectable } from '@angular/core';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private authService: SocialAuthService,
    private router: Router,
    private tokenUserLoginService: TokenUserService,
    private tokenPermissionService: TokenPermissionService
  ) {}

  auth() {
    this.authService.initState
    return this.authService.authState.subscribe((user) => {
      if (user) {
        this.tokenUserLoginService.setTokenUserLogin(user.idToken);
        this.router.navigate(['home']);
      }
    });
  }

  signOut() {
    console.log("signOut")
    this.authService.signOut(true).then((data) => {

      this.tokenUserLoginService.removeTokenUserLogin();
      this.tokenPermissionService.removeTokenUserPermission()

      sessionStorage.clear();
      this.router.navigate(['login']);
    }).catch(error => {
      this.tokenUserLoginService.removeTokenUserLogin();
      this.tokenPermissionService.removeTokenUserPermission()
      sessionStorage.clear();
      this.router.navigate(['login']);
    });
  }

  generateAccessToken(): void {
    this.authService
      .getAccessToken(GoogleLoginProvider.PROVIDER_ID)
      .then((accessToken) => {
        this.tokenPermissionService.setTokenUserPermission(accessToken);
      });
  }
  isLogged(){
    this.authService.authState.subscribe((user) => {
      if (user) {
        return true;
      }
      return false;
    });
  }
  getTokenAcess(){
    return this.authService.authState.subscribe((user) => {
      if (user) {
        console.log(user)
      }
    });

  } 
  refreshToken(){
    if(this.tokenPermissionService.hasTokenUserPermission()){
        this.tokenPermissionService.removeTokenUserPermission()
    }
    this.authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID);
  }
}
