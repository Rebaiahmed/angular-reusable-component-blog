import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GenericDialogComponent } from './generic-dialog/generic-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('formcontent') formContentTemplateRef: TemplateRef<any> | undefined;
  hide = true;
  myForm: FormGroup;
  constructor(public dialog: MatDialog) {

    this.myForm = new FormGroup({
      name: new FormControl(''),
      email:new FormControl(''),
    });
  }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  
  

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

  openDialogNgTemplate() {
    this.dialog.open(GenericDialogComponent,{
      data: {modalTitle: '<b>Form component</b>',buttonLabel:'Save',templateContent:this.formContentTemplateRef,},
    });
  }

  
}
