import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinAndWinComponent } from './pages/spin-and-win/spin-and-win.component';


const routes: Routes = [{
  path: 'spin-and-win',
  component: SpinAndWinComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LotteryRoutingModule { }
