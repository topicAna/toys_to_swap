import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Etape1Component } from './pages/landing-page/etape1/etape1.component';
import { Etape2Component } from './pages/landing-page/etape2/etape2.component';
import { Etape3Component } from './pages/landing-page/etape3/etape3.component';
import { FooterComponent } from './footer/footer.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';
import { ExchangeDetailComponent } from './exchange/exchange-detail/exchange-detail.component';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { ProfilComponent } from './pages/profil/profil.component';
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
    ExchangeListComponent,
    ExchangeDetailComponent,
    ExchangeCreationComponent,
    ProfilComponent,
    CharitiesListComponent,
    LoginComponent,
    SecretSantaComponent
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    HttpClientModule,
    ReactiveFormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
