import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InterceptorJWTService {

  constructor(/*private auths: Authseriv*/) { }

  /*
  intercept(req: HttpRequest, next: HttpHandler) {
    const token = this.authService.getJWTToken();
    req = req.clone({
      url:  req.url,
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next.handle(req);
  }*/
}