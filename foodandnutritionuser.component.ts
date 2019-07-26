import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeappService } from '../meapp.service';

@Component({
  selector: 'app-foodandnutritionuser',
  templateUrl: './foodandnutritionuser.component.html',
  styleUrls: ['./foodandnutritionuser.component.css']
})
export class FoodandnutritionuserComponent implements OnInit {
  FoodNutrition : any;
  constructor(private service: MeappService) { 
  }

  ngOnInit() {
    this.service.getProducts().subscribe( (result: any) => {console.log(result); this.FoodNutrition = result; });
  
  }

}
