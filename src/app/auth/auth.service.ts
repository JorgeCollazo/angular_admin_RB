import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { AuthData } from './interface/authData.interface';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Permission } from './interface/permissions.interface';
import { INavbarData } from '../layout/sidenav/inavbar.interface';

const BACKEND_URL = environment.apiURL + '/Auth/';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private token: string = '';
  private userID: number | null = null;
  private rolID: number = -1;
  private isAuthenticated: boolean = false;
  private authStatusSub = new Subject<boolean>();
  private menu$ = new Subject<Permission[]>();

  private transformedMenu: INavbarData[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getUserID() {
    return this.userID;
  }

  getUserRolID() {
    return this.rolID;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

  getMenuSub() {
    return this.menu$.asObservable();
  }

  getAuthStatusSub() {
    return this.authStatusSub.asObservable();
  }

  loginUser(email: string, password: string) {
    const authData: AuthData = { User: email, Pwd: password};
    this.router.navigate(['/navigation']);
  }

  logoutUser() {
    this.token = '';
    this.isAuthenticated = false;
    this.authStatusSub.next(false);
    this.router.navigate(['/login']);
    this.clearAuthData();
    this.userID = null;
  }

  clearAuthData() {
    localStorage.removeItem('_token');
    localStorage.removeItem('_userID');
    localStorage.removeItem('_menu');
  }

  saveAuthData(token: string, userID: string, rolID: string) {
    localStorage.setItem('_token', token);
    localStorage.setItem('_userID', userID);
    localStorage.setItem('_rolID', rolID);
  }

  saveMenu(menu: INavbarData) {
    localStorage.setItem('_menu', JSON.stringify(menu));
  }

}
