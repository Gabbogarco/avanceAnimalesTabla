import { Component } from '@angular/core';
import {EjemploservicioService} from './ejemploservicio.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	calificaciones:any;
	mostrar_calificaciones : boolean;
  Oanimales:any;
  Oalumnos:any;
  ODatosUni:any;
  title = 'Formulario';
  Nombre = "Gabriel.";

  constructor(private servicio_animales:EjemploservicioService){
    this.mostrar_calificaciones= true;
    this.calificaciones = [10,9,8,8,"ok"];
 
  }
  ngOnInit(){
      this.servicio_animales.getAnimales().subscribe(data=>{
        console.log(data);
        this.Oanimales=data;
        console.log(this.Oanimales);
      

      });
      this.servicio_animales.getAlumnos().subscribe(data2=>{
        console.log(data2);
        this.Oalumnos=data2;
        console.log(this.Oalumnos);
    });
      this.servicio_animales.getDatosUniversidad().subscribe(data3=>{
        console.log(data3);
        this.ODatosUni=data3;
        console.log(this.ODatosUni);
    });

  }
  verCal(){
      this.mostrar_calificaciones=!this.mostrar_calificaciones;
  	   console.log("Se presiono el boton");
  }
  agregar(calificacion){
      console.log(calificacion.value);
      this.calificaciones.push(calificacion.value);
      return false;
  }

}
