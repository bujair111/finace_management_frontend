import { Component } from '@angular/core';
import { DebitServiceService } from '../services/debit-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {

  constructor(private debitSerivce: DebitServiceService, private router: Router){
    
  }
  msg :any

  AddDebitData(data: any){
    this.debitSerivce.addDebit(data).subscribe((res: {statuscode: number, message: string}) =>{
      console.log(res.message)
      this.msg= res.message

      if (res.statuscode == 200){
        const url = '/home';
        const delay = 1000; 
        setTimeout(() => {
          this.router.navigateByUrl(url);
        }, delay);
      }

    })
  }
}
