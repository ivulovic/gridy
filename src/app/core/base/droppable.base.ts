export abstract class Droppable{

  onDrop(event){
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let elementId = data;
    let element = document.getElementById(elementId);
    if(elementId && (element instanceof Node) && !event.target.contains(element)){
      event.target.appendChild(element);
    }
  }

  onRemove(event){
    event.preventDefault();
    let elementId = event.dataTransfer.getData("text");
    if(elementId){
      var element = document.getElementById(elementId);
      if(element){
        element.parentNode.removeChild(element);
      }
    }
  }

}
