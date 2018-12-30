import {EventEmitter, Output} from '@angular/core';

export abstract class Draggable {
  @Output() onAppendElement = new EventEmitter();

  drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }

  createDraggableElement(type){
    let elementForCreating;
    switch (type){
      case "text": elementForCreating = 'p';break;
      case "image": elementForCreating = "img"; break;
      default: break;
    }
    let element = document.createElement(elementForCreating);
    element.draggable = true;
    switch(type){
      case 'text': element.innerText = document.getElementById(`new-${type}`)['value'];
                    document.getElementById(`new-${type}`)['value'] = "";
                    break;
      case "image": element.src = document.getElementById(`new-${type}`)['value'];
                    document.getElementById(`new-${type}`)['value'] = "";
                    break;
      case 'div':   break;

      default: throw new Error("Type not allowed.");
    }
    element.classList.add(`droppable-${type}`,'droppable-element');
    let random = Math.floor(Math.random() * 100000000);
    let id = `droppable-${type}-${random}`;
    let elementWithId = document.getElementById(id);
    if(!elementWithId){
      element.id = id;
      element.addEventListener('dragstart', this.drag, false);
      return element;
    }
    return undefined;
  }
}
