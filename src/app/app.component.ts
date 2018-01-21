import { Response } from '@angular/http';
import { TrajetService } from './services/trajet.service';
import { AuthService } from './services/auth.service';
import Trajet from './models/trajet.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    //Private trajetService will be injected into the component by Angular Dependency Injector
    private authService: AuthService,
    private trajetService: TrajetService,
    
    //private panier: Trajet[]
  ) { }

  //Declaring the newTrajet Object and initilizing it
  public newTrajet: Trajet = new Trajet()

  //An Empty list for lesTrajets
  lesTrajets: Trajet[];
 

  ngOnInit(): void {

    //At component initialization the 
    this.trajetService.getTrajets()
      .subscribe(trajets => {
        //assign the lesTrajets property to the proper http response
        this.lesTrajets = trajets
        console.log(trajets)
      })
  }


  create() {
    this.trajetService.createTrajet(this.newTrajet)
      .subscribe((res) => {
        this.lesTrajets.push(res.data)
        this.newTrajet = new Trajet()
      })
  }

  connect() {
    this.authService.login()
  }

}