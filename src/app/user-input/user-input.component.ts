import { Component, EventEmitter, Output, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input', 
  // standalone: true,     // because of NgModule
  // imports: [FormsModule], // for ngSubmit, ngModel in user-input.component.html    // because of NgModule
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();    // using a investment-input.model.ts
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '5';
  // enteredDuration = '10';

  // we can manage this using a signal:
  // calculate = output<InvestmentInput>();    // using a investment-input.model.ts
  enteredInitialInvestment = signal('0');
  enteredAnnualInvestment = signal('0');
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  // 0, 0, 5 and 10 are default numbers on a calculator

  // onSubmit() {
  //   this.calculate.emit({
  //     // using a + we transform a string value to a number:
  //     initialInvestment: +this.enteredInitialInvestment,
  //     annualInvestment: +this.enteredAnnualInvestment,
  //     expectedReturn: +this.enteredExpectedReturn,
  //     duration: +this.enteredDuration
  //   });
  // }

  constructor(private investmentService: InvestmentService) {}
  // this will tell Angular to inject an instance of InvestmentService as a value investmentService

  // changing onSubmit for signals:
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      // using a + we transform a string value to a number:
      initialInvestment: +this.enteredInitialInvestment(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
      duration: +this.enteredDuration()
    });
    
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredExpectedReturn.set('5');
    this.enteredDuration.set('10');
    // reseting to default values on a calculator after calculating
  }
}
