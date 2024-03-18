import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';
import { SecurityService } from '../../security.service';
import { User } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedColumns: string[] = ['email', 'cedula', 'rol', 'estado', 'actions'];
  dataSource: MatTableDataSource<User>;

  fakeUsers: User[] = [
    {usuario_id: 1, is_admin: false, cedula: '8-888-111', contrasena: 'pass123', email: 'admin@gmail.com', rol_id: 'Admin', status: 1},
    {usuario_id: 2, is_admin: false, cedula: '8-777-111', contrasena: 'pass123', email: 'cajero@gmail.com', rol_id: 'Cajero', status: 1},
    {usuario_id: 3, is_admin: false, cedula: '8-666-111', contrasena: 'pass123', email: 'despachador@gmail.com', rol_id: 'Despachador', status: 0},
  ];

  private users$: Subscription = new Subscription();
  private deleteUsuario$: Subscription = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog,
    private securityService: SecurityService,
    private toastr: ToastrService
    ) {
    this.dataSource = new MatTableDataSource(this.fakeUsers);
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    this.users$.unsubscribe();
    this.deleteUsuario$.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openUserDialog(): void {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      disableClose: true
    });
  }

  deleteUsuario(usuario: User): void {


  }

  editUser(user: User): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = user;

    const dialogRefEdit = this.dialog.open(UserDialogComponent, dialogConfig);

  }
}
