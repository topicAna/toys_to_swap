import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';
import { CharitiesListComponent } from './charities-list/charities-list.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';


const routes: Routes = [
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
    path: 'login',
    component: LoginComponent
  },

  {path: '', 
  component: LandingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
