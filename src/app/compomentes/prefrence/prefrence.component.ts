import { Component, OnInit } from '@angular/core';
import { PreferenceService } from 'src/app/services/preference.service';

@Component({
  selector: 'app-prefrence',
  templateUrl: './prefrence.component.html',
  styleUrls: ['./prefrence.component.css']
})
export class PrefrenceComponent implements OnInit {

  constructor(private preferenceservice: PreferenceService) { }
  colors:any;
  songs:any;
  birthdate:any;
  foods:any;
  hobbies:any;
  wordstosay:any;
  gender:any;

  sendmail(){
    const body = {username: localStorage.getItem("username") ,email: localStorage.getItem("email") ,colors:this.colors, songs:this.songs, birthdate:this.birthdate, foods: this.foods, hobbies: this.hobbies, wordstosay: this.wordstosay, gender: this.gender}
    this.preferenceservice.sendmail(body).subscribe(data=>{
      alert(data.msg)
    })
  }
  ngOnInit(): void {
  }

}
