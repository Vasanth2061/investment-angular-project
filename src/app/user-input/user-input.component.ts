import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type investment } from '../app.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
    enteredInvestmentAmount = '10';
    enteredAnnualInvestment = '10';
    enteredExpectedReturn = '10';
    enteredDuration = '5';

    @Output() investmentData = new EventEmitter<investment>();

    onSubmit(){
      this.investmentData.emit({
        initialInvestment: +this.enteredInvestmentAmount,
        annualInvestment: +this.enteredAnnualInvestment,
        expectedReturn: +this.enteredExpectedReturn,
        duration: +this.enteredDuration
      });
    }
}
