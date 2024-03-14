import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { PagesService } from '../../pages.service';
import { Product } from '../interfaces/product.interface';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})

export class ProductDialogComponent implements OnInit, OnDestroy {

  productDialogForm!: FormGroup;
  disableClose: boolean = false;
  userID: number;
  isSelectDisabled: boolean = true;
  getLicenses$: Subscription = new Subscription();
  getServices$: Subscription = new Subscription();
  getDevices$: Subscription = new Subscription();
  editProduct$: Subscription = new Subscription();
  isEditing : boolean;
  arrServicesIDs: number[] = [];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private fb: FormBuilder,
    private pagesService: PagesService,
    private toastr: ToastrService
  ) {

    this.isEditing = !!data
    if(this.isEditing)
      this.arrServicesIDs = data.services_Id.split(',').map(Number);


    this.userID = Number(localStorage.getItem('_userID'));
    this.productDialogForm = fb.group({
      name: [data ? data.nombre : '', Validators.required],
      description: [data ? data.descripcion : ''],
      license_id: [data ? data.lic_Id : null, Validators.required],
      servicio_Id: [data ? this.arrServicesIDs : null],
      device_id: [data ? data.dispositivo_Id : null],
      activeChbx: [data ? data.sw_Activo : false]
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.getLicenses$.unsubscribe();
    this.getServices$.unsubscribe();
    this.getDevices$.unsubscribe();
  }

  onSaveClick(): void {


  }

  editProduct() {

    
  }

  close() {
    this.dialogRef.close({isRefreshing: false});
  }
}
