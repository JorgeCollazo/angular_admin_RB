import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-filtering-dialog',
  templateUrl: './product-filtering-dialog.component.html',
  styleUrls: ['./product-filtering-dialog.component.scss']
})
export class ProductFilteringDialogComponent {

  productFilteringDialogForm!: FormGroup;

  onSaveClick() {}

  constructor(private fb: FormBuilder) {

    this.productFilteringDialogForm = fb.group({
      name: [''],
      description: [''],
      license_id: [''],
    });
  }
}
