import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(GenericDialogComponent,{
      data: {modalTitle: 'My Angular blog', modalContent: 'angular dialog basic example',
      buttonLabel:'Save'},
    });
  }


  openDialogWithImage() {
    this.dialog.open(GenericDialogComponent,{
      data: {modalTitle: 'My second modal', imageUrl:'https://placehold.co/600x400',
      buttonLabel:'Save'},
    });
  }
}
