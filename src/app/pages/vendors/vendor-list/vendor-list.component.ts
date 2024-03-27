import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Vendor } from '../interfaces/vendor.interface';
import { MatDialog } from '@angular/material/dialog';
import { VendorDialogComponent } from '../vendor-dialog/vendor-dialog.component';
import { VendorAdditionalInfoDialogComponent } from '../vendor-additional-info-dialog/vendor-additional-info-dialog.component';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit, AfterViewInit, OnDestroy {

  dataSource: MatTableDataSource<Vendor>;
  displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'ruc', 'dv', 'status', 'actions'];


  vendors: Vendor[] = [
    {
      name: 'Estrella Azul', address: 'Ave Cincuentenario #315', phone: 89755465, ruc: '1-888-777', dv: 23, email: 'css@gmail.com', status: 1,
      vendorTypeDescription: 'Nacional', classificationDescription: 'Persona Juridica', fax: '1-888', postOffice: '10400', innerAccount: 55,
      inChargeName: 'Alberto', inChargePhone: '18882354', termCredit: 5, currentBalance: 4293, lastDateCurrentBalance: new Date().toLocaleString(), vendorRetentionITBMS: 'Proveedor',
      vendorTypeID: 1, classificationID: 1
    },
    {
      name: 'Bonlac', address: 'Ave 12 de Octubre #320', phone: 6688785269, ruc: '8-222-555', dv: 12, email: 'aaa@gmail.com', status: 0,
      vendorTypeDescription: 'Extranjero', classificationDescription: 'Persona Juridica', fax: '1-888', postOffice: '10400', innerAccount: 55,
      inChargeName: 'Alberto', inChargePhone: '18882354', termCredit: 5, currentBalance: 4293, lastDateCurrentBalance: new Date().toLocaleString(), vendorRetentionITBMS: 'Proveedor',
      vendorTypeID: 1, classificationID: 1
    },
  ];

  constructor(public dialog: MatDialog, private titleService: TitleService) {
    this.dataSource = new MatTableDataSource(this.vendors);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Administrar Proveedores');
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

  showAdditionalInfo(vendor: Vendor) {
    const dialogRef = this.dialog.open(VendorAdditionalInfoDialogComponent, {
      data: vendor,
      disableClose: true,
    });
  }
}
