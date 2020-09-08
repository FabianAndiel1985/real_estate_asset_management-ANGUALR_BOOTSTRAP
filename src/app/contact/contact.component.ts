import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
  	console.log(form.value);
	this.sendContactDataToDatabase(form.value);  
  }

	sendContactDataToDatabase(form) {
	 let postdata = {firstname:form.firstname, lastname:form.lastname,email: form.emailadress,adress:form.adress,zip:form.zip,city:form.city,message:form.message};		
	 this.http.post('https://realestateassetmanagment.firebaseio.com/contacts.json',postdata).subscribe(responseData=> {
	   console.log(responseData);
	 })
	}

}
