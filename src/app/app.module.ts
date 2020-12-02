import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';      //IMPORTANT IMPORT
//import {JwPaginationComponent} from 'jw-angular-pagination'; -> ngcc troubles
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

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
import { ReportemedicoComponent } from './components/reportemedico/reportemedico.component';
import { ReportesingleComponent } from './components/reportesingle/reportesingle.component';
import { ChartsModule } from 'ng2-charts';

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
    UserComponent,
    ReportemedicoComponent,
    ReportesingleComponent,//,
    //JwPaginationComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                   //added for 2binding
    HttpClientModule,                        //IMPORTANT IMPORT
    ReactiveFormsModule,     //maybeeee
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ChartsModule
    //JwPaginationComponent
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
