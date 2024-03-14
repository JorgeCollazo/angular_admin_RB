import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environment/environment';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { User } from './users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }


  setHeadersAuth() {
    const token = localStorage.getItem('_token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return headers;
  }

  /*************************************** Users Section *****************************************/

  getUsers() {


  }

  saveUser(user: Partial<User>) {


  }

  deleteUser(user_id: number) {


  }

  editUser(user: Partial<User>) {

  }



  /*************************************** Roles Section *****************************************/

  

}
