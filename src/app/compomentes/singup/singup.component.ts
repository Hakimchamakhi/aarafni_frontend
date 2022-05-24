import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  username:any;
  email:any;
  password:any;

constructor (private registerservice: RegisterService) {}

  
  register(){
    const body = {email:this.email, password: this.password, username:this.username}
    this.registerservice.register(body).subscribe(data=>{
      localStorage.setItem("token",data.token)
      localStorage.setItem("username",data.user.username)
      localStorage.setItem("email",data.user.email)
      window.location.replace("/")
    })
  }
  
  ngOnInit(): void {
  }

}
