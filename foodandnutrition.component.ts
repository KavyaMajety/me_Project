import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MeappService } from '../meapp.service';

declare var toastr : any;

@Component({
  selector: 'app-foodandnutrition',
  templateUrl: './foodandnutrition.component.html',
  styleUrls: ['./foodandnutrition.component.css']
})
export class FoodandnutritionComponent implements OnInit {
 FoodNutrition : any;
 description : String;

  constructor(private router:Router, private service: MeappService) { 
    this.FoodNutrition = {description: ''};
  }

  ngOnInit() {}
  addIdea() {
    console.log(this.FoodNutrition.userId);
    this.service.addUserIdea(this.FoodNutrition).subscribe();
    this.router.navigate(['foodandnutritionuser']);
    toastr.success('FoodNutrition', 'Thankyou for you contribuition!');
 }
}

