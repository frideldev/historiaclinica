import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css'
  ]
})
export class ProgressComponent {
  progreso1 = 15;
  progreso2 = 25;
  // tslint:disable-next-line: typedef
  get getPorcentaje(){
    return`${ this.progreso1 }%`;
  }
  // tslint:disable-next-line: typedef
  get getPorcentaje2(){
    return`${ this.progreso2 }%`;
  }

}
