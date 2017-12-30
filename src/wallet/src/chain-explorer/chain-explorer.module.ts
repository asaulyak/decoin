import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChainExplorerComponent} from "./chain-explorer.component";

@NgModule({
  declarations: [
    ChainExplorerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ChainExplorerComponent]
})
export class ChainExplorerModule {
}
