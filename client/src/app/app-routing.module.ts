import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExchangeCreationComponent } from './exchange/exchange-creation/exchange-creation.component';
import { CharitiesListComponent } from './charities-list/charities-list.component';


const routes: Routes = [
  {
    path: 'exchangecreation', 
    component: ExchangeCreationComponent
  },
  {
    path: 'charitieslist',
    component: CharitiesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
