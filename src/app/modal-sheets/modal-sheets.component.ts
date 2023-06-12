import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DriveSpreadSheet } from '../interfaces/drive-spreadsheets';
import { TokenPermissionService } from 'src/services/token/token-permission/token-permission.service';
import { ModalCodeComponent } from '../modal-columns/modal-code.component';
import { HttpClient } from '@angular/common/http';
import { Message } from '../interfaces/message';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-modal-sheets',
  templateUrl: './modal-sheets.component.html',
  styleUrls: ['./modal-sheets.component.css']
})
export class ModalSheetsComponent implements OnInit {
  urlAppsScript = environment.googleAppsScriptBackend;
  columns:DriveSpreadSheet[]=[];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private tokenPermissionService: TokenPermissionService,
  private dialog: MatDialog,
  private http: HttpClient,
  ) { 
    this.columns = data.files;
  }

  ngOnInit(): void {

  }
  buildUrl(data:DriveSpreadSheet){
    const ACCESSTOKEN = this.tokenPermissionService.getTokenUserPermission();
    const ID_OBJECT = data.id;
    var auxUrl = `https://lh3.googleusercontent.com/d/${ID_OBJECT}=w250-h188-p-k-nu?access_token=${ACCESSTOKEN}`

    return auxUrl;
  }

  openDialog(data:DriveSpreadSheet){

    const dialogRef = this.dialog.open(ModalCodeComponent,{  
      data}
  )
  }
    

  public onCardClick(evt: MouseEvent){
    console.log(evt);
  }
}
