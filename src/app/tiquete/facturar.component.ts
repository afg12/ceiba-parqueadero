import { Component, OnInit } from '@angular/core';
import { Tiquete } from './tiquete';
import { TiqueteService } from './tiquete.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-facturar',
  templateUrl: './facturar.component.html'
})
export class FacturarComponent implements OnInit {

  private tiquete: Tiquete = new Tiquete();
  private title: String = 'Crear Salida';

  constructor(private tiqueteService: TiqueteService,
  private router: Router,
  private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.cargarTiquete();
  }

  cargarTiquete(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.tiqueteService.getTiquete(id).subscribe( (tiquete) => this.tiquete = tiquete);
      }
    });
  }

  public facturar(): void {
    this.tiqueteService.facturar(this.tiquete).subscribe(
      response => {
        this.router.navigate(['/tiquetes'], { queryParams: { salida: true }});
        swal('Registro actualizado', `Vehiculo con placa: ${this.tiquete.placa} actualizado con éxito!`, 'success');
      }
    );
  }
}
