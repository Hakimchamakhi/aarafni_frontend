import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/app/services/conference.service';

@Component({
  selector: 'app-conference',
  templateUrl: './conference.component.html',
  styleUrls: ['./conference.component.css']
})
export class ConferenceComponent implements OnInit {

  constructor(private conferenceservice: ConferenceService) { }
  meetingdate:any;
  meetingtime:any;

  sendmail(){
    const body = {username: localStorage.getItem("username") ,email: localStorage.getItem("email") ,meetingdate: this.meetingdate, meetingtime: this.meetingtime}
    this.conferenceservice.sendmail(body).subscribe(data=>{
      alert(data.msg)
    })
  }

  ngOnInit(): void {
  }

}
