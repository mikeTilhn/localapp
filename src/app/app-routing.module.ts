import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { IncomestatementComponent } from './incomestatement/incomestatement.component';

const routes: Routes = [
  {path:'', component:IncomestatementComponent},
  {path:'calendar', component:CalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
