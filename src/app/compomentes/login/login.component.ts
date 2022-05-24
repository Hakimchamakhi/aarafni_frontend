import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
  email:any;
  password:any;

  login(){
    const body = {email:this.email, password: this.password}
    this.loginservice.login(body).subscribe(data=>{
      localStorage.setItem("token",data.token)
      localStorage.setItem("username",data.user.username)
      localStorage.setItem("email",data.user.email)
      window.location.replace("/")
    })
  }
  ngOnInit(): void {
  }

}
