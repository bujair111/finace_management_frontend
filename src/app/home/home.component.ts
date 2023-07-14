import { Component } from '@angular/core';
import { CommenServiceService } from '../services/commen-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  currentDate: Date;
  formattedDate: string;

  constructor(private commonService: CommenServiceService) {
    this.currentDate = new Date();
    this.formattedDate = this.formatDate(this.currentDate);
  }
  date: any
  budget: any
  totalIncome: any
  totalExpense: any
  expenseDocument:any = []
  incomeDocument:any = []

  budgetIndicter : any
  overExpenseIndicter : any

  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  
  ngOnInit(){
    this.commonService.showCardData().subscribe((res: {status: number,message: any,budget: any}) => {
      this.budget= res.budget['budget']
    })

    this.commonService.totalIncome().subscribe((res: {status: number,message: any,totalIncome: any}) => {
      this.totalIncome= res.totalIncome
    })

    this.commonService.totalExpense().subscribe((res: {status: number,message: any,totalExpense: any}) => {
      this.totalExpense= res.totalExpense
    })

    this.commonService.listExpense().subscribe((res: { status: number, message: any, data: any[] }) => {
      this.expenseDocument = res.data;
    });

    this.commonService.listIncome().subscribe((res: { status: number, message: any, data: any[] }) => {
      console.log(res);
      this.incomeDocument = res.data;
    });

    if (this.budget.value == ''){
      this.budgetIndicter= true
      console.log('this month budget not added')
    }
    else{
      this.budgetIndicter= false
    }

    if (this.totalExpense>this.budget){
      this.overExpenseIndicter = true
    }
    else{
      this.overExpenseIndicter= false
    }


  }
}
