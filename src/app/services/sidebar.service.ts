import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Graficas', url: 'grafica1'},
        {titulo: 'Promesas', url: 'promesas'},
        {titulo: 'Rxjs', url: 'rxjs'}
      ]
    },
    {
      titulo: 'Mantenimiento',
      icon: 'mdi mdi-folder-lock-open',
      submenu: [
        {titulo: 'Usuarios', url: 'usuarios'},
        {titulo: 'Clinicas', url: 'hospitales'},
        {titulo: 'Medicos', url: 'medicos'}
      ]
    }
  ];
  constructor() { }
}
