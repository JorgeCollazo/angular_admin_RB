import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { TitleService } from 'src/app/shared/title.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-role-access-policies',
  templateUrl: './role-access-policies.component.html',
  styleUrls: ['./role-access-policies.component.scss']
})
export class RoleAccessPoliciesComponent implements OnInit {

  rolePoliciesDialogForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private titleService: TitleService, private location: Location) {
    this.rolePoliciesDialogForm = fb.group({
      activeChbx: false
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Administrar Permisos');
  }

  goBack() {
    this.location.back();
  }
}
