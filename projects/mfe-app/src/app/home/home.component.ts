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

  signUp(): void {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return
    }
    this.appService.saveUser('signup', this.user).subscribe(
      (response) => {
        alert('User saved successfully!');
      },
      (error) => {
        alert('Failed to save user!');
        console.error(error);
      }
    );
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    };
    this.isSignInVisible = true;
  }

  signIn(): void {

    this.appService.logIn('login', this.user).subscribe(
      (response) => {
        alert('User signed in successfully!');
      },
      (error) => {
        alert('Failed to sign in!');
        console.error(error);
      }
    );
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    };
  }

}