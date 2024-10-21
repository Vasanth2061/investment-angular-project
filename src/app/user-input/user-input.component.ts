import { Component, output,signal } from '@angular/core';
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
    enteredInvestmentAmount = signal('0');
    enteredAnnualInvestment = signal('0');
    enteredExpectedReturn = signal('5');
    enteredDuration = signal('10');

    investmentData = output<investment>();

    onSubmit(){
      this.investmentData.emit({
        initialInvestment: +this.enteredInvestmentAmount(),
        annualInvestment: +this.enteredAnnualInvestment(),
        expectedReturn: +this.enteredExpectedReturn(),
        duration: +this.enteredDuration()
      });
      this.enteredAnnualInvestment.set('0');
      this.enteredExpectedReturn.set('5');
      this.enteredDuration.set('10');
      this.enteredInvestmentAmount.set('0');
    }
}
