import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TiqueteComponent } from './tiquete/tiquete.component';
import { TiqueteService } from './tiquete/tiquete.service';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './tiquete/form.component';
import { FormsModule } from '@angular/forms';
import { FacturarComponent } from './tiquete/facturar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TrmComponent } from './trm/trm.component';

const routes: Routes = [
  {path: '', redirectTo: '/tiquetes', pathMatch: 'full'},
  {path: 'tiquetes', component: TiqueteComponent},
  {path: 'tiquetes/form', component: FormComponent},
  {path: 'tiquetes/facturar/:id', component: FacturarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TiqueteComponent,
    FormComponent,
    FacturarComponent,
    TrmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [TiqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
