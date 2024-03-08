import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SecurityService } from '../security/security.service';
import { Observable, catchError, shareReplay, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor(private http: HttpClient, private securityService: SecurityService ) { }


/***************** Companies *****************/





}
