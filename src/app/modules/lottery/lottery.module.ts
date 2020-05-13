import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { LotteryRoutingModule } from './lottery-routing.module';
import { SpinAndWinComponent } from './pages/spin-and-win/spin-and-win.component';
import { SpinWheelComponent } from './components/spin-wheel/spin-wheel.component';
import { SharedModule } from '../../shared/shared.module';
import { SpinButtonComponent } from './components/spin-button/spin-button.component';

@NgModule({
  declarations: [SpinAndWinComponent, SpinWheelComponent, SpinButtonComponent],
  imports: [
    CommonModule,
    LotteryRoutingModule,
    SharedModule,

    NgxChartsModule,
  ]
})
export class LotteryModule { }
