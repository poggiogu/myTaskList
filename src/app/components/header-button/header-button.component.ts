import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-button',
  templateUrl: './header-button.component.html',
  styleUrls: ['./header-button.component.css']
})
export class HeaderButtonComponent {

  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter();
  constructor () {}

  ngonInit(): void {}

  onClick() {
    this.btnClick.emit();
  }

}
