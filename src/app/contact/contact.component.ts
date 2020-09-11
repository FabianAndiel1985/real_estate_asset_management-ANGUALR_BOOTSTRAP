import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {ContactService} from './contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit, OnDestroy {

  constructor(private contactService:ContactService,private router:Router, private http:HttpClient) { }

  private error:boolean=false;
  private subscription:Subscription;

  ngOnInit(): void {
    this.subscription = this.contactService.errorMess.subscribe((data)=> {
      this.error=true;
    })
  }

  onSubmit(form) {
	  this.contactService.sendContactDataToDatabase(form.value);
    if(!this.error) {
      this.router.navigate(['/thankyou/message'],{queryParams:{action:'contact',salutation:form.value.salutation,firstname:form.value.firstname,lastname:form.value.lastname}});
    }
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
