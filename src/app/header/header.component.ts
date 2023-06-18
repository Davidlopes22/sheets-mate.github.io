import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SocialAuthService } from '@abacritt/angularx-social-login';
import { MatDialog } from '@angular/material/dialog';
import { ModalHelperComponent } from '../modal-helper/modal-helper.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog, private userSocialService:SocialAuthService,private router: Router) {
  }

  callLogout() {
    this.userSocialService.signOut();
    this.router.navigate(['/login']);
  }

  callHelper(){
    const dialogRef = this.dialog.open(ModalHelperComponent);
  }
  ngOnInit() {}

}
