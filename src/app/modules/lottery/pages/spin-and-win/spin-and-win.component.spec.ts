import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinAndWinComponent } from './spin-and-win.component';

describe('SpinAndWinComponent', () => {
  let component: SpinAndWinComponent;
  let fixture: ComponentFixture<SpinAndWinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinAndWinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinAndWinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
