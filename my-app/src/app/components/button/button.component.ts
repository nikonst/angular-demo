import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() color: string ="";
  @Input() text: string=""
  @Output() btnClick = new EventEmitter()

  constructor() {
    // this.color = ""
    // this.text = ""
  }

  onClick() {
    this.btnClick.emit()
  }
}
