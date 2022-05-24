import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  URL ="http://localhost:5000";
  constructor(private http: HttpClient) { }

  sendmail(data:any): Observable<any> {
    return this.http.post(this.URL + '/preference', data, httpOptions);
  }
}
