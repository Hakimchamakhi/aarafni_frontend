import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NewprojectService } from 'src/app/services/newproject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private projectservice: NewprojectService) { }
  projects:any;
  newtask:any;
  project:any;
  notdone:any;
  inprogress:any;
  done:any;
  comment:any;
  comments:any=[];
  username:any=localStorage.getItem("username");
  team_member:any=localStorage.getItem("team_member");
  getprojects(){
    this.projectservice.allproject().subscribe(data=>{
      this.projects=data
    })
  }
  getproject(project:any){
    this.project=project
    this.notdone=project.notdone
    this.inprogress=project.inprogress
    this.done=project.done
    this.comments=[]
    this.getcomments()
  }
  addnewtask(){
    const data = {newtask: this.newtask, project_id: this.project._id}
    this.projectservice.addnewtask(data).subscribe(data=>{
      alert(data)
    })
  }
  drop(event: CdkDragDrop<any[]>){
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }
  updatetasks(){
    const data = {notdone: this.notdone, inprogress: this.inprogress, done: this.done, project_id:this.project._id}
    this.projectservice.updatetasks(data).subscribe(data=>{
      alert(data)
    })
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
