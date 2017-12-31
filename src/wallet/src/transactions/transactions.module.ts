import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {TransactionsComponent} from "./transactions.component";
import {TransactionsService} from "./transactions.service";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  providers: [
    TransactionsService
  ],
  exports: [
    TransactionsComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule
  ]
})
export class TransactionsModule {

}
