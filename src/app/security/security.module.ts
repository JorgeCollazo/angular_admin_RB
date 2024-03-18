import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { UserDialogComponent } from './users/user-dialog/user-dialog.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleDialogComponent } from './roles/role-dialog/role-dialog.component';
import { RoleAccessPoliciesComponent } from './roles/role-access-policies/role-access-policies.component';

@NgModule({
  declarations: [

    UserDialogComponent,
       UserListComponent,
       RoleListComponent,
       RoleDialogComponent,
       RoleAccessPoliciesComponent,
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    SecurityRoutingModule,
  ]
})
export class SecurityModule { }


