import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calcualte =new EventEmitter<InvestmentInput>();
  enteredInitialinvestment='0';
  enteredAnnualinvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';
  onSubmit(){
    
    this.calcualte.emit({
      initialInvestment:+this.enteredInitialinvestment,
      duration:+this.enteredAnnualinvestment,
      expectedReturn:+this.enteredExpectedReturn,
      annualInvestment:+this.enteredDuration,

    

    });

  }

}
