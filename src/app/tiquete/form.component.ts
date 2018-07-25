import { Component, OnInit, Input } from '@angular/core';
import { Tiquete } from './tiquete';
import { TiqueteService } from './tiquete.service';
import { Router} from '@angular/router';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private tiquete: Tiquete = new Tiquete()
  private title:string = "Crear registro"
  private messageAlert:string = ""

  staticAlertClosed = false;
  
  @Input() public alerts: Array<string> = [];

  constructor(private tiqueteService: TiqueteService,
  private router: Router,
  private alert: NgbAlertConfig) { }

  private tiposVehiculo = [
    {name: "MOTO"},
    {name: "CARRO"}
  ]

  ngOnInit() {
  }

  public onChange($event): void {
    this.tiquete.tipoVehiculo = $event.target.value;
  }

  public registrar(): void{
    this.tiqueteService.registrar(this.tiquete).subscribe(
        response => {
          this.router.navigate(['/tiquetes'])
          swal('Registro guardado', `Vehiculo con placa: ${this.tiquete.placa} creado con éxito!`, 'success')
        }, error => {
            this.alert.type = 'danger'
            this.alert.dismissible = true
            this.staticAlertClosed = false
            this.messageAlert = error.error.message
        }
    )
  }
}
