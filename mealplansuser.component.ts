import { Component, OnInit } from '@angular/core';
import { MeappService } from '../meapp.service';

@Component({
  selector: 'app-mealplansuser',
  templateUrl: './mealplansuser.component.html',
  styleUrls: ['./mealplansuser.component.css']
})
export class MealplansuserComponent implements OnInit {
  MealPlans : any;
  constructor(private service: MeappService) { }

  ngOnInit() {
    this.service.getMealPlansIdea().subscribe( (result: any) => {console.log(result); this.MealPlans = result; });
  }

}
