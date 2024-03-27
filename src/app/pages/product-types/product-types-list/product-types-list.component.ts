import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/title.service';
import { ToastrService } from 'ngx-toastr';
import { ProductType } from '../interfaces/product-type.interface';
import { ProductTypesDialogComponent } from '../product-types-dialog/product-types-dialog.component';

@Component({
  selector: 'app-product-types-list',
  templateUrl: './product-types-list.component.html',
  styleUrls: ['./product-types-list.component.scss']
})
export class ProductTypesListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['description', 'price_perc', 'actions'];
  dataSource: MatTableDataSource<ProductType>;
  getProductos$: Subscription = new Subscription();
  deleteProducto$: Subscription = new Subscription();
  isSpinnerLoading: boolean = false;

  types: ProductType[] = [
    {product_Id: 1, description: 'Indefinido', price_perc: 0.00000},
    {product_Id: 2, description: 'Margen del 50%', price_perc: 0.50505},
    {product_Id: 3, description: 'Margen del 0.769230', price_perc: 0.76923},
    {product_Id: 4, description: 'Viveres', price_perc: 0.84000},
    {product_Id: 5, description: 'Viveres al 19%', price_perc: 0.84034}
  ]

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private pagesService: PagesService,
    public router: Router,
    private titleService: TitleService,
    private toastr: ToastrService) {

    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getProductTypes();
    this.titleService.setTitle('Administrar Tipos de Productos');
    this.dataSource = new MatTableDataSource(this.types);
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
    const dialogRef = this.dialog.open(ProductTypesDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProductTypes();
    });
  }

  getProductTypes() {

  }

  editProductType(product: ProductType) {

  }

  deleteProductType(product: ProductType) {


  }
}
