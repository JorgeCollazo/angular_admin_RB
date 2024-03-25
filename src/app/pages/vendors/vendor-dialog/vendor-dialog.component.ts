import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Vendor, VendorLegalClassification, VendorType } from '../interfaces/vendor.interface';

@Component({
  selector: 'app-vendor-dialog',
  templateUrl: './vendor-dialog.component.html',
  styleUrls: ['./vendor-dialog.component.scss']
})
export class VendorDialogComponent implements OnInit, OnDestroy {

  vendorDialogForm!: FormGroup;
  isEditing : boolean;
  vendorTypes: VendorType[];
  vendorLegalClassifications: VendorLegalClassification[];


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

      this.vendorTypes = [
       {name: 'Extranjero', value: 0},
       {name: 'Local', value: 1},
      ]

      this.vendorLegalClassifications = [
       {name: 'Persona Natural', value: 0},
       {name: 'Persona Jurídica', value: 1},
      ]
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
