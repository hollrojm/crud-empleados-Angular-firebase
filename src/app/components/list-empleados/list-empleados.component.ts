import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Toast, ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {
 empleados: any[] = [];

  constructor(private _empleadoService: EmpleadoService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.getEmpelados();
  }

  getEmpelados(){
    this._empleadoService.getEmpleados().subscribe(data =>{
      this.empleados = [];
      data.forEach((element:any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })

      });
      console.log(this.empleados);

    })
  }
  eliminarEmpleado(id: string){
    this._empleadoService.eliminarEmpleado(id).then(()=>{
      console.log('Empleado eliminado con exito');
      this.toastr.error('El empleado fue eliminado con exito', 'Registro Eliminado',{
        positionClass: 'toast-center-center'
      })
    }).catch(error =>{
      console.log(error);

    })
  }

}
