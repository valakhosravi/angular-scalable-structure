import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({ transform: 'scaleX(.2)' }),
        animate('0.2s',
          style({ transform: 'scaleX(1)' }))  // final
      ]),
    ])
  ],
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
