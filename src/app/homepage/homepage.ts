import { AfterViewInit, Component,ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.css'],
  imports: [MatTableModule, MatPaginatorModule] // fixed typo: was `styleUrl`
})

export class Homepage implements AfterViewInit{
displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA; 
  // ngModel binding examples
  bindingText: string = '';
  isDisabled: boolean = false;
  userEmail: string = '';
  selectedOption: string = '';
  showInfo: boolean = false;
  counter: number = 0;
  statusMessage: string = '';
  buttonColor: string = 'green'; // for attribute binding
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

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


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
