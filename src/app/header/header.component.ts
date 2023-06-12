import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { TokenPermissionService } from 'src/services/token/token-permission/token-permission.service';
import { UserService } from 'src/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string;
  public defaultRoute = '';

  constructor(private router:Router, private userSocialService:UserService) {
    this.name = '';
  }

  callLogout() {
    this.userSocialService.signOut();
  }


  ngOnInit() {}

}
