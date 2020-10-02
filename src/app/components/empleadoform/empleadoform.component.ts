import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormBuilder} from '@angular/forms';    


@Component({
  selector: 'app-empleadoform',
  templateUrl: './empleadoform.component.html',
  styleUrls: ['./empleadoform.component.css']
})
export class EmpleadoformComponent implements OnInit {

  empForm;//formgroup
  //name: string;       //form builder didnt need thiss.....better use model to form
  //puesto: string; //used in {{}} interpolation of template

  url: string = "http://127.0.0.1:8000/api/Empleado/";   
  url2: string = "http://127.0.0.1:8000/api/Maquina/";


  constructor(    private formBuilder: FormBuilder , private http :HttpClient ) {
    this.empForm = this.formBuilder.group({nombre: '', puesto: ''})
    //console.log("after firn build");

   }

  ngOnInit(): void {

    //console.warn('yo order');
      //this.stuff = this.cart.clearCart();
  }
  onSubmit(customerData)
    {//console.log("submitted");
    this.empForm.reset();
     //console.log(customerData);
     
     //check if edit or new
      //if(this.) not here more like in edit


  this.postempleado(customerData);
//this.getEmpleado(2);//justworked
     //this.getmachinas();
  }


   getmachinas()
   {
    this.http.get(this.url2,/*{headers:headers}*/).subscribe(data =>
      {console.log(data);}, 
      error =>{console.log(error);}
      );

   }
  
  getEmpleado(index)
  { //chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security THIS GUY WORKED
    //var headers = new HttpHeaders();  
    //headers.append('Access-Control-Allow-Origin', '*');     //ok this suk, is ment for backend
    this.http.get(this.url+index,/*{headers:headers}*/).subscribe(data =>
      {console.log(data);}, 
      error =>{console.log(error);}
      );

  }

  postempleado(customerData)
  {
    this.http.post(this.url,customerData).subscribe(data =>
      {console.log(data);}, 
      error =>{console.log(error);}
      );
  }

}
