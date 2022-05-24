import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token:any;
  team:any;
  constructor() { }

  logout(){
    localStorage.clear()
  }
  ngOnInit(): void {
    this.token=localStorage.getItem("token")
    this.team=localStorage.getItem("team_member")
  }

}
