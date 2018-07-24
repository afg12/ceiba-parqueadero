import { Component, OnInit } from '@angular/core';
import { Tiquete } from './tiquete';
import { TiqueteService } from './tiquete.service';

@Component({
  selector: 'app-tiquete',
  templateUrl: './tiquete.component.html'
})
export class TiqueteComponent implements OnInit {

  tiquetes: Tiquete[];

  constructor(private tiqueteService: TiqueteService) { }

  ngOnInit() {
    this.tiqueteService.getTiquetes().subscribe(
      tiquetes => this.tiquetes = tiquetes
    );
  }

}
