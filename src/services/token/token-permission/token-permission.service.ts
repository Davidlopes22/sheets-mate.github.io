import { Injectable } from '@angular/core';

const PERMISSIONKEY = 'permissionToken';

@Injectable({
  providedIn: 'root',
})
export class TokenPermissionService {
  constructor() {}

  hasTokenUserPermission() {
    return !!this.getTokenUserPermission();
  }

  setTokenUserPermission(token: string) {
    console.log(token);
    window.localStorage.setItem(PERMISSIONKEY, token);
  }

  getTokenUserPermission() {
    return window.localStorage.getItem(PERMISSIONKEY);
  }

  removeTokenUserPermission() {
    window.localStorage.removeItem(PERMISSIONKEY);
  }
}
