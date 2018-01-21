//import Trajet from '../models/trajet.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  // Récup du service Auth du serveur via url API
  api_url = 'http://localhost:3000';
  loginAuthUrl = `${this.api_url}/api/auth/login`;
  logoutAuthUrl = `${this.api_url}/api/auth/logout`;

  constructor(
    private http: HttpClient
  ) {}


  //login
  login(): Observable<any>{
    console.log("hmm");
    //returns the observable of http post request 
    return this.http.get(`${this.loginAuthUrl}`)
    .map(res  => {
        //Maps the response object sent from the server
          
        return res["data"].docs as any;
      })
  }

  logout(): Observable<any>{
    //returns the observable of http post request 
    return this.http.get(`${this.logoutAuthUrl}`,);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred auth service', error); 
    return Promise.reject(error.message || error);
  }
}