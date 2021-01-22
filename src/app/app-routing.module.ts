import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadosComponent } from './components/create-empleados/create-empleados.component';

const routes: Routes = [
  {path: '', redirectTo:'list-empleados', pathMatch: 'full'},
  {path:'list-empleados', component: ListEmpleadosComponent},
  {path: 'create-empleado', component: CreateEmpleadosComponent},
  {path: 'editempleado/:id', component: CreateEmpleadosComponent},
  {path: '**', redirectTo:'list-empleados', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
