import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { passwordWithSymbol, passwordMatch } from '../../helpers/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.builder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          passwordWithSymbol
        ])
      ],
      confirmPassword: ''
    }, {
        validator: [passwordMatch]
      });
    // this.registerForm = new FormGroup({
    //   firstName: new FormControl('Ravi'),
    //   lastName: new FormControl('Veliyat'),
    //   email: new FormControl('ravi@gmail.com'),
    //   password: new FormControl('abcd1234'),
    //   confirmPassword: new FormControl('asdflkjadflkj')
    // });
  }

  register() {
    console.log(this.registerForm.value);
    // Submit this data to your user service
  }
}
