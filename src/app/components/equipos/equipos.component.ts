import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Constantes}  from 'src/app/constantes';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {

  equipForm: FormGroup;
 equipo: any;
 
 url: string = Constantes.capiURL + "/Maquina";
 urlxxx: string ="http://127.0.0.1:8000/api/Maquina";
  urlzzzz: string = "https://novatechdpw2.000webhostapp.com/api/Maquina";//"http://127.0.0.1:8000/api/Maquina/";
 urlyy: string = "http://realidad-virtual.amc-sc.mx/api/Maquina";
  constructor( private formBuilder: FormBuilder , private http :HttpClient , private router: Router, private router2: ActivatedRoute) {

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
    this.http.post(this.url,customerData,  { headers: { Authorization:localStorage.getItem('token') } }).subscribe(data =>
      {
        if(data['status'] == "success"){

        console.log(data);
        window.alert("Elemento agregado correctamente");
        this.router.navigate(['/']);
      }else{
        window.alert(data['data']);
        this.router.navigate(['/']);
      }/*
    }, 
      error =>{
        console.log(error);
         window.alert("Error al agregar:"+error);// ,consulte consola");*/
      }
      );
  }

  putequip(customerData,idd: number)
  {  
    console.log(idd); 
    
    //lara dont allow put/patch, better fix in store
    this.http.post(this.url+'/'+idd, customerData).subscribe(data =>
      {console.log(data);
        window.alert("Elemento modificado correctamente");
        this.router.navigate(['/']);
      }, 
      error =>{console.log(error);
        window.alert("Error al modificar, consulta la consola")}
      );
  }


  

}
