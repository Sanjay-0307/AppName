import { Component, OnInit } from '@angular/core';
import { RedirectCommand, Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
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
