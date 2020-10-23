import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
//import {HttpService} from '@angular/common/http';
//import {Observable} from  'rxjs/Observable';

import {map} from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  sucessdata:any;
  //emps:any;
  
  constructor(private _http:  HttpService,private router:Router ) { }

   //empsarray:any = [];
  ngOnInit(): void {

    //const token: string = localStorage.getItem('Token');
    //window.alert(token);
    
    this._http.getempleados().subscribe(
      
     

       
      result => 
      
        

      { //this.sucessdata = result;

        //if(this.sucessdata['status'] == "success"){

     // window.alert("Datos recuperados  con éxito con sesion");
        
        //this.emps =result.json();
        this.emps = result;//this.sucessdata;//data;
        /*data.forEach(item => {
          this.emps.next(item);
        });*/
        //this.emps = this.empsarray.json();
        console.log(this.emps);//}
        //else  window.alert(this.sucessdata['data'] + "->  Error sesion no iniciada");
      });
  }
  editEmps(equipo: any){
    console.log(equipo)
    this.router.navigate(['empform'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre,
        puesto:equipo.puesto
      }
    })

  }

  gototurnos(equipo:any){
    this.router.navigate(['turnosform'],{
      queryParams:{
        id:equipo.id,
        nombre:equipo.nombre
      }

  })
}


  id: string='' ;
  created_at: string ='';
  name: string ='';
  puesto: string ='';
  emps: Object;    //was object 1
  result: any;
}
