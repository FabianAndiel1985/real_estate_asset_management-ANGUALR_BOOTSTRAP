import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  constructor(private http:HttpClient) { }

  public errorMess = new Subject<any>();
  public reqMess = new Subject<any>();

  sendContactDataToDatabase(form) {
  	let postdata = {salutation:form.salutation,firstname:form.firstname, lastname:form.lastname,email: form.emailadress,adress:form.adress,zip:form.zip,city:form.city,message:form.message};		
  	 this.http.post('https://realestateassetmancontacts.firebaseio.com/contacts.json',postdata).subscribe(response=> {
  	 this.reqMess.next("SUCCESS");	
	 },(error) => {this.errorMess.next("Error: "+error.message);}

	 )
  }

}