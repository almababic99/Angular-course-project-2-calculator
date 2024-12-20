import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import type { InvestmentInput } from './investment-input.model';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";

@Component({
  selector: 'app-root',
  // standalone: true,  // because of NgModule
  templateUrl: './app.component.html',
  // imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],   // because of NgModule
})
export class AppComponent {
  // resultsData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // we can manage this data using a signal:
  // we don't need this because we will use it in investment.service.ts:
  // resultsData = signal<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[] | undefined>(undefined);
  // signal will hold array or undefined value

  // A signal is a wrapper around a value that notifies interested consumers when that value changes. Signals can contain any value, from primitives to complex data structures.
  // You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.

  // we cut this because we will use it in a investment.service.ts:
  // onCalculateInvestmentResults(data: InvestmentInput) {   // using a investment-input.model.ts
  //   const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
  //   const annualData = [];
  //   let investmentValue = initialInvestment;

  //   for (let i = 0; i < duration; i++) {
  //     const year = i + 1;
  //     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
  //     investmentValue += interestEarnedInYear + annualInvestment;
  //     const totalInterest =
  //       investmentValue - annualInvestment * year - initialInvestment;
  //     annualData.push({
  //       year: year,
  //       interest: interestEarnedInYear,
  //       valueEndOfYear: investmentValue,
  //       annualInvestment: annualInvestment,
  //       totalInterest: totalInterest,
  //       totalAmountInvested: initialInvestment + annualInvestment * year,
  //     });
  //   }

  //   // this.resultsData = annualData;   // this doesnt work for signals

  //   this.resultsData.set(annualData);
  // }
}
