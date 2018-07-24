import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { HttpClientModule } from '@angular/common/http';
import { TiqueteComponent } from './tiquete/tiquete.component';
import { TiqueteService } from './tiquete/tiquete.service';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './tiquete/form.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: '/tiquetes', pathMatch: 'full'},
  {path: 'tiquetes', component: TiqueteComponent},
  {path: 'tiquetes/form', component: FormComponent},
  {path: 'tiquetes/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TiqueteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [TiqueteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
