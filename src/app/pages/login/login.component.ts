import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private route: Router) {}

  change = false;
  changeButton(value: boolean) {
    this.change = value;
  }
  ngOnit() {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: '',
  };

  loginObj: any = {
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  };

  onSignup() {
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
  }

  loginForm() {
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.email == this.loginObj.email && m.password == this.loginObj.password
    );
    if (isUserExist != undefined) {
      alert('Login Successful');
      this.route.navigate(['/']);
    } else {
      alert('Login Failed');
    }
  }
}
