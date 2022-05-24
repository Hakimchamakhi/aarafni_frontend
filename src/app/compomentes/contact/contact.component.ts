import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private contactservice: ContactService) { }
  fname:any;
  lname:any;
  email:any;
  message:any;
  tel:any;

  sendmail(){
    const body = {fname:this.fname, lname:this.lname, email:this.email, message: this.message, tel: this.tel}
    this.contactservice.sendmail(body).subscribe(data=>{
      alert(data.msg)
    })
  }

  ngOnInit(): void {
  }

}
