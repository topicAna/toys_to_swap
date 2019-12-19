import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { CharitiesListComponent } from './charities-list/charities-list.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
