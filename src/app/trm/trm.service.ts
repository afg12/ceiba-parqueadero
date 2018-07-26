import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TrmService {
  private urlEndPoint: string = 'http://localhost:2020/trm';

  constructor(private http: HttpClient) { }

  getTrm(): Observable<number> {
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as number)
    );
  }
}
