import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vendor } from '../interfaces/proveedor.interface';

@Component({
  selector: 'app-vendor-dialog',
  templateUrl: './vendor-dialog.component.html',
  styleUrls: ['./vendor-dialog.component.scss']
})
export class VendorDialogComponent implements OnInit, OnDestroy {

  vendorDialogForm!: FormGroup;
  isEditing : boolean;

  constructor(
    public dialogRef: MatDialogRef<VendorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Vendor, private fb: FormBuilder,) {

      this.isEditing = !!data;
      this.vendorDialogForm = fb.group({
        name: [''],
        description: [''],
        phone: [''],
        servicio_Id: [null],
        activeChbx: [false]
      });

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  onSaveClick(): void {

  }

  editProduct() {

  }

  close() {
    this.dialogRef.close({isRefreshing: false});
  }


}
