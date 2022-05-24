import { Component, OnInit } from '@angular/core';
import { NewprojectService } from 'src/app/services/newproject.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor(private projectservice: NewprojectService) { }
  projects:any;
  project:any;
  notdone:any;
  inprogress:any;
  done:any;
  comment:any;
  comments:any=[];
  username:any=localStorage.getItem("username");
  team_member:any=localStorage.getItem("team_member");
  getprojects(){
    const user_email=localStorage.getItem("email")
    if(user_email){
      this.projectservice.getproject(user_email).subscribe(data=>{
        this.projects=data
      })
    }
    
  }
  getproject(project:any){
    this.project=project
    this.notdone=project.notdone
    this.inprogress=project.inprogress
    this.done=project.done
    this.comments=[]
    this.getcomments()
  }
  sendcomment(){
    const data = {project_id:this.project._id, username:this.username,comment:this.comment, team_member:this.team_member}
    this.projectservice.sendcomment(data).subscribe(x=>{
      alert(x)
    })
  }

  getcomments(){
    const project_id=this.project._id
    this.projectservice.getcomments(project_id).subscribe(data=>{
      this.comments=data
    })
  }
  
  ngOnInit(): void {
    this.getprojects()
  }
 
}