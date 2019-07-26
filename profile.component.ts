import { Component, OnInit } from '@angular/core';
import {MeappService} from '../meapp.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  retrievedData : any;
  user : any;
  bmi : any;
  constructor(private service: MeappService) { 
    this.retrievedData = localStorage.getItem('user');
    this.user = JSON.parse(this.retrievedData);
    console.log(this.user);
  }

  ngOnInit() {
  }
 

}
