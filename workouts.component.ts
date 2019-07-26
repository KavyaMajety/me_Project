import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MeappService } from '../meapp.service';

declare var toastr : any;

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  Workouts : any;
  description : any;
  dislikes : any;
  likes : any;
  duration : any;
  name : any;
  type : any;

  constructor(private router:Router, private service: MeappService) { 
    this.Workouts = {name: '', type: '', duration: '', description: ''}
  }

  ngOnInit() {}
  addWorkoutIdea() {
    console.log(this.Workouts.userId);
    this.service.addWorkoutsIdea(this.Workouts).subscribe();
    this.router.navigate(['workoutsuser']);
    toastr.success('Workouts', 'Thankyou for you contribuition!');
 }
  

}
