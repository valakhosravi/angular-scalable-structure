import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin-button',
  templateUrl: './spin-button.component.html',
  styleUrls: ['./spin-button.component.scss']
})
export class SpinButtonComponent implements OnInit {

  isFirstTime = true;
  isLoading = false;
  isReady = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.isFirstTime) {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        this.isReady = true;
      }, 3000);
    }
    this.isFirstTime = false;
  }
}
