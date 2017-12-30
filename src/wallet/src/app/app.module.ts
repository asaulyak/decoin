import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WalletModule} from '../wallet/wallet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WalletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
