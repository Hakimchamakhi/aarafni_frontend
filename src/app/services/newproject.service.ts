import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class NewprojectService {
  URL ="http://localhost:5000/project";
  constructor(private http: HttpClient) { }

  alluser(): Observable<any> {
    return this.http.get("http://localhost:5000/user" + '/all');
  }

  addproject(data:any): Observable<any> {
    return this.http.post(this.URL + '/add', data, httpOptions);
  }

  allproject(): Observable<any> {
    return this.http.get(this.URL + '/all');
  }
  getproject(email:any): Observable<any> {
    return this.http.get(this.URL + '/project?email='+email);
  }

  addnewtask(data:any): Observable<any> {
    return this.http.post(this.URL + '/newtask', data, httpOptions)
  }
  updatetasks(data:any): Observable<any> {
    return this.http.put(this.URL + '/updatetasks', data, httpOptions)
  }
  sendcomment(data:any): Observable<any> {
    return this.http.post(this.URL + '/comment', data, httpOptions)
  }
  getcomments(project_id:any): Observable<any> {
    return this.http.get(this.URL + '/allcomments?project_id='+project_id);
  }
}
