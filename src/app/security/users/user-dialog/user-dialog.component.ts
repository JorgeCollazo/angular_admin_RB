import { Component, Inject, OnDestroy, OnInit, isDevMode } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from '../../roles/interfaces/role.interface';
import { SecurityService } from '../../security.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from '../interfaces/user.interface';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})

export class UserDialogComponent implements OnInit, OnDestroy {

  userDialogForm: FormGroup;
  roles: Role[] = [];
  private roles$: Subscription = new Subscription();
  private saveUser$: Subscription = new Subscription();
  private editUser$: Subscription = new Subscription();
  isEditing: boolean;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private fb: FormBuilder,
    private securityService: SecurityService,
    private toastr: ToastrService
  ) {
    this.isEditing = !!data;
    this.userDialogForm = fb.group({
      email: [data ? data.email : null, !this.isEditing ? [Validators.required, Validators.email] : null],
      password: [data ? data.contrasena : null, !this.isEditing ? [Validators.required] : null],
      rol_id: [data ? data.rol_id : null, [Validators.required]],
      cedula: [data ? data.cedula : null],
      activeChbx: [data ? data.status : false],
      adminChbx: [data ? data.is_admin : true],
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }

  saveUser(): void {

  }

  editUser() {


  }

  close() {
    this.dialogRef.close();
  }

}
