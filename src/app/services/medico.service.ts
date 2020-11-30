import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Medico} from '../models/medico.model';
import { map} from 'rxjs/operators';
import { environment } from '../../environments/environment';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  get token():string{
    return localStorage.getItem('token') || '';
   }
  
   get headers(){
      return {headers: {'x-token': this.token}};
   }
  constructor(private http: HttpClient) { }
  cargarMedicos(){
    return this.http.get<Medico[]>(`${base_url}/medicos`, this.headers).pipe(map((resp: any)=>resp.medicos));
  }
  obtenerMedicoporId(id: string){
    return this.http.get<Medico[]>(`${base_url}/medicos/${id}`, this.headers).pipe(map((resp: any)=>resp.medico));
  }
  crearMedico(medico: {nombre: string, hospital: string}){
    return this.http.post<Medico[]>(`${base_url}/medicos`,medico, this.headers);
  }
  actualizarMedico(medico: Medico){
    return this.http.put<Medico[]>(`${base_url}/medicos/${medico._id}`,medico, this.headers);
  }
  borrarMedico(_id: string){
    return this.http.delete<Medico[]>(`${base_url}/medicos/${_id}`, this.headers);
  }

}
