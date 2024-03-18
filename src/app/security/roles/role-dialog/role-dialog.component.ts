import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Role } from '../interfaces/role.interface';
import { SecurityService } from '../../security.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss'],
})
export class RoleDialogComponent implements OnInit, OnDestroy{

  roleDialogForm!: FormGroup;
  isEditing: boolean = false;
  saveRol$: Subscription = new Subscription();
  editRol$: Subscription = new Subscription();

  constructor(
    public dialogRef: MatDialogRef<RoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Role,
    private fb: FormBuilder,
    private securityService: SecurityService,
    private toastr: ToastrService
  ) {
    this.isEditing = !!data;
    this.roleDialogForm = fb.group({
      name: [data ? data.nombre : ''],
      descripcion: [data ? data.descripcion : ''],
      activeChbx: [data ? data.status : false],
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.editRol$.unsubscribe();
    this.saveRol$.unsubscribe();
  }

  saveRol(): void {

  }

  editRol() {
  }

  close() {
    this.dialogRef.close();
  }

}
