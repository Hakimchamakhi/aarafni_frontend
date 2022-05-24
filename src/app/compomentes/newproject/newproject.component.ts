import { Component, OnInit } from '@angular/core';
import { NewprojectService } from 'src/app/services/newproject.service';

@Component({
  selector: 'app-newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.css']
})
export class NewprojectComponent implements OnInit {

  constructor(private newprojectservice: NewprojectService) { }
  title:any;
  client:any;
  description:any;
  clients:any=[];

  addproject(){
    const body = {title : this.title, client: this.client, description: this.description}
    this.newprojectservice.addproject(body).subscribe(data=>{
      alert(data)
    })
  }
  getusers(){
    this.newprojectservice.alluser().subscribe(data=>{
      this.clients=data
    })
  }
  ngOnInit(): void {
    this.getusers()
  }

}
