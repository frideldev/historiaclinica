import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Medico } from 'src/app/models/medico.model';
import { BusquedasService } from 'src/app/services/busquedas.service';
import { ModalImagenService } from 'src/app/services/modal-imagen.service';
import Swal from 'sweetalert2';
import {MedicoService} from '../../../services/medico.service';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styles: [
  ]
})
export class MedicosComponent implements OnInit, OnDestroy {
  public medicos: Medico[] = [];
  public cargando = true;
  private imgSubs: Subscription;
  constructor(private medicoService: MedicoService, private modalImagenService: ModalImagenService,
              private busquedasService: BusquedasService
    ) { }
  ngOnDestroy(): void {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarMedicos();
    this.imgSubs = this.modalImagenService.nuevaImagen.pipe(delay(100)).subscribe(img => this.cargarMedicos());
  }
  buscar(termino: string){
    if(termino.length === 0){
      return this.cargarMedicos();
    }
    this.busquedasService.buscar('medicos', termino)
  .subscribe(resp => {this.medicos = resp as Medico[]; });
  }
  cargarMedicos(){
    this.cargando = true;
    this.medicoService.cargarMedicos().subscribe(resp => {
      this.cargando = false;
      this.medicos = resp;
    });
  }
  guardarCambios(){

  }
  eliminarMedico(medico:Medico){
    Swal.fire({
      title: 'Confirma Borrar el Usuario?',
      text: `Esta apunto de borrar el usuario ${medico.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.medicoService.borrarMedico(medico._id).subscribe(resp => {
          this.cargarMedicos();
          Swal.fire(
            'Medico borrado!',
            `${medico.nombre} fue eliminado correctamente`,
            'success'
          );
        }
         );
      }
    });
  }
  abrirModal(medico: Medico){
    this.modalImagenService.abrirModal('medicos', medico._id, medico.img);
  }

}
