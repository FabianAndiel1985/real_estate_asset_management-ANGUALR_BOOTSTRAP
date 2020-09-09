import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
	this.sendContactDataToDatabase(form.value);  
  }

	sendContactDataToDatabase(form) {
    
	 let postdata = {salutation:form.salutation,firstname:form.firstname, lastname:form.lastname,email: form.emailadress,adress:form.adress,zip:form.zip,city:form.city,message:form.message};		
   this.http.post('https://realestateassetmanagment.firebaseio.com/contacts.json',postdata).subscribe(responseData=> {
	 })

   this.router.navigate(['/thankyou/message'],{queryParams:{action:'contact',salutation:form.salutation,firstname:form.firstname,lastname:form.lastname}});
	}

}
