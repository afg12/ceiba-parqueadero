import { Component, OnInit } from '@angular/core';
import { TrmService } from './trm.service';

@Component({
  selector: 'app-trm',
  templateUrl: './trm.component.html'
})
export class TrmComponent implements OnInit {

  private trm:number;

  constructor(private trmService: TrmService) { }

  ngOnInit() {
    this.trmService.getTrm().subscribe(
      trm => this.trm = trm
    );
  }

}
