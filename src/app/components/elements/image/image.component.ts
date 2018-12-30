import { Component } from '@angular/core';
import {Draggable} from '../../../core/base/draggable.base';

@Component({
  selector: 'Image',
  templateUrl: './image.component.html'
})
export class ImageComponent extends Draggable{

  constructor() { super(); }

  createImage(event){
    event.preventDefault();
    if(document.getElementById(`new-image`) && document.getElementById(`new-image`)['value'].trim()){
      let image = this.createDraggableElement('image');
      if(image){
        this.onAppendElement.emit(image);
      }
    }
  }

}
