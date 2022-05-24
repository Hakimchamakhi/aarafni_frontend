import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-teamlogin',
  templateUrl: './teamlogin.component.html',
  styleUrls: ['./teamlogin.component.css']
})
export class TeamloginComponent implements OnInit {

  constructor(private loginservice: LoginService) { }
  email:any;
  password:any;

  login(){
    const body = {email:this.email, password: this.password}
    this.loginservice.teamlogin(body).subscribe(data=>{
      localStorage.setItem("token",data.token)
      localStorage.setItem("username",data.team.username)
      localStorage.setItem("email",data.team.email)
      localStorage.setItem("team_member","true")
      window.location.replace("/")
    })
  }
  ngOnInit(): void {
  }

}
