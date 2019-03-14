import{ Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EjemploservicioService {

  constructor(private http:HttpClient) { 

  }
  getAnimales(){
  	return this.http.get("http://localhost:3000/animales");
  }

  getAlumnos(){
//return this.http.get("http://demo0253989.mockable.io/alumnos");
    return this.http.get("http://localhost:3000/alumnos");
  }
  getDatosUniversidad(){
//return this.http.get("http://demo0253989.mockable.io/alumnos");
    return this.http.get("http://localhost:3000/DatosUniversidad");
  }
}
 