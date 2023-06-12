import { Component, Inject, OnInit } from '@angular/core';
import { DriveSpreadSheet } from '../interfaces/drive-spreadsheets';
import { Message } from '../interfaces/message';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { TokenPermissionService } from 'src/services/token/token-permission/token-permission.service';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MessageColumns, column, columnsAndRow } from '../interfaces/messageColumns';
import{ModalCodeGeneratedComponent} from '../modal-code-generated/modal-code-generated.component'
import { UserService } from 'src/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-code',
  templateUrl: './modal-code.component.html',
  styleUrls: ['./modal-code.component.css']
})
export class ModalCodeComponent implements OnInit {

  urlAppsScript = environment.googleAppsScriptBackend;

  preSheetData:Message = null!;
  loadedData:boolean = false
  loadedColumns:boolean = false
  loadingColumns:boolean = false
  foundColumns:boolean = false;
  codeGenerated:boolean = false;
  code: string= null!
  displayedColumns: string[] = ['position', 'name', 'required field'];
  columns:column[] = null!
  row:number = null!

  sheetForm = new FormGroup({
    sheetPage: new FormControl()
  }); 
  columnsByRowForm = new FormGroup({
    rowOnSheet: new FormControl()
  }); 

  constructor(@Inject(MAT_DIALOG_DATA) public data:DriveSpreadSheet,
  private http: HttpClient,
  private tokenPermissionService:TokenPermissionService,
  private userService: UserService,
  private dialog: MatDialog,
  private matSnackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    const url = this.buildUrl("getSheetsTitles");
    this.http.get<Message>(url).subscribe({
      next:(response)=>{
        this.preSheetData = response;
        this.loadedData = true;
      },
      error: (error) => {
        console.log(error)
        
        ;}
    })
  }

  buildUrl(actionRequest:string,pageName?:string,rowInputByUser?:number, columns?:any[]){
    var url = new URL(this.urlAppsScript);
    const ACCESSTOKEN = this.tokenPermissionService.getTokenUserPermission();
    if(ACCESSTOKEN)
      url.searchParams.append("permissionToken", ACCESSTOKEN)
      url.searchParams.append("actionRequest", actionRequest)
      url.searchParams.append("sheetId", this.data.id)
    if(pageName)
      url.searchParams.append("pageName", pageName)
    if(rowInputByUser || rowInputByUser == 0)
      url.searchParams.append("rowInputByUser", rowInputByUser.toString())
    if(columns)
      url.searchParams.append("columnsArray", JSON.stringify(columns))
    return url.toString();
  }
  getColumns(data:any){
    if(this.sheetForm.value.sheetPage){
      const url = this.buildUrl("getColumns",this.sheetForm.value.sheetPage);
      console.log(url)
      this.loadingColumns = true;
      this.http.get<MessageColumns>(url).subscribe({
        next:(response)=>{
          if(!response.success){
            this.matSnackBar.open((response.message).toString(), 'Ok', { duration: 10000,horizontalPosition:"end",verticalPosition:"top",panelClass:["red-snackbar"]});
            this.foundColumns = false;
          }else{
            this.columns = response.message.columns
            this.row = response.message.row
            this.foundColumns = true;
          }
          this.loadedColumns = true
          this.loadingColumns = false;
        },  
        error: (error) => {
          this.userService.refreshToken();
          console.log(error);
        }
      })
    }
  }
  getColumnsByRow(){
    const url = this.buildUrl("getColumns",this.sheetForm.value.sheetPage,this.columnsByRowForm.value.rowOnSheet);
    this.loadedColumns = false;
    this.loadingColumns = true;
    console.log(url)
    this.http.get<MessageColumns>(url).subscribe({
      next:(response)=>{
        console.log(response)
          if(!response.success){
            this.matSnackBar.open((response.message).toString(), 'Ok', { duration: 10000,horizontalPosition:"end",verticalPosition:"top",panelClass:["red-snackbar"]});
            this.foundColumns = false;
          }
        else{
          this.columns = response.message.columns
          this.row = response.message.row
          this.foundColumns = true;
        }
       
       this.loadingColumns = false;
       this.loadedColumns = true;
        
      },  
      error: (error) => {
        console.log(error);}
    })
  }
  valueChange(element:column, $event:any){
    element.required = $event.checked;
  }
  generateCode(){
    let columnsArray:any[] = []
    this.columns.forEach(function (column){
      columnsArray.push([column.position,column.columnName,column.required ? true : false])
    })

    const url = this.buildUrl("generateCode",this.sheetForm.value.sheetPage,this.row, columnsArray);
    console.log(this.columns)
    console.log(url)
    //"permissionToken","sheetId","pageName","rowInputByUser"
    this.http.get<Message>(url).subscribe({
      next:(response)=>{
       console.log(response)
       this.codeGenerated = true
       this.code = response.message.toString();
       const dialogRef = this.dialog.open(ModalCodeGeneratedComponent,{data:this.code})
      },  
      error: (error) => {
        console.log(error);}
    })
    console.log(this.columns)
    console.log(this.row)
  }
}
