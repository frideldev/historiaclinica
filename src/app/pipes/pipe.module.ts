import { NgModule } from '@angular/core';
import { ImagenPipe } from './imagen.pipe';


@NgModule({
  declarations: [
    ImagenPipe
  ],
  exports: [
    ImagenPipe
  ],
  imports: [
  ]
})
export class PipeModule { }
