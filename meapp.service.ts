import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MeappService {
  flag : boolean;
  constructor(private httpClient: HttpClient) { }
    setUserLoggedIn() {
      this.flag = true;
    }
    getUserLogged() : boolean {
      return this.flag;
    }
    setUserLoggedOut() {
      this.flag=false;
    }
    regUser(User: any) {
      console.log('Inside Service...',' ', User);
      return this.httpClient.post('RestAPIk/webapi/myresource/registerJ', User);
    }
    addUserIdea(FoodNutrition : any) {
      console.log('Inside Service...',' ', FoodNutrition);
      return this.httpClient.post('RestAPIk/webapi/myresource/userDescription', FoodNutrition);
    }
    getEmpByUserPass(loginId: string, password: string): any {
      console.log('Inside service:' , loginId, password);
      return this.httpClient.get('RestAPIk/webapi/myresource/getEmpByUserPass/'+loginId+'/'+password).toPromise();
      }
    addWorkoutsIdea(Workouts : any) {
      console.log('Inside Service...',' ', Workouts);
      return this.httpClient.post('RestAPIk/webapi/myresource/addWorkoutsIdea', Workouts);
    }
    addMealPlansIdea(MealPlans : any) {
      console.log('Inside Service...',' ', MealPlans);
      return this.httpClient.post('RestAPIk/webapi/myresource/addMealPlansIdea', MealPlans);
    }
    getProducts() {
      return this.httpClient.get('RestAPIk/webapi/myresource/getFoodNutritionIdea').pipe(retry(10));
     }
     getWorkoutsIdea() {
      return this.httpClient.get('RestAPIk/webapi/myresource/getWorkoutsIdea').pipe(retry(10));
     }
     getMealPlansIdea() {
      return this.httpClient.get('RestAPIk/webapi/myresource/getMealPlansIdea').pipe(retry(10));
     }
     addLike(FoodNutrition : any) {
        return this.httpClient.get('RestAPIk/webapi/myresource/addLikes');
     }
  } 
  
    


