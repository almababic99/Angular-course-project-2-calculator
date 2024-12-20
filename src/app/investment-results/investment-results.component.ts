import { CurrencyPipe } from '@angular/common';
import { Component, Input, input, inject, computed } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,  // because of NgModule
  // imports: [CurrencyPipe],    // for currency pipe in investment-results.component.html for formatting numbers  // because of NgModule
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  // results = input<{
  // year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[]>()   // using signals
  
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultData;
  // }

  results = computed(() => this.investmentService.resultData());   // returning a computed read only signal
}
