import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { LoginObject } from 'src/app/models/login-object';
import { Session } from 'src/app/models/session';

import {Constantes}  from 'src/app/constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginsubmitted: Boolean = false;
  public error: {code: number, message: string} = null;

  public apirulxxx = "http://localhost:8000/api/Login";
  public apirul2xx= "http://localhost:8000/api/Logout";

  public apiuryyy = "https://novatechdpw2.000webhostapp.com/api/"
  public apiurz: string = "http://realidad-virtual.amc-sc.mx/api/";
  

  apiur = Constantes.capiURL;
  apirul = this.apiur+"Login";
  apirul2 = this.apiur+"Logout";

  public successdata: any;  //made it miself

  get ff(){
    return this.loginForm.controls;
  }


  constructor(private fb: FormBuilder, private router: Router, private http:HttpService, private htt:HttpClient) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      email: ['', Validators.required],  //was username....
      password: ['', Validators.required],
    })
  }

  onLogoutSubmit(){

    return this.htt.post(this.apirul2,this.loginsubmitted,{ headers: { Authorization:localStorage.getItem('token') } }).subscribe((res: Response) => {
      this.successdata = res;
      
      if(this.successdata['status'] == "success")
      {      window.alert("Usuario " + sessionStorage.name + " cerró sesion");
          localStorage.clear();
          sessionStorage.clear();
         //this.successdata['data']['name']+" has been Login successfully");
      }
      else  
      console.log(res);
      //window.alert("unknown erorr at lougout");

  });}


  onLoginSubmit(logindata) {
    this.loginsubmitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        window.alert('formulario no valido');
        return;
    }
    //True if all the fields are filled
    if(this.loginsubmitted)
    {
      //$("#loginmodal").modal("hide");       ????



      // Initialize Params Object
    var myFormData = new FormData();
    //const headers = new HttpHeaders();
    // Begin assigning parameters
    
   
    //headers.append('Access-Control-Allow-Origin', '*');
    
                //was username and failed?    //form data   FAILED????
    myFormData.append('email', this.loginForm.value.email);     //was email
    myFormData.append('password', this.loginForm.value.password);   //maybe append was emptyyyy!!!!

      //console.log(logindata);  //myform data wasempty???

    return this.htt.post(this.apirul            //'http://localhost/therichpost/public/api/login'
      , logindata).subscribe((res: Response) => {
        this.successdata = res;
        
        if(this.successdata['status'] == "success")
        {
            window.alert(this.successdata['data']['name']+" has been Login successfully");
            
            let token = res['data']['token'];  //res.data.acces.... not
            localStorage.setItem("token",'Bearer' +token);

            sessionStorage.setItem("name",this.successdata['data']['name']);
            sessionStorage.setItem("session","true");                       //experimental sess

            //console.log("Tooken = " + token);
            //window.alert(localStorage.getItem('token'));
            //this.htt.defaults.headers.common['Authorization'] = ' Bearer' +token;
            this.router.navigate(['/']);
            

            /*
          Swal.fire({
          title: 'Hurray!!',
          text:   this.successdata['data']['name']+" has been Login successfully",
          icon: 'success'
        });*/
        }else 
        if(this.successdata['status'] == "error")
        {
          window.alert(this.successdata['error']);//"Datos de login incorrectos");
         /* Swal.fire({
          title: 'OPPS!!',
          text:   "Login details are not coreect.",
          icon: 'error'
        });*/
        }else {
          window.alert("unknown BUG");
        }
      
        
    });
    }
  }




  public submitLogin(): void {


    this.loginsubmitted = true;
    this.error = null;
   /* if(this.loginForm.valid){

      
      this.http.login(new LoginObject(this.loginForm.value)).subscribe(
        data => { //this.correctLogin(data);
            console.log(data);
        },
        error => {//this.error = JSON.parse(error._body);
          console.log(error);
        }
      
      );
    }else { console.log("UNVALID form");
    window.alert("Registro no valido");
  }*/
  }
/*
  private correctLogin(data: Session){
    console.log("correctLogin");
    this.http.setCurrentSession(data);
    console.log("aftersetcurrentsession");
    this.router.navigate(['/home']);
  }*/
}
