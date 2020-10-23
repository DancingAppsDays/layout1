import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipForm: FormGroup;
 equipo: any;
 
  url: string = "https://novatechdpw2.000webhostapp.com/api/Maquina/";//"http://127.0.0.1:8000/api/Maquina/";

  constructor( private formBuilder: FormBuilder , private http :HttpClient , private router2: ActivatedRoute) {

    this.equipForm = this.formBuilder.group({id:'',nombre: '', puesto: ''})

   }

  ngOnInit(): void {

    this.router2.queryParams.subscribe(async (params:Params)=>{
      console.log(params)
      console.log(params.id)
      this.equipo=params
      this.equipForm.get('id').setValue(this.equipo.id)
      this.equipForm.get('nombre').setValue(this.equipo.nombre)
      this.equipForm.get('puesto').setValue(this.equipo.puesto)
      console.log(this.equipo.id)
    })

  }
  onSubmit(customerData)
  {console.log("submitted");
  this.equipForm.reset();
                                      //if this equipo not come from list, new, else patch
  if(this.equipo.id !=undefined){     
      console.log("not null patch no post");
      this.putequip(customerData,Number(this.equipo.id))
  }else{
    this.postequip(customerData);
  }
  //this.equipo.id =undefined;         //to prevent over overwrite??
}
postequip(customerData)
  {
    this.http.post(this.url,customerData).subscribe(data =>
      {console.log(data);
        window.alert("Elemento agregado correctamente")}, 
      error =>{console.log(error);
        window.alert("Error,consulte consola")}
      );
  }

  putequip(customerData,idd: number)
  {  
    console.log(idd); 
    
    //lara dont allow put/patch, better fix in store
    this.http.post(this.url+idd, customerData).subscribe(data =>
      {console.log(data);
        window.alert("Elemento modificado correctamente")}, 
      error =>{console.log(error);
        window.alert("Error,consulte consola")}
      );
  }


  

}
