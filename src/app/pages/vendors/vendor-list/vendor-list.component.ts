import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vendor } from '../interfaces/proveedor.interface';
import { MatDialog } from '@angular/material/dialog';
import { VendorDialogComponent } from '../vendor-dialog/vendor-dialog.component';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent  implements OnInit, AfterViewInit, OnDestroy {

  dataSource: MatTableDataSource<Vendor>;
  displayedColumns: string[] = ['name', 'address', 'phone', 'ruc', 'status', 'actions'];
  
  vendors: Vendor[] = [
    {name: 'Estrella Azul', address: 'Ave Cincuentenario #315', phone: 89755465, ruc: '1-888-777', status: 1},
    {name: 'Bonlac', address: 'Ave 12 de Octubre #320', phone: 6688785269, ruc: '8-222-555', status:0}
  ];
  
  constructor(public dialog: MatDialog) {
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
    const dialogRef = this.dialog.open(VendorDialogComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  editVendor(vendor: Vendor) {}

  deleteVendor(vendor: Vendor) {}
}
