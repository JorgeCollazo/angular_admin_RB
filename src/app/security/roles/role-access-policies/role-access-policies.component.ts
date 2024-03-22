import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-role-access-policies',
  templateUrl: './role-access-policies.component.html',
  styleUrls: ['./role-access-policies.component.scss']
})
export class RoleAccessPoliciesComponent {

  rolePoliciesDialogForm!: FormGroup;
  previousUrl: string = '';

  constructor(private fb: FormBuilder, private router: Router) {

    this.rolePoliciesDialogForm = fb.group({
      activeChbx: false
    });


  }

  goBack() {
    this.previousUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('this.router event>>>>>>>', this.previousUrl.split('/'));
        let arrUrl = this.router.url;
      }
    });
    // console.log('this.router go back>>>>>>>', this.previousUrl.split('/'));
    this.router.navigate(['navigation/security/role-list']);
  }
}
