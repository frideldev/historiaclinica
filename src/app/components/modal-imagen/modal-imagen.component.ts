import { Component, OnInit } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';
import Swal from 'sweetalert2';
import {ModalImagenService} from '../../services/modal-imagen.service';
@Component({
  selector: 'app-modal-imagen',
  templateUrl: './modal-imagen.component.html',
  styles: [
  ]
})
export class ModalImagenComponent implements OnInit {
  public imagenSubir: File;
   public imgTemp: any = '';
  constructor(public modalImagenService:ModalImagenService, public fileUploadService:FileUploadService) { }

  ngOnInit(): void {
  }
  cerrarModal(){
    this.imgTemp=null;
    this.modalImagenService.cerrarModal();
  }
  cambiarImagen(file:File){
    this.imagenSubir = file;
    if (!file){return this.imgTemp = null; }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.imgTemp = reader.result;
    };
   }
   subirImagen(){
    this.fileUploadService.actualizarFoto(this.imagenSubir,this.modalImagenService.tipo, this.modalImagenService.id)
                          .then(img =>{
                            Swal.fire('Guardado', 'Imagen Actualizada', 'success');
                            this.modalImagenService.nuevaImagen.emit(img);
                            this.cerrarModal();
                          })
                          .catch(err => {Swal.fire('Error', err.error.msg, 'error');});
  }
}
