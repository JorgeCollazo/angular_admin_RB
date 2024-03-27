import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PagesService } from '../../pages.service';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/shared/title.service';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BrandsDialogComponent } from '../brands-dialog/brands-dialog.component';
import { Brand } from '../interfaces/brand.interface';
import { FormGroup } from '@angular/forms';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.scss']
})
export class BrandsListComponent  implements OnInit, AfterViewInit, OnDestroy {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [{name: 'Bonlac'}, {name: 'Estrella Azul'}, {name: 'Bimbo'}];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  edit(fruit: Fruit, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.fruits.indexOf(fruit);
    if (index >= 0) {
      this.fruits[index].name = value;
    }
  }
  displayedColumns: string[] = ['name', 'description', 'lic_nombre', 'status', 'actions'];
  dataSource: MatTableDataSource<Brand>;
  getProductos$: Subscription = new Subscription();
  deleteProducto$: Subscription = new Subscription();
  isSpinnerLoading: boolean = false;
  productDialogForm!: FormGroup;

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
    this.getProducts();
    this.titleService.setTitle('Administrar Marcas');
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
    const dialogRef = this.dialog.open(BrandsDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getProducts();
    });
  }

  getProducts() {

  }

  deleteProduct(product: Brand) {

  }

  editProduct(product: Brand) {


  }

}
