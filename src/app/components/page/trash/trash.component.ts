import { Component, OnInit } from '@angular/core';
import {Droppable} from '../../../core/base/droppable.base';

@Component({
  selector: 'Trash',
  templateUrl: './trash.component.html',
})
export class TrashComponent extends Droppable{

  constructor() {
    super();
  }

}
