import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeappService } from '../meapp.service';

declare var toastr : any;

@Component({
  selector: 'app-mealplans',
  templateUrl: './mealplans.component.html',
  styleUrls: ['./mealplans.component.css']
})
export class MealplansComponent implements OnInit {
  MealPlans : any;
  type : String;
  duration : any;
  description : any;
  fats : any;
  protiens : any;
  carbohydrates : any;
  fibre : any;

  constructor(private router:Router, private service:MeappService) { 
    this.MealPlans = {type: '', duration: '', description: '', fats: '', protiens: '', carbohydrates: '', fibre: ''};
  }
   ngOnInit() {}
   addMealPlanIdea() {
    console.log(this.MealPlans.userId);
    this.service.addMealPlansIdea(this.MealPlans).subscribe();
    this.router.navigate(['mealplansuser']);
    toastr.success('MealPlans', 'Thankyou for you contribuition!');
 }

}
