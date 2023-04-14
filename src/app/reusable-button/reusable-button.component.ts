import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reusable-button',
  templateUrl: './reusable-button.component.html',
  styleUrls: ['./reusable-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReusableButtonComponent  implements OnInit {

  @Input() currentTemplate:any
  @Input() buttonClass: string = 'btn btn-primary';
  @Output() clickEmitter: EventEmitter<void> = new EventEmitter<void>();
  disabled: boolean = false;

  ngOnInit(): void {
  }

  click(){
    this.clickEmitter.emit();
  }

}

