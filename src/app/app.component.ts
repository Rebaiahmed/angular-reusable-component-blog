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
      data: {modalTitle: 'My image content modal', imageUrl:'https://placehold.co/600x400',
      buttonLabel:'Save'},
    });
  }


  openDialogWithVideo() {
    this.dialog.open(GenericDialogComponent,{
      data: {modalTitle: '<b>Customized text bold</b>', videoUrl:'https://www.w3schools.com/html/movie.mp4',
      buttonLabel:'Save'},
    });
  }
}
