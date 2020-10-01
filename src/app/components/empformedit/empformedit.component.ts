import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empformedit',
  templateUrl: './empformedit.component.html',
  styleUrls: ['./empformedit.component.css']
})
export class EmpformeditComponent implements OnInit {
  empForm;

  empm: Empleado ={
    name:'',
    puesto: ''

  }
  //name: string;       //form builder didnt need thiss.....better use model to form
  //puesto: string; //used in {{}} interpolation of template

  url: string = "http://127.0.0.1:8000/api/Empleado/";   
  url2: string = "http://127.0.0.1:8000/api/Maquina/";
  equipo:any;

  constructor(    private formBuilder: FormBuilder , private http :HttpClient, private router2: ActivatedRoute ) {
    this.empForm = this.formBuilder.group({nombre: '', puesto: ''})
    //console.log("after firn build");

   }
  ngOnInit(): void {
    

      this.router2.queryParams.subscribe(async (params:Params)=>{
        console.log(params)
        console.log(params.id)
        this.equipo=params
      })
  }



  onSubmit(customerData)
  {console.log("submitted");
  this.empForm.reset();
   
this.postempleado(customerData);

}
postempleado(customerData)
  {
    this.http.post(this.url,customerData).subscribe(data =>
      {console.log(data);}, 
      error =>{console.log(error);}
      );
  }

  getEmpleado(index)
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

     
  }

  updateform(data: Object)
  {

      //this.empm.name = data.valueOf
    //this.empForm.setValue({
//name: data.valueOf()

    //});
      //let empForm = {
        //"name": data.name
      //}
    

  }
}
