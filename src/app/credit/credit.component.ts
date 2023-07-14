import { Component } from '@angular/core';
import { CreditServiceService } from '../services/credit-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent {
  constructor(private creditService: CreditServiceService,  private router: Router){}

  msg:any

  addCreditData(data: any){
    this.creditService.addCredit(data).subscribe((res: {statuscode: number, message: string}) =>{
      console.log(res.message)
      this.msg = res.message

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
