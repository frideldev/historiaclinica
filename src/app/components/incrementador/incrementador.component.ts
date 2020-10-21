import { Component, EventEmitter, Input, Output , OnInit} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit {

    @Input() progreso = 50;
    @Input() btnClass = 'btn-primary';
    @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void{
    this.btnClass = `btn ${this.btnClass}`;
  }
    // tslint:disable-next-line: typedef
    cambiarValor(valor: number){
    if (this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if (this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }
  // tslint:disable-next-line: typedef
  onChange(valor: number){
    if (valor >= 100){
      this.progreso = 100;
    }else if (valor <= 0){
      this.progreso = 0;
    } else {
      this.progreso = valor;
    }

    this.valorSalida.emit(this.progreso);

  }

}
