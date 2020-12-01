import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';

import { PagesComponent } from './pages.component';

const routes: Routes = [
    {path: 'dashboard', component: PagesComponent,canActivate:[AuthGuard],
    canLoad:[AuthGuard],
  loadChildren:()=>import('./child-routes-routing.module').then(m=>m.ChildRoutesRoutingModule)
  },
  ];
@NgModule({
    imports: [RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }