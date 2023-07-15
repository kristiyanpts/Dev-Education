import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['emailTest'],
    username: ['usernameTest'],
    tel: ['telTest'],
    passGroup: this.fb.group({
      password: ['passwordTest'],
      rePassword: ['rePasswordTest'],
    }),
  });

  constructor(private fb: FormBuilder) {}

  register(): void {}
}
