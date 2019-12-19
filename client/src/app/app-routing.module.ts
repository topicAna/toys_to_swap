import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';
import { CharitiesListComponent } from './charities-list/charities-list.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { AppComponent } from './app.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes: Routes = [

  {
    path: '', 
  component: LandingPageComponent
  },
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  },
  {
    path: 'exchangelist',
    component: ExchangeListComponent
  },
  {
    path: 'charitieslist',
    component: CharitiesListComponent
  },
  {
    path: 'event', 
    component: SecretSantaComponent
  },
  {
    path: 'profil', 
    component: ProfilComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
