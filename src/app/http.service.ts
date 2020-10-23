import { HttpClient } from '@angular/common/http';  //autoimported
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

//import 'rxjs/add/operator/map';       //cmooonJS or AMD depencdencias cause optimization bailouts...
import {map} from "rxjs/operators";

import { LoginObject } from './models/login-object';
import { Session } from './models/session';
import { Userinterface } from './userinterface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

backen: string = "https://novatechdpw2.000webhostapp.com/api/";
//local
exbacken: string = "http://127.0.0.1:8000/api/";

   // apiurl: string = "https://novatechdpw2.000webhostapp.com/api/";
  url2: string =  this.backen + "Empleado/";
  url3: string =  this.backen + "Maquina/";

basePath: string  = this.backen + "authenticate/"


private localStorageService;
private currentSession : Session = null;


sucessdata: any;    //for auth registro
submitted = false;


  constructor(private http: HttpClient, private router: Router) { }

  method1()
  {
      return console.log('method1formservice');
  }

  getempleados()
  {
   //return this.http.get('https://api.openbrewerydb.org/breweries');
    //return this.http.get('localhost:8000/api/Empleado');
    //return this.http.get('127.0.0.1:8000/api/Maquina');
    return this.http.get(this.url2);//,{ headers: { Authorization:localStorage.getItem('Token') } });// +"Empleado/");//this.url2);
  }
  getequips()
  {                                             //data, {header}                                  //jwtTolen
    return this.http.get(this.backen +"Maquina/",{ headers: { Authorization:localStorage.getItem('Token') } })


  }

  
  registraruser(data)
  {
    return this.http.post(this.backen + "Registro/", data).subscribe(

        (res:Response) =>{

          this.sucessdata = res;
          if(this.sucessdata['status'] == "success"){

        window.alert("Usuario registrado con éxito")

                let token = res['data']['name'];  //res.data.acces.... not
                localStorage.setItem("Token",'Bearer' +token);

                console.log("TOken = " + token);
              //this.htt.defaults.headers.common['Authorization'] = ' Bearer' +token;
              this.router.navigate(['/']);



          }else console.log("Registro fallo!" + this.sucessdata)
        }


    );

  }














/*


  login(loginObj: LoginObject): Observable<Session> {


      //return this.http.get()

      return this.http.get(this.basePath + 'login');
    
    //return this.http.post(this.basePath + 'login', loginObj).map( this.extractData);
    }
   
    
    logout(): Observable<Boolean> {
    return this.http.post(this.basePath + 'logout', {}).map(this.extractData);
    }
   
    private extractData(res: Response) {
    let body = res.json();
    return body;
    }


    //storage service
    setCurrentSession(session: Session): void {
      this.currentSession = session;
      this.localStorageService.setItem('currentUser', JSON.stringify(session));
    }
  
    loadSessionData(): Session{
      var sessionStr = this.localStorageService.getItem('currentUser');
      return (sessionStr) ? <Session> JSON.parse(sessionStr) : null;
    }
  
    getCurrentSession(): Session {
      return this.currentSession;
    }
  
    removeCurrentSession(): void {
      this.localStorageService.removeItem('currentUser');
      this.currentSession = null;
    }
  
    getCurrentUser(): Userinterface {
      var session: Session = this.getCurrentSession();
      return (session && session.user) ? session.user : null;
    };
  
    isAuthenticated(): boolean {
      return (this.getCurrentToken() != null) ? true : false;
    };
  
    getCurrentToken(): string {
      var session = this.getCurrentSession();
      return (session && session.token) ? session.token : null;
    };
  
    logout(): void{
      this.removeCurrentSession();
      this.router.navigate(['/login']);
    }
*/
}
