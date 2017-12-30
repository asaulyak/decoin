import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {WalletService} from './wallet.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    WalletComponent
  ],
  providers: [
    WalletService
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    HttpClientModule
  ]
})
export class WalletModule {

}
