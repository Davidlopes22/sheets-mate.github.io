import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleInitOptions,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule } from "@angular/material/form-field";
import {MatTableModule} from '@angular/material/table';
import { ModalSheetsComponent } from './modal-sheets/modal-sheets.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { ModalCodeComponent } from './modal-columns/modal-code.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ModalCodeGeneratedComponent } from './modal-code-generated/modal-code-generated.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HeaderComponent} from './header/header.component';
import { ModalHelperComponent } from './modal-helper/modal-helper.component'
const googleLoginOptions: GoogleInitOptions = {
  oneTapEnabled: false, // default is true
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/spreadsheets.readonly',
    'https://www.googleapis.com/auth/drive.readonly',
  ],
};
@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, ModalSheetsComponent, ModalCodeComponent, ModalCodeGeneratedComponent,HeaderComponent, ModalHelperComponent],
  imports: [BrowserModule, AppRoutingModule, SocialLoginModule, HttpClientModule,
    MatCardModule, MatFormFieldModule,MatTableModule,MatDialogModule,BrowserAnimationsModule,MatGridListModule,
    MatSnackBarModule,MatSelectModule,MatProgressSpinnerModule,FormsModule, ReactiveFormsModule,MatInputModule,MatIconModule,MatTooltipModule,HighlightModule,ScrollingModule,ClipboardModule,MatCheckboxModule],

  providers: [
    {  
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '239771688241-brlbq50k8jeo59ubhi0fd0grk49dns9r.apps.googleusercontent.com',
              googleLoginOptions
            ),
          },
        ],
        onError: (err) => {
          //TODO: tratar erro
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
