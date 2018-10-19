import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataRepositoryService } from '../services/data-repository.service';

@Component({
  styleUrls: ['./register.component.css'],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  saving = false;

  constructor(private router: Router, private dataRepository: DataRepositoryService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    });
  }

  registerUser(user) {
    this.saving = true;
    this.dataRepository.saveUser(user).subscribe(null, () => (this.saving = false), () => this.router.navigate(['/catalog']));
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
