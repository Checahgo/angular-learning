import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-progress',
  templateUrl: './form-progress.component.html',
  styleUrls: ['./form-progress.component.scss']
})
export class FormProgressComponent {
  @Input() validFieldPercent: number = 0;

  ngOnChanges() {
    this.validFieldPercent = Math.round(this.validFieldPercent);
  }
}
