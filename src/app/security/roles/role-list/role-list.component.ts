import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RoleDialogComponent } from '../role-dialog/role-dialog.component';
import { Subscription } from 'rxjs';
import { SecurityService } from '../../security.service';
import { Role } from '../interfaces/role.interface';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { TitleService } from 'src/app/shared/title.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss'],
})
export class RoleListComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['nombre', 'descripcion', 'status', 'actions'];
  dataSource: MatTableDataSource<Role>;
  isSpinnerLoading: boolean = false;


  fakeRoles: Role[] = [
    {nombre: 'Administrador', descripcion: 'Rol con maximo acceso en la aplicación', rol_id: 1, status: 1},
    {nombre: 'Cajero', descripcion: 'Rol con acceso a funcionalidades en la caja', rol_id: 2, status: 1},
    {nombre: 'Despachador', descripcion: 'Rol con acceso al despacho de productos', rol_id: 3, status: 0}
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getRoles$: Subscription = new Subscription();
  deleteRol$: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private securityService: SecurityService,
    private toastr: ToastrService,
    private titleService: TitleService
  ) {
    this.dataSource = new MatTableDataSource(this.fakeRoles);
  }

  ngOnInit(): void {
    this.titleService.setTitle('Administrar Roles');
  }

  ngOnDestroy(): void {}

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {

  }

  openRolesDialog(): void {

    const dialogRef = this.dialog.open(RoleDialogComponent, {
      disableClose: true,
    });

  }

  editRol(rol: Role) {

  }

  deleteRol(rol: Role) {

  }

  asignPermissions() {

  }
}
