import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';
import { ExchangeDetailComponent } from './exchange/exchange-detail/exchange-detail.component';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeListComponent,
    ExchangeDetailComponent,
    ExchangeCreationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
