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

  
  constructor(private _http:  HttpService,private router:Router ) { }

   //empsarray:any = [];
  ngOnInit(): void {

    

    
    this._http.getempleados().subscribe(result => 
      
        

      {//this.emps =result.json();
        this.emps = result;//data;
        /*data.forEach(item => {
          this.emps.next(item);
        });*/
        //this.emps = this.empsarray.json();
        console.log(this.emps);
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


  id: string='' ;
  created_at: string ='';
  name: string ='';
  puesto: string ='';
  emps: Object;    //was object 1
  result: any;
}
