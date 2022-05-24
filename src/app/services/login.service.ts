import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL ="http://localhost:5000/user";
  constructor(private http: HttpClient) { }

  login(data:any): Observable<any> {
    return this.http.post(this.URL + '/login', data, httpOptions);
  }

  teamlogin(data:any): Observable<any> {
    return this.http.post("http://localhost:5000/team/login", data, httpOptions);
  }
}
