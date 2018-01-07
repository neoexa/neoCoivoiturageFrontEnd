import Trajet from '../models/trajet.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';

//RxJS operator for mapping the observable
import 'rxjs/add/operator/map';

@Injectable()
export class TrajetService {

  // Récup du service Trajet du serveur via url API
  api_url = 'http://localhost:3000';
  trajetUrl = `${this.api_url}/api/trajets`;

  constructor(
    private http: HttpClient
  ) { }


  //Create Trajet, takes a Trajet Object
  createTrajet(trajet: Trajet): Observable<any>{
    //returns the observable of http post request 
    return this.http.post(`${this.trajetUrl}`, trajet);
  }

  //Read Trajet, takes no arguments
  getTrajets(): Observable<Trajet[]>{
    return this.http.get(this.trajetUrl)
    .map(res  => {
      //Maps the response object sent from the server
        
      return res["data"].docs as Trajet[];
    })
  }
  //Update Trajet, takes a Trajet Object as parameter
  editTrajet(trajet:Trajet){
    let editUrl = `${this.trajetUrl}`
    //returns the observable of http put request 
    return this.http.put(editUrl, trajet);
  }

  deleteTrajet(id:string):any{
    //Delete the object by the id
    let deleteUrl = `${this.trajetUrl}/${id}`
    return this.http.delete(deleteUrl)
    .map(res  => {
      return res;
    })
  }

  //Default Error handling method.
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }

}