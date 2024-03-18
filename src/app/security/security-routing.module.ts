import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './users/user-list/user-list.component';
import { RoleListComponent } from './roles/role-list/role-list.component';
import { RoleAccessPoliciesComponent } from './roles/role-access-policies/role-access-policies.component';

const routes: Routes = [
  { path: 'user-list', component:UserListComponent },
  { path: 'role-list', component:RoleListComponent },
  { path: 'role-access-policies', component:RoleAccessPoliciesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SecurityRoutingModule { }
