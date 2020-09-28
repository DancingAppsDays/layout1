import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {List1Component} from './list1/list1.component';   //addeddd manual
import {EmpleadoformComponent} from './components/empleadoform/empleadoform.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
const routes: Routes = [

{path: 'list', component: List1Component},
{path: 'empform', component:EmpleadoformComponent},
{path: 'up1', component:FileUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
