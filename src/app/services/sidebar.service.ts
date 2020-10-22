import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu: any[] = [
    {
      titulo:'Dashboard',
      icon:'mdi mdi-gauge',
      submenu:[
        {titulo:'Main',url:'/'},
        {titulo:'ProgressBar',url:'progress'},
        {titulo:'Graficas',url:'grafica1'}
      ]
    }
  ];
  constructor() { }
}
