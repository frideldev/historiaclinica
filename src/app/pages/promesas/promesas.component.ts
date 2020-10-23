import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuario().then(usuarios=>console.log(usuarios));
    // const promesa = new Promise((resolve, reject) => {
    //   if (false){
    //     resolve('hoola Mundo');
    //   }
    //   else{
    //     reject('Algo salio mal');
    //   }
    // });
    // promesa.then((mensaje) => {
    //  console.log(mensaje);
    // }).catch(error => console.log('Algo salio mal'));
  }
  getUsuario(){
   return new Promise(resolve=> fetch('https://reqres.in/api/users')
    .then(resp => resp.json())
    .then(body => console.log(body.data)));
  }

}
