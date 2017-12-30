import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';


@NgModule({
  declarations: [
    WalletComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [WalletComponent]
})
export class WalletModule {

}
