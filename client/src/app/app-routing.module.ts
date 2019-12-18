import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';


const routes: Routes = [
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
