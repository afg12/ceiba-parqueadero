import { Injectable } from '@angular/core';
import { Tiquete } from './tiquete';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiqueteService {
  private urlEndPoint: string = 'http://localhost:8080/parqueadero';

  private httpHeaders = new HttpHeaders({'ContentType': 'application/json'})
  
  constructor(private http: HttpClient) { }

  getRegistros(): Observable<Tiquete[]>{
    return this.http.get(`${this.urlEndPoint}/listarRegistros`).pipe(
      map(response => response as Tiquete[])
    );
  }

  registrar(tiquete: Tiquete) :  Observable<Tiquete> {
    return this.http.post<Tiquete>(`${this.urlEndPoint}/registrar`, tiquete, {headers: this.httpHeaders})
  }

  getTiquete(id): Observable<Tiquete> {
    return this.http.get<Tiquete>(`${this.urlEndPoint}/registro/${id}`)
  }

  facturar(tiquete: Tiquete): Observable<Tiquete>{
    return this.http.put<Tiquete>(`${this.urlEndPoint}/facturar/${tiquete.id}`, tiquete, {headers: this.httpHeaders})
  }

  getFacturas(): Observable<Tiquete[]>{
    return this.http.get(`${this.urlEndPoint}/listarFacturas`).pipe(
      map(response => response as Tiquete[])
    );
  }
}
