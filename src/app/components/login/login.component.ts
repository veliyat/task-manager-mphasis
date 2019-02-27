import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem('user');
  }

  login() {
    // console.log(this.model);
    //Call the login service with this.model as data
    if (this.model.username === 'admin' && this.model.password === 'admin123') {
      const user = {
        username: this.model.username,
        token: 'abcd1234'
      };
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['/tasks']);
    }
  }

}
