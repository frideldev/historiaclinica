import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usuarioService:UsuarioService, private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
    
    console.log('Paso por el CanActivate');
    return this.usuarioService.validarToken().pipe(tap(resp=>{
      if(!resp){
        this.router.navigateByUrl('/login');
      }
    }));
  }
  
}
