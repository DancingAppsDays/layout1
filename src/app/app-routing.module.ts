import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {List1Component} from './list1/list1.component';   //addeddd manual//modified manual
import {EmpleadoformComponent} from './components/empleadoform/empleadoform.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { ListequiposComponent } from './components/listequipos/listequipos.component';
import { EmpformeditComponent } from './components/empformedit/empformedit.component';
import { TurnoslistComponent } from './components/turnoslist/turnoslist.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrousuarioComponent } from './components/registrousuario/registrousuario.component';
const routes: Routes = [

{path: 'list', component: List1Component},
{path: 'empform', component:EmpformeditComponent},//EmpleadoformComponent},
{path: 'up1', component:FileUploadComponent},
{path: 'equipos', component:EquiposComponent},
{path: 'listequip', component:ListequiposComponent},
{path: 'turnosform',component:TurnoslistComponent},
{path: 'login', component:LoginComponent},
{path: 'registry', component: RegistrousuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
