import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipForm: FormGroup;

  //url: string = "http://127.0.0.1:8000/api/Empleado/";   
  url2: string = "http://127.0.0.1:8000/api/Maquina/";

  constructor( private formBuilder: FormBuilder , private http :HttpClient ) {

    this.equipForm = this.formBuilder.group({nombre: '', puesto: ''})

   }

  ngOnInit(): void {
  }

  onSubmit(customerData)
    {console.log("submitted");
    this.equipForm.reset();
     console.log(customerData);
  this.postequips(customerData);
//this.getEmpleado(2);//justworked
     //this.getmachinas();
  }

  postequips(customerData)
  {
    this.http.post(this.url2,customerData).subscribe(data =>
      {console.log(data);}, 
      error =>{console.log(error);}
      );
  }

}
