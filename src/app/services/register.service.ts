import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  URL ="http://localhost:5000/user";
  constructor(private http: HttpClient) { }

  register(body:any): Observable<any> {
    return this.http.post(this.URL + '/register', body, httpOptions);
  }
  teamregister(body:any): Observable<any> {
    return this.http.post("http://localhost:5000/team/register", body, httpOptions);
  }
}
