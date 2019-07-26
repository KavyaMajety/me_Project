import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeappService } from '../meapp.service';

declare var toastr : any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User : any;
  userId : number;
  emailId : String;
  password : String;
  points : number;
  age : number;
  gender : string;
  firstName : string;
  lastName : string;
  height : number;
  weight : number;

  constructor(private router:Router, private service : MeappService) {
    this.User = {userId: '', points: '', age: '', gender: '', firstName: '', lastName: '', height: '', weight: '', emailId: '', password: ''};
   }

  ngOnInit() {}
  

  registerUser() {
    console.log(this.User.UserId);
    this.service.regUser(this.User).subscribe();
    toastr.success('Register', 'Registration Success');
    this.router.navigate(['login']);

  }
  }


