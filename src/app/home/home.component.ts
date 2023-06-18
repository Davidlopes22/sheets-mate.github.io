import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TokenPermissionService } from 'src/services/token/token-permission/token-permission.service';
import { ModalSheetsComponent } from '../modal-sheets/modal-sheets.component';
import { DriveRequestData, DriveSpreadSheet } from '../interfaces/drive-spreadsheets';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  urlAppsScript = environment.googleAppsScriptBackend;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private tokenPermissionService: TokenPermissionService,
    private dialog: MatDialog,
    private authService: SocialAuthService

  ) {}

  onButtonClick(row: number) {
    console.log('Button clicked for row:', row);
  }
  //chamar backend e pegar os dados
  ngOnInit() {
  }
  myFunc() {
    this.userService.signOut();
  }
  async requestAcess() {
    //PRECISO SALVAR NO SERVICO E SALVAR UM EXPIRATION TIME
    if(!this.tokenPermissionService.hasTokenUserPermission()){
      const response =  this.userService.generateAccessToken();
    }
    const TOKEN = this.tokenPermissionService.getTokenUserPermission();

    var files:DriveSpreadSheet[];

    const url = `https://www.googleapis.com/drive/v3/files?q=mimeType%3D%27application%2Fvnd.google-apps.spreadsheet%27&access_token=${TOKEN}`
    this.http.get<DriveRequestData>(url).subscribe({
      next:(response)=>{
        files = response.files
        const dialogRef = this.dialog.open(ModalSheetsComponent, {
          data: {
            files
        }
        });
      },
        error: (error) => {
          this.userService.refreshToken()
        console.log(error);}
        
    })
  }
  RequestApps(){
      let teste = [ [4,'id',true], [5,'title',true], [6,'dev',true], [7,'client',false] ]
      console.log(JSON.stringify(teste))
      var url = new URL(this.urlAppsScript);
      url.searchParams.append("columnsArray", JSON.stringify(teste))
    console.log(url.toString())


/*
    this.http.get('https://script.google.com/macros/s/AKfycbxeq_W96XSqjeXa0XWfi1Zkia3Rcphy11ihMrqqeuWM4lOobhfkdllMrL6kWAHgg1dHgA/exec').subscribe({
      next:(data)=>{
        console.log(data)
      },
        error: (error) => {
        console.log(error);}
        
    })*/

  }
}
