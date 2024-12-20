import { Injectable, signal } from "@angular/core";
import { InvestmentInput } from "./investment-input.model";

// Services and dependency injection
// You can outsource data and logic from a component into a service and then inject that service into all the components that might be interested in the data or methods in service
@Injectable({ providedIn: 'root'})
export class InvestmentService {
    // resultData?: {
    //     year: number;
    //     interest: number;
    //     valueEndOfYear: number;
    //     annualInvestment: number;
    //     totalInterest: number;
    //     totalAmountInvested: number;
    //   }[];

      // we can write this using signal:
      resultData = signal<{
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[] | undefined>(undefined);

    calculateInvestmentResults(data: InvestmentInput) {   // using a investment-input.model.ts
        const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
        const annualData = [];
        let investmentValue = initialInvestment;
    
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
    
        // this.resultsData = annualData;   // this doesnt work for signals
    
        // this.resultsData.set(annualData);   // for signals

        // this.resultData = annualData;

        this.resultData.set(annualData);    // for signals
      }
}