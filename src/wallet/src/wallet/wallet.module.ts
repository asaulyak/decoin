import {NgModule} from '@angular/core';
import {WalletComponent} from './wallet.component';
import {WalletService} from './wallet.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    HttpClientModule,
    FormsModule
  ]
})
export class WalletModule {

}
