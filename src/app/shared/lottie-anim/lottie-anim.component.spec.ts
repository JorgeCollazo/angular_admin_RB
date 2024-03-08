import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieAnimComponent } from './lottie-anim.component';

describe('LottieAnimComponent', () => {
  let component: LottieAnimComponent;
  let fixture: ComponentFixture<LottieAnimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LottieAnimComponent]
    });
    fixture = TestBed.createComponent(LottieAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
