import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Output() clickEvent = new EventEmitter();

  executeBtn(action: string){
    this.clickEvent.emit(action);
  }

  // start($event:MouseEvent){
  //   this.clickEvent.emit('start');
  // }
  // stop($event:MouseEvent){
  //   this.clickEvent.emit('stop');
  // }
  // reset($event:MouseEvent){
  //   this.clickEvent.emit('reset');
  // }
}
