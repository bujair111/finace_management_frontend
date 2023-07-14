import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BudgetComponent } from './budget/budget.component';
import { CreditComponent } from './credit/credit.component';
import { DebitComponent } from './debit/debit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'budget',component: BudgetComponent},
  { path: 'credit',component: CreditComponent},
  { path: 'debit',component: DebitComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
