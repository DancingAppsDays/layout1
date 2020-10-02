import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-listequipos',
  templateUrl: './listequipos.component.html',
  styleUrls: ['./listequipos.component.css']
})
export class ListequiposComponent implements OnInit {

  eqs: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';

  constructor(private _http: HttpService,private router:Router) {

  }

  ngOnInit(): void {

    this._http.getequips().subscribe(data => {
      this.eqs = data;
    })
  }

  editEquipo(equipo: any){
    console.log(equipo)
    this.router.navigate(['equipos'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre,
        puesto:equipo.puesto
      }
    })

  }

  

}
