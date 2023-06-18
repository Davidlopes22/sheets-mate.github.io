import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService) {}

  private subscription: Subscription = Subscription.EMPTY;

  ngOnInit() {
    this.subscription = this.userService.auth();
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }

}
