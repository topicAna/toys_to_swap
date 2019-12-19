import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { ExchangeListComponent } from './exchange/exchange-list/exchange-list.component';


const routes: Routes = [
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  },
  {
    path: 'exchangelist',
    component: ExchangeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
