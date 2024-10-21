import { Component,inject,computed } from '@angular/core';
import {  type investment,type investmentOutput } from '../app.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../app.service';

@Component({
  selector: 'app-investment-results',
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

    private investmentService=inject(InvestmentService);
    // get totalResult(){
    //     return this.investmentService.annualData;
    // }
    // totalResult=computed(()=>this.investmentService.annualData());
    totalResult=this.investmentService.annualData;
}
