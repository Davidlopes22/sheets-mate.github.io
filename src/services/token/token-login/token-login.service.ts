import { Injectable } from '@angular/core';

const KEY = 'userToken';

@Injectable({
  providedIn: 'root',
})
export class TokenUserService {
  hasTokenUserLogin() {
    return !!this.getTokenUserLogin();
  }

  setTokenUserLogin(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getTokenUserLogin() {
    return window.localStorage.getItem(KEY);
  }

  removeTokenUserLogin() {
    window.localStorage.removeItem(KEY);
  }
}
