import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAccessPoliciesComponent } from './role-access-policies.component';

describe('RoleAccessPoliciesComponent', () => {
  let component: RoleAccessPoliciesComponent;
  let fixture: ComponentFixture<RoleAccessPoliciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleAccessPoliciesComponent]
    });
    fixture = TestBed.createComponent(RoleAccessPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
