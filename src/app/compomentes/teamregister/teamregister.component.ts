import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-teamregister',
  templateUrl: './teamregister.component.html',
  styleUrls: ['./teamregister.component.css']
})
export class TeamregisterComponent implements OnInit {
  username:any;
  email:any;
  password:any;

constructor (private registerservice: RegisterService) {}

  
  register(){
    const body = {email:this.email, password: this.password, username:this.username}
    this.registerservice.teamregister(body).subscribe(data=>{
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
