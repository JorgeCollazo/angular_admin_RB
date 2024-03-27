import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VendorNegotiation } from '../interfaces/vendor.interface';

@Component({
  selector: 'app-vendor-negotiations-dialog',
  templateUrl: './vendor-negotiations-dialog.component.html',
  styleUrls: ['./vendor-negotiations-dialog.component.scss']
})
export class VendorNegotiationsDialogComponent implements OnInit, OnDestroy {

  vendorNegociationDialogForm!: FormGroup;
  isEditing : boolean;

  constructor(
    public dialogRef: MatDialogRef<VendorNegotiationsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: VendorNegotiation, private fb: FormBuilder) {

      this.isEditing = !!data;
      this.vendorNegociationDialogForm = fb.group({
        name: [''],
        days_discount: [''],
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
