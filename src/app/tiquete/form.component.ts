import { Component, OnInit } from '@angular/core';
import { Tiquete } from './tiquete';
import { TiqueteService } from './tiquete.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private tiquete: Tiquete = new Tiquete()
  private title:string = "Crear registro"

  constructor(private tiqueteService: TiqueteService,
  private router: Router,
  private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  public registrar(): void{
    this.tiqueteService.registrar(this.tiquete).subscribe(
        response => this.router.navigate(['/tiquetes'])
    )
  }

  update(): void{
    this.activatedRouter.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.tiqueteService.facturar(this.cliente)
      }
    })
  }

}
