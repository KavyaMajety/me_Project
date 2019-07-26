import { Component, OnInit } from '@angular/core';
import { MeappService } from '../meapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  retrievedData : any;
  user : any;
  constructor(private service: MeappService) {
    this.retrievedData = localStorage.getItem('user');
    this.user = JSON.parse(this.retrievedData);
    console.log(this.user);
   }
ngOnInit() {
  }
}
