import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { SecretSantaComponent } from './pages/secret-santa/secret-santa.component';
import { AppComponent } from './app.component';
import { ProfilComponent } from './pages/profil/profil.component';


const routes: Routes = [
  {
    path: '', 
    component: AppComponent
  },
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  },
  {
    path: 'event', 
    component: SecretSantaComponent
  },
  {
    path: 'profil', 
    component: ProfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
