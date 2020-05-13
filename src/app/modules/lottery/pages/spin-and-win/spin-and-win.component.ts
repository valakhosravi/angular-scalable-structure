import { Component, OnInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-spin-and-win',
  templateUrl: './spin-and-win.component.html',
  styleUrls: ['./spin-and-win.component.scss']
})
export class SpinAndWinComponent implements OnInit, AfterContentChecked {

  isSpinWheelSpinningEnded = false;
  isMobileResolution: boolean;
  degree = 0;
  constructor() {
    if (window.innerWidth < 768) {
      this.isMobileResolution = true;
    } else {
      this.isMobileResolution = false;
    }
  }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
  }

  onStartClick() {
    this.degree = 10;
    setTimeout(() => {
      this.isSpinWheelSpinningEnded = true;
    }, 3000);
  }
}
