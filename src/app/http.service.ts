import { HttpClient } from '@angular/common/http';  //autoimported
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url2: string = "http://127.0.0.1:8000/api/Empleado/";
  constructor(private http: HttpClient) { }

  method1()
  {
      return console.log('method1formservice');
  }

  getempleados()
  {
   //return this.http.get('https://api.openbrewerydb.org/breweries');
    //return this.http.get('localhost:8000/api/Empleado');
    //return this.http.get('127.0.0.1:8000/api/Maquina');
    return this.http.get(this.url2);
  }
  
}
