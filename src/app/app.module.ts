import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';      //IMPORTANT IMPORT




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { List1Component } from './list1/list1.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmpleadoformComponent } from './components/empleadoform/empleadoform.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';  //added for 2bingin

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    EmpleadoComponent,
    EmpleadoformComponent,
    FileUploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                   //added for 2binding
    HttpClientModule,                        //IMPORTANT IMPORT
    ReactiveFormsModule     //maybeeee
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
