import { Component } from '@angular/core';
import { BudgetServiceService } from '../services/budget-service.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent {

  constructor(private budgetService: BudgetServiceService) {}

  message : any

  addBudget(formData: any){
    this.budgetService.addBudget(formData).subscribe((res: {statuscode: number, message: string}) =>{
      console.log(res.message)
      this.message = res.message
    })
  }
}
