import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import User from './models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit, OnDestroy {
  myForm:FormGroup;
  subscription:Subscription;


  // email = new FormControl('');

  constructor( private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl(''),
      password:new FormControl('')
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    const user = new User(this.myForm.value.email, this.myForm.value.password);
    this.subscription = this.authenticationService.login(user).subscribe(response=>{
      console.log(response);
     this.myForm.reset();
     this.router.navigate(['/real-estate']);
    },
    (err) => {console.log(err.message)})
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
