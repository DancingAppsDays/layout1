import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-turnoslist',
  templateUrl: './turnoslist.component.html',
  styleUrls: ['./turnoslist.component.css']
})
export class TurnoslistComponent implements OnInit {

  url: string = "https://novatechdpw2.000webhostapp.com/api/Turno/";//"http://127.0.0.1:8000/api/Turno/";
  eqs: any;
  querid: any;
  id: string = '';
  created_at: string = '';
  name: string = '';
  puesto: string = '';
  constructor(private http :HttpClient, private router2: ActivatedRoute) { }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params);
      console.log(params.id);
      this.querid=params;
     
      console.log(this.querid.id);

    })

    this.http.get(this.url+ this.querid.id).subscribe(result => 
         
      {//this.emps =result.json();
        this.eqs = result;//data;
       
        console.log(this.eqs);
      });


    }
  }


  /*
  getturnos(index:Number)
  { 
    this.http.get(this.url+index).subscribe(data =>
      {console.log(data);
        this.empForm.get("name").setValue(data)
        //this.empm.name =
        //this.empm = data;
        this.updateform(data);
      }, 
      error =>{console.log(error);},


      );
      //this.empForm.append("name", this.empForm.get('name').value);
    
     
  }*/


