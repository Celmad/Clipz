import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() colour = 'blue'

  get bgColour(): string {
    return `bg-${this.colour}-400`
  }
}
