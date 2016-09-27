import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TotalPipePipe } from './total-pipe.pipe';
import { TaxpipePipe } from './taxpipe.pipe';

import { OrderService } from './order.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { ReceiptSelectorComponent } from './receipt-selector/receipt-selector.component';

import { routing } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    TotalPipePipe,
    TaxpipePipe,
    ReceiptComponent,
    ReceiptSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
