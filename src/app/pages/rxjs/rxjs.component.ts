import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import {retry} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
public intervalo: Subscription;
  constructor() { 
    let i=0;
    const obs$= new Observable(observer=>{
      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);
        if(i===4){
          clearInterval(intervalo);
          observer.complete();
        }
        if(i===2){
          observer.error('i llego a 2');
        }
      },1000);
    });
    this.intervalo=obs$.pipe(retry()).subscribe(
      valor => console.log('Subs',valor),
      err => console.warn('Error:',err),
      () => console.info('Obs Terminado')
    );
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.intervalo.unsubscribe();
  }
}
