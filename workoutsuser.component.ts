import { Component, OnInit } from '@angular/core';
import { MeappService } from '../meapp.service';

@Component({
  selector: 'app-workoutsuser',
  templateUrl: './workoutsuser.component.html',
  styleUrls: ['./workoutsuser.component.css']
})
export class WorkoutsuserComponent implements OnInit {
  Workouts : any;
  constructor(private service: MeappService) { }

  ngOnInit() {
    this.service.getWorkoutsIdea().subscribe( (result: any) => {console.log(result); this.Workouts = result; });
 }

}
