import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';      //IMPORTANT IMPORT




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

//import {AlertComponent} from './_directives/index';
//import {AlertService} from './_services/index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoformComponent } from './components/empleadoform/empleadoform.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ListequiposComponent } from './components/listequipos/listequipos.component';
import { EmpformeditComponent } from './components/empformedit/empformedit.component';
import { TurnoslistComponent } from './components/turnoslist/turnoslist.component';  //added for 2bingin
import { RegistrousuarioComponent } from './components/registrousuario/registrousuario.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './models/user/user.component';
import { AuthInterceptorService } from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,       //modified name then came back bc errors
    EmpleadoComponent,
    EmpleadoformComponent,
    FileUploadComponent,
    EquiposComponent,
    ListequiposComponent,
    EmpformeditComponent,
    TurnoslistComponent,
    RegistrousuarioComponent,
    LoginComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                   //added for 2binding
    HttpClientModule,                        //IMPORTANT IMPORT
    ReactiveFormsModule     //maybeeee
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi:true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
