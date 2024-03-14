import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ToastrService } from 'ngx-toastr';
import { Product, ResponseProducto } from '../interfaces/product.interface';
import { Subscription } from 'rxjs';
import { PagesService } from '../../pages.service';
import {MatTooltipModule} from '@angular/material/tooltip';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})

export class ProductListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['name', 'description', 'lic_nombre', 'status', 'actions'];
  dataSource: MatTableDataSource<Product>;
  getProductos$: Subscription = new Subscription();
  deleteProducto$: Subscription = new Subscription();
  isSpinnerLoading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('not_found_template')
  not_found_template!: TemplateRef<any>;

  constructor(
    public dialog: MatDialog,
    private pagesService: PagesService,
    public router: Router,
    private toastr: ToastrService) {

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.getProductos$.unsubscribe();
    this.deleteProducto$.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openProductDialog(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  getProducts() {

  }

  deleteProduct(product: Product) {

  }

  editProduct(product: Product) {


  }

}
