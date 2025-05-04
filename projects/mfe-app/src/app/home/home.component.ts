import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { User } from './../common/app.user';
import { FormsModule } from '@angular/forms';
import { AppService } from '../common/app.service';
import { Task } from '../common/app.task';
import { TaskComponent } from '../task/task.component';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, TaskComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.isUserLoggedIn = true;
      const parsedUser = JSON.parse(storedUser);
      this.appService.getUser(parsedUser.token).subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Failed to fetch user data on reload:', error);
        }
      });
    }
  }

  isSignInVisible: boolean = true;
  isUserLoggedIn: boolean = false;
  user: User = {
    email: '',
    firstName: '',
    lastName: '',
    fullName: '',
    password: '',
    confirmPassword: '',
    tasks: []
  };

  toggleAuthView(): void {
    this.isSignInVisible = !this.isSignInVisible;
  }

  signUp(): void {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return
    }
    this.user.fullName = this.user.firstName + ' ' + this.user.lastName;
    this.appService.saveUser(this.user).subscribe({
      next: (response) => {
        alert('User saved successfully!');
      },
      error: (error) => {
        alert('Failed to save user!');
        console.error(error);
      }
    });
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      fullName: '',
      password: '',
      confirmPassword: ''
    };
    this.isSignInVisible = true;
  }

  signIn(): void {

    this.appService.logIn(this.user).subscribe({
      next: (response) => {
        localStorage.setItem('user', JSON.stringify({
          'userId': response.id,
          'token': response.token,
          'name': response.name,
          'email': response.email,
          'expiry': response.expiresIn
        }));
        this.isUserLoggedIn = true;

        this.appService.getUser(response.token).subscribe({
          next: (user) => {
            this.user = user;
          },
          error: (error) => {
            console.error('Failed to fetch user data:', error);
          }
        });
      },
      error: (error) => {
        alert('Failed to sign in!');
        console.error(error);
      }
    });
    this.user = {
      email: '',
      firstName: '',
      lastName: '',
      fullName: '',
      password: '',
      confirmPassword: ''
    };
  }

}

