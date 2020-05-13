import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinWheelComponent } from './spin-wheel.component';

describe('SpinWheelComponent', () => {
  let component: SpinWheelComponent;
  let fixture: ComponentFixture<SpinWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
