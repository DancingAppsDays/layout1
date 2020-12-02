import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

      const token: string = localStorage.getItem('token');

    let request = req;

    if(token)
    {
     
      request = req.clone({

        //estaba en minuscula y
                                //did it broke?? 
        setHeaders:{
           //'Accept'       : 'application/json',   //was 'Accept'
          Authorization: 'Bearer '+token //${ this.token }'
        }

      });

    }
    //return  next.handle(request);
      return next.handle(request).pipe(
        
       catchError((err: HttpErrorResponse) =>{
      
        if(err.status === 401){
          //this.router.navigateByUrl('/login');
          console.log("error401, go to login");
          this.router.navigate(['/login']);
        }
        return throwError( err);
        
      })
      );
  }


}
