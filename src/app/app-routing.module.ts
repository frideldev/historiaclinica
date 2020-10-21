import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesRoutingModule} from './pages/pages-routing.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth-routing.module';


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
