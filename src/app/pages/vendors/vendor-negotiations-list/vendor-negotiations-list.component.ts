import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { VendorNegotiation } from '../interfaces/vendor.interface';
import { MatDialog } from '@angular/material/dialog';
import { VendorNegotiationsDialogComponent } from '../vendor-negotiations-dialog/vendor-negotiations-dialog.component';
import { FormBuilder } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-negotiations-list',
  templateUrl: './vendor-negotiations-list.component.html',
  styleUrls: ['./vendor-negotiations-list.component.scss']
})
export class VendorNegotiationsListComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource: MatTableDataSource<VendorNegotiation>;
  displayedColumns: string[] = ['dias_descuento', 'porcentaje_descuento','actions'];

  vendors: VendorNegotiation[] = [
    { idNegotiation: 1, dias_descuento: 10, porcentaje_descuento: 7 },
    { idNegotiation: 2, dias_descuento: 15, porcentaje_descuento: 10 },
  ];

  previousUrl: string = '';

  constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router) {
    this.dataSource = new MatTableDataSource(this.vendors);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openVendorDialog(): void {
    const dialogRef = this.dialog.open(VendorNegotiationsDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  editVendor(vendor: VendorNegotiation) {}

  deleteVendor(vendor: VendorNegotiation) {}

  goBack() {
    this.previousUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('this.router event>>>>>>>', this.previousUrl.split('/'));
        let arrUrl = this.router.url;
      }
    });
    // console.log('this.router go back>>>>>>>', this.previousUrl.split('/'));
    this.router.navigate(['navigation/pages/vendor-list']);
  }
}
