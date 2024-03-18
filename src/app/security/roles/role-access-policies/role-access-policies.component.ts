import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-access-policies',
  templateUrl: './role-access-policies.component.html',
  styleUrls: ['./role-access-policies.component.scss']
})
export class RoleAccessPoliciesComponent {

  rolePoliciesDialogForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.rolePoliciesDialogForm = fb.group({
      activeChbx: false
    });
  }

  goBack() {
    this.router.navigate(['navigation/security/role-list']);
  }
}
