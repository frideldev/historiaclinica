import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';
import { Hospital } from '../models/hospital.model';
import { Medico } from '../models/medico.model';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class BusquedasService {

  constructor(private http:HttpClient) { }
  get token():string{
    return localStorage.getItem('token') || '';
   }
   get headers(){
    return {headers: {'x-token': this.token}};
 }
private transformarUsuarios(resultados: any[]):Usuario[]{
return resultados.map(user => new Usuario(user.nombre,user.email,'',user.role,user.google,user.img,user.uid));
}
private transformarHospitales(resultados: any[]):Hospital[]{
  return resultados;
  }
  private transformarMedicos(resultados: any[]):Medico[]{
    return resultados;
    }

busquedaGlobal(termino:string){
  return this.http.get<any[]>(`${base_url}/todo/${termino}`, this.headers);
}

 buscar(tipo: 'usuarios'|'medicos'|'hospitales', termino: string = ''){
  return this.http.get<any[]>(`${base_url}/todo/coleccion/${tipo}/${termino}`, this.headers)
  .pipe(map((resp: any) =>{
    switch (tipo) {
      case 'usuarios':
        return this.transformarUsuarios(resp.resultado)
        case 'hospitales':
        return this.transformarHospitales(resp.resultado)
        case 'medicos':
        return this.transformarMedicos(resp.resultado)
      default:
        return[];
    }
  }));
 }
}
