import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MenuComponent } from './pages/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Etape1Component } from './pages/landing-page/etape1/etape1.component';
import { Etape2Component } from './pages/landing-page/etape2/etape2.component';
import { Etape3Component } from './pages/landing-page/etape3/etape3.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MenuComponent,
    Etape1Component,
    Etape2Component,
    Etape3Component,
    FooterComponent
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
