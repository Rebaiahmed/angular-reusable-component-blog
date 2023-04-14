import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.scss']
})
export class GenericDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data?: any
  ) {}
  @Input() modalTitle=this.data?.modalTitle ?? '';
  @Input() modalContent=this.data?.modalContent ?? '';
  @Input() buttonLabel=this.data?.buttonLabel ?? '';
  @Input() isModalVisible =false;
  @Input() imageUrl=this.data?.imageUrl ?? '';
  @Input() videoUrl=this.data?.videoUrl ?? '';


  @Input() templateContent=this.data?.templateContent ?? '';

}
