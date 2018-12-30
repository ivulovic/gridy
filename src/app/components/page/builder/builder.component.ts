import {Component} from '@angular/core';

@Component({
  selector: 'Builder',
  templateUrl: './builder.component.html'
})
export class BuilderComponent {

  constructor() { }

  appendElement(element){
    document.getElementById("built-elements").appendChild(element);
  }

  setAsActiveTab(event){
    if(event.target.id){
      let elements = document.getElementsByClassName("sidebar-tab");
      for(let i = 0; i<elements.length; i++){
        elements[i].classList.remove("active-tab");
      }
      document.getElementById(event.target.id).classList.add("active-tab")
    }
  }

}
