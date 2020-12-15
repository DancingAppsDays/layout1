import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
//import {HttpService} from '@angular/common/http';
//import {Observable} from  'rxjs/Observable';

import {map} from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Constantes } from 'src/app/constantes';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

   token: string;
  sucessdata:any;
  //emps:any;
  term: string = '';
  p: number = 1;
  items = [];       //pagination jw
    pageOfItems: Array<any>;
    onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
  }


  
  constructor(private _http:  HttpClient,private router:Router ) { }

   //empsarray:any = [];
  ngOnInit(): void {

    // = localStorage.getItem('token');
    //window.alert(token
    //if(localStorage.getItem('token') === null)
    //{}else
     //this.token = localStorage.getItem('token');
    //window.alert(token);
    
    this._http.get(Constantes.capiURL).subscribe(
      
     

       
      result => 
      
        

      { 
        //
        this.sucessdata = result;
        if(this.sucessdata['status'] == "success"){

     // window.alert("Datos recuperados  con éxito con sesion");
        
        //this.emps =result.json();
        this.emps = this.sucessdata['dat'];         // result;//this.sucessdata;//data;
        
        //this.emps.push(data);  
          this.items.push(this.emps);
        
        /*data.forEach(item => {
          this.emps.next(item);
        });*/
        //this.emps = this.empsarray.json();
        console.log(this.items);//}}
       
      }else {
        window.alert(this.sucessdata['data'] + '    No autorizado');
        this.router.navigate(['/']);
        //window.alert("Datos no pudieron ser recuperados");

      }
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

  gotoreportes(equipo:any){
    this.router.navigate(['reportes'],{
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
