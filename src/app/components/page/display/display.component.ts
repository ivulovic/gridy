import { Component } from '@angular/core';
import {Droppable} from '../../../core/base/droppable.base';

@Component({
  selector: 'Display',
  templateUrl: './display.component.html'
})
export class DisplayComponent extends Droppable {

  constructor() {
    super();
  }

}
