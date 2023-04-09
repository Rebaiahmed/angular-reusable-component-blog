import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReusableButtonComponent  implements OnInit {

  @Input() initialTemplate: any;
  @Input() loadingTemplate: any;
  @Input() doneTemplate: any;
  @Input() getStatus$: Observable<any> = new Observable();
  @Input() invalidForm: boolean = false;
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();
  disabled: boolean = false;
  buttonClass: string = 'btn btn-primary';
  currentTemplate: any;

 



  constructor() {
  }

  ngOnInit(): void {
    //this.currentTemplate = this.initialTemplate;
    //this.getButtonStatus();
  }

  click(){
    this.clickEmitter.emit();
  }

}

