import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  apiurl: string = "https://novatechdpw2.000webhostapp.com/api/Empleado/";
  //url: string = "http://127.0.0.1:8000/api/Empleado/";   
  //url2: string = "http://127.0.0.1:8000/api/Maquina/";
  equipo:any;

  constructor(    private formBuilder: FormBuilder , private http :HttpClient,
     private router2: ActivatedRoute, /*private alertService: AlertService*/ ) {   }
  
  
  
  ngOnInit(): void {
    
    this.empForm = this.formBuilder.group({
      id: '',nombre:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
       puesto: ''})

      this.router2.queryParams.subscribe(async (params:Params)=>{
        console.log(params)
        console.log(params.id)
        this.equipo=params
        this.empForm.get('id').setValue(this.equipo.id)
        this.empForm.get('nombre').setValue(this.equipo.nombre)
        this.empForm.get('puesto').setValue(this.equipo.puesto)
        console.log(this.equipo.id)
      })
  }



  onSubmit(customerData)
  {console.log("submitted");
  this.empForm.reset();
                                      //if this equipo not come from list, new, else patch
  if(this.equipo.id !=undefined){     
      console.log("not null patch no post");
      this.putempleado(customerData,Number(this.equipo.id))
  }else{
    this.postempleado(customerData);
  }
  //this.equipo.id =undefined;         //to prevent over overwrite??
}
postempleado(customerData)
  {
    this.http.post(this.apiurl,customerData).subscribe(data =>
      {console.log(data);
      window.alert("Agregado correctamente")}, 
      error =>{console.log(error);
        window.alert("Error, consulte la consola")}
      );
  }

  putempleado(customerData,idd: number)
  {  
    console.log(idd); 
    
    //lara dont allow put/patch, better fix in store
    this.http.post(this.apiurl+idd, customerData).subscribe(data =>
      {console.log(data);
        window.alert("Elemento modificado correctamente")}, 
      error =>{console.log(error);}
      );
  }

  getEmpleado(index)
  { 
    this.http.get(this.apiurl+index).subscribe(data =>
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

  successalert(message: string){
    //this.alertService.success("elemento agregado con éxito");
  }
}
