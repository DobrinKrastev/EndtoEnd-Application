import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  form= this.fb.group({
      username: [''],
        email: [''],
      password: [''],
      repassword: ['']
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserServiceService
  ) {}

  // ngOnInit(): void {
  //   this.form = this.fb.group({
  //     username: [''],
  //     email: [''],
  //     password: [''],
  //     repassword: ['']
  //   });
  // }

  register(): void {
    console.log(this.form)
    if (this.form.invalid) {
      return;
    }

    const {
      username,
      email,
      password,
      repassword
    } = this.form.value;

    this.userService.register(username!, email!, password!,repassword!).subscribe(() => {
       this.router.navigate(['/dashboard']);
    });
  }
}


