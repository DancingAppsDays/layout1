import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
//import {HttpService} from '@angular/common/http';
//import {Observable} from  'rxjs/Observable';

import {map} from 'rxjs/operators';


@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {

  constructor(private _http:  HttpService ) { }

   //empsarray:any = [];
  ngOnInit(): void {

    //this._http.method1();´
    //this._http.getempleados().pipe(map(res => res.data)).subscribe(data =>
    this._http.getempleados().subscribe(result => 
      
          //how to acces data from result.data ????

      {//this.emps =result.json();
        this.emps = result;//data;
        /*data.forEach(item => {
          this.emps.next(item);
        });*/
        //this.emps = this.empsarray.json();
        console.log(this.emps);
      });
  }
  id: string='' ;
  created_at: string ='';
  name: string ='';
  puesto: string ='';
  emps: Object;    //was object 1
  result: any;
}
