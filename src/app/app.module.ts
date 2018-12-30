import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuilderComponent } from './components/page/builder/builder.component';
import { DisplayComponent } from './components/page/display/display.component';
import { DropAreaComponent } from './components/page/drop-area/drop-area.component';
import { TextComponent } from './components/elements/text/text.component';
import { TrashComponent } from './components/page/trash/trash.component';
import { BlockComponent } from './components/elements/block/block.component';
import { ImageComponent } from './components/elements/image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    BuilderComponent,
    DisplayComponent,
    DropAreaComponent,
    TextComponent,
    TrashComponent,
    BlockComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
