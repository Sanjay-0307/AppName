import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './register-page.css',
  imports: [FormsModule,MatRadioModule,MatTooltipModule,MatFormFieldModule, MatInputModule,MatCheckboxModule,MatButtonModule,MatDatepickerModule,MatSelectModule],
})
export class RegisterPage implements OnInit{
constructor(private router: Router) {}
  UserName: string = '';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
   
   Save(): void {
    console.log('User Registered:', this.UserName);
    this.router.navigate(['/login']); // redirects to login
  }
 message: string = '';
 onMouseOver(): void {
    alert("Mouse is over the button!") ;
  }
  onMouseOut(): void {
  this.message = '';
}

}
