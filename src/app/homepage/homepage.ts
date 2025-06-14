import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'] // fixed typo: was `styleUrl`
})
export class Homepage {

  // ngModel binding examples
  bindingText: string = '';
  isDisabled: boolean = false;
  userEmail: string = '';
  selectedOption: string = '';
  showInfo: boolean = false;
  counter: number = 0;
  statusMessage: string = '';
  buttonColor: string = 'green'; // for attribute binding

  // OOP example - method to increment a counter
  incrementCounter(): void {
    this.counter++;
    this.statusMessage = `Counter incremented to ${this.counter}`;
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

  onTextInput(event: any): void {
    this.bindingText = event.target.value;
  }

  onSubmit(): void {
    this.statusMessage = `Form submitted. Email: ${this.userEmail}, Dropdown: ${this.selectedOption}`;
  }

  onMouseOver(): void {
    this.statusMessage = 'Mouse is over the submit button!';
  }

  onMouseOut(): void {
    this.statusMessage = '';
  }
}
