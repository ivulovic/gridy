import {Component, Input} from '@angular/core';
import {Draggable} from '../../../core/base/draggable.base';

@Component({
  selector: 'Block',
  templateUrl: './block.component.html'
})
export class BlockComponent extends Draggable {

  // blocks = [];
  // sizes = [12, 6, 4];
  //
  // @Input() set size(value: number){
  //   if(value){
  //     for(let i =0; i< value; i++){
  //       this.blocks.push({id: Math.floor(Math.random() * 100000000), size: this.sizes[value-1]})
  //     }
  //   }
  // }

  constructor() { super(); }

  createBlock(size){
    switch (parseInt(size, 10)){
      case 1: this.createOneBlock(); break;
      case 2: this.createTwoBlocks(); break;
      case 3: this.createThreeBlocks(); break;
      default: throw new Error("Block size not specified.");
    }
  }

  createOneBlock(){
    let element = this.createDraggableElement('div');
    if(element){
      element.classList.add("droppable-block");
      this.onAppendElement.emit(element);
    }
  }

  createTwoBlocks(){
    let element1 = this.createDraggableElement('div');
    let element2 = this.createDraggableElement('div');
    let elementContainer = this.createDraggableElement('div');

    if(elementContainer && element2 && element1){
      elementContainer.classList.add("multiple-blocks-container");
      element1.classList.add("droppable-two-blocks");
      element2.classList.add("droppable-two-blocks");
      elementContainer.appendChild(element1);
      elementContainer.appendChild(element2);
      this.onAppendElement.emit(elementContainer);
    }
  }

  createThreeBlocks(){
    let element1 = this.createDraggableElement('div');
    let element2 = this.createDraggableElement('div');
    let element3 = this.createDraggableElement('div');
    let elementContainer = this.createDraggableElement('div');

    if(elementContainer && element3 && element2 && element1){
      elementContainer.classList.add("multiple-blocks-container");
      element1.classList.add("droppable-three-blocks");
      element2.classList.add("droppable-three-blocks");
      element3.classList.add("droppable-three-blocks");
      elementContainer.appendChild(element1);
      elementContainer.appendChild(element2);
      elementContainer.appendChild(element3);
      this.onAppendElement.emit(elementContainer);
    }
  }

}
