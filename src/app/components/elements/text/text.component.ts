import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Draggable} from '../../../core/base/draggable.base';

@Component({
  selector: 'Text',
  templateUrl: './text.component.html'
})
export class TextComponent extends Draggable {

  constructor() {
    super();
  }

  createText(event){
    event.preventDefault();
    if(document.getElementById(`new-text`) && document.getElementById(`new-text`)['value'].trim()){
      let text = this.createDraggableElement('text');
      if(text){
        this.onAppendElement.emit(text);
      }
    }
  }
}
