import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { Userinterface } from 'src/app/userinterface';



@Component({
  selector: 'app-registrousuario',
  templateUrl: './registrousuario.component.html',
  styleUrls: ['./registrousuario.component.css']
})
export class RegistrousuarioComponent implements OnInit {

  today: number = Date.now();

  contar: number = 0 ;
  loading = false;
  success = false;

  myForm: FormGroup; 

  
  usuario: Userinterface = {      //init model,, or interface.....
    name:'',
    email: '',
    //telefon:'',
    password:''
    //fecha_registro: ''
  }

  constructor(private router: Router, private fb:FormBuilder, private http: HttpService) { 
    
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      //fecha: this.today,
     // hora: '',
      name: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$')
      ]],
      email: ['',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
        Validators.minLength(5),
      ]] ,   //this.fb.array([])
      password: ['', [
        Validators.required,
        //Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(6),
      ]],
      telefon: ['', [
        Validators.required,
        Validators.pattern('^[0-9 ]*$'),
        Validators.minLength(10),
      ]]
      //contador: '',
      
    });

    //this.addCorreo();
  }




    
onGuardarUsuario(data)
{
  //console.log("sendtoguardarsu usuario");
  //console.log(data);
  this.http.registraruser(data);  //go to http servies
}

  }


