import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'DropArea',
  templateUrl: './drop-area.component.html'
})
export class DropAreaComponent{

  @Input() size = "12";
  @Input() id: string;
  @Output() drop = new EventEmitter();

  onDragOver(event){
    event.target.classList.add("drag-over");
    event.preventDefault();
  }

  onDragEnd(event){
    event.target.classList.remove("drag-over");
  }

  onDrop(event){
    event.target.classList.remove("drag-over");
    this.drop.emit(event);
  }

  constructor() {}

}
