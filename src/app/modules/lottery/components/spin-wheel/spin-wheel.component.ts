import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, AfterViewChecked, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-spin-wheel',
  templateUrl: './spin-wheel.component.html',
  styleUrls: ['./spin-wheel.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(15deg)' })),
      state('rotated', style({ transform: 'rotate({{ rotationDegree }}deg)' }), { params: { rotationDegree: 720 } }),
      transition('rotated => default', animate('3000ms ease-in-out')),
      transition('default => rotated', animate('3000ms ease-in-out'))
    ]),
    trigger('rotatedStateDesktop', [
      state('default', style({ transform: 'rotate(0deg)' })),
      state('rotated', style({ transform: 'rotate({{ rotationDegree }}deg)' }), { params: { rotationDegree: 720 } }),
      transition('rotated => default', animate('3000ms ease-in-out')),
      transition('default => rotated', animate('3000ms ease-in-out'))
    ]),
  ]
})
export class SpinWheelComponent implements OnInit, AfterViewInit, AfterViewChecked, OnChanges {
  @ViewChild('spinWheelContainer', { static: false }) spinWheelContainer: ElementRef<any>;
  @Input() spiningDegree: number;
  @Input() view: string;
  isSpinWheelContainerWidthCalculated = false;
  isWheelKnobShaking = false;
  leftNagativeMargin: number;
  rotationDegree = 2160;
  spinWheelContainerHeight = 0;
  spinWheelWidth: number;
  state = 'default';
  topNagativeMargin: number;
  colorScheme = {
    domain: [
      '#1a1c2c',
      '#5d275d',
      '#b13e53',
      '#ef7d57',
      '#ffcd75',
      '#a7f070',
      '#38b764',
      '#257179',
      '#29366f',
      '#3b5dc9',
      '#41a6f6',
      '#73eff7',
      '#f4f4f4',
      '#94b0c2',
      '#566c86',
      '#333c57',
    ]
  };

  public awardList = [
    {
      name: 1,
      label: 'کد تخفیف ۲۰ درصدی',
      value: 1
    },
    {
      name: 2,
      label: 'کد تخفیف ۱۰ درصدی',
      value: 1
    },
    {
      name: 3,
      label: 'ارسال رایگان',
      value: 1
    },
    {
      name: 4,
      label: 'کارت هدیه ۲۰ هزار تومانی',
      value: 1
    },
    {
      name: 5,
      label: 'چرخش دوباره',
      value: 1
    },
    {
      name: 6,
      label: 'کارت هدیه ۱۰۰ هزار تومانی',
      value: 1
    },
    {
      name: 7,
      label: 'کد تخفیف ۵ درصدی',
      value: 1
    },
    {
      name: 8,
      label: 'کارت هدیه ۵۰ هزار تومانی',
      value: 1
    },
    {
      name: 9,
      label: 'یکی بخر دوتا ببر',
      value: 1
    },
    {
      name: 10,
      label: 'کارت هدیه ۱۰۰ هزار تومانی',
      value: 1
    },
    {
      name: 11,
      label: 'پوچ',
      value: 1
    },
    {
      name: 12,
      label: 'کارت هدیه ۵۰ هزار تومانی',
      value: 1
    },
  ];

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.spiningDegree) {
      if (this.spiningDegree !== 0) {
        this.spin(this.spiningDegree);
      }
    }
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  ngAfterViewInit(): void {
    if (this.view === 'mobile') {
      const spinWheelMagnificationFactor = 1.4;
      const logoContainerMagnificationFactor = 0.4;
      const spinWheelContainerOffsetWidth = this.spinWheelContainer.nativeElement.offsetWidth;
      const logoContainer = spinWheelContainerOffsetWidth * logoContainerMagnificationFactor;
      const spinWheelWidth = spinWheelContainerOffsetWidth * spinWheelMagnificationFactor;
      this.spinWheelWidth = spinWheelWidth;
      this.leftNagativeMargin = -1 * (spinWheelWidth - spinWheelContainerOffsetWidth) / 2;
      this.topNagativeMargin = -1 * ((spinWheelWidth / 2) - (logoContainer / 2));
      this.spinWheelContainerHeight = this.spinWheelContainer.nativeElement.offsetWidth;
      setTimeout(() => {
        this.isSpinWheelContainerWidthCalculated = true;
      }, 10);
    }

    if (this.view === 'desktop') {
      const spinWheelMagnificationFactor = 1;
      const logoContainerMagnificationFactor = 0.4;
      const spinWheelContainerOffsetWidth = this.spinWheelContainer.nativeElement.offsetWidth;
      const logoContainer = spinWheelContainerOffsetWidth * logoContainerMagnificationFactor;
      const spinWheelWidth = spinWheelContainerOffsetWidth * spinWheelMagnificationFactor;
      this.spinWheelWidth = spinWheelWidth;
      this.leftNagativeMargin = 0;
      this.topNagativeMargin = 0;
      this.spinWheelContainerHeight = this.spinWheelContainer.nativeElement.offsetWidth;
      setTimeout(() => {
        this.isSpinWheelContainerWidthCalculated = true;
      }, 10);
    }
  }

  public spin(rotationDegree: number) {
    const temp = Math.floor(Math.random() * (100 - 80) + 80);
    this.rotationDegree = temp * 30 + 15;
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    this.isWheelKnobShaking = true;
    setTimeout(() => {
      this.isWheelKnobShaking = false;
    }, 3000);
  }
}

