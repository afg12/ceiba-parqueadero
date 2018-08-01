import { Component, OnInit } from '@angular/core';
import { Tiquete } from './tiquete';
import { TiqueteService } from './tiquete.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tiquete',
  templateUrl: './tiquete.component.html'
})
export class TiqueteComponent implements OnInit {

  tiquetes: Tiquete[];

  constructor(private tiqueteService: TiqueteService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['salida'] === undefined || params['salida'] === 'false') {
        this.listarRegistros();
      } else {
        this.listarFacturas();
      }
    });
  }

  listarRegistros() {
    this.tiqueteService.getRegistros().subscribe(
      tiquetes => this.tiquetes = tiquetes
    );
  }

  listarFacturas() {
    this.tiqueteService.getFacturas().subscribe(
      tiquetes => this.tiquetes = tiquetes
    );
  }
}
