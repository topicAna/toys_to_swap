import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Etape1Component } from './pages/landing-page/etape1/etape1.component';
import { Etape2Component } from './pages/landing-page/etape2/etape2.component';
import { Etape3Component } from './pages/landing-page/etape3/etape3.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FooterComponent } from './footer/footer.component';

import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';
import { ExchangeDetailComponent } from './exchange/exchange-detail/exchange-detail.component';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { HttpClientModule } from '@angular/common/http';
import { CharitiesListComponent } from './charities-list/charities-list.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    Etape1Component,
    Etape2Component,
    Etape3Component,
    FooterComponent,
    SecretSantaComponent,
    ExchangeListComponent,
    ExchangeDetailComponent,
    ExchangeCreationComponent,
    CharitiesListComponent,
    LoginComponent
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),   
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
