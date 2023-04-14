import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReusableButtonComponent } from './reusable-button/reusable-button.component';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ReusableButtonComponent,
    GenericDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
