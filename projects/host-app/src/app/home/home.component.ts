import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { User } from './../common/app.user';
import { FormsModule } from '@angular/forms';
import { AppService } from '../common/app.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private appService: AppService) { }
  
  isSignInVisible: boolean = true;
  user: User = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  };

  toggleAuthView(): void {
    this.isSignInVisible = !this.isSignInVisible;
  }

  saveUser(): void {
    const newUser: User = {
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      password: this.user.password,
      confirmPassword: this.user.confirmPassword
    };
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
    }
    this.appService.saveUser('signup', newUser).subscribe(
      (response) => {
        alert('User saved successfully!');
      },
      (error) => {
        alert('Failed to save user!');
        console.error(error);
      }
    );
  }


}