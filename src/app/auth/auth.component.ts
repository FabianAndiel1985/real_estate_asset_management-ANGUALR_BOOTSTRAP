import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from './models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  myForm:FormGroup;



  // email = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password:new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    console.log(user);
    this.myForm.reset();
  }

}
