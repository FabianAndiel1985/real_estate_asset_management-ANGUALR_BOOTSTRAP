import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {ContactService} from '../../contact/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-thank-you-message',
  templateUrl: './thank-you-message.component.html',
  styleUrls: ['./thank-you-message.component.css']
})

export class ThankYouMessageComponent implements OnInit {
	
	firstname:string;
	lastname:string;	
  	action:string;

  	private subscription:Subscription;

  	constructor(private contactService:ContactService,private currentRoute:ActivatedRoute) { }

	  ngOnInit() {
	  	this.subscription = this.contactService.reqMess.subscribe((data)=> {
	  		console.log(data);
	  	})

	  	if (this.currentRoute.snapshot.queryParams['action'] == "contact" ) 
	  	{ 	
	  		this.firstname = this.currentRoute.snapshot.queryParams['firstname']; 
	  		this.lastname = this.currentRoute.snapshot.queryParams['lastname'];
	  		this.action = this.currentRoute.snapshot.queryParams['action']+"ing";
	 	}
	  }


	  ngOnDestroy() {
	  	this.subscription.unsubscribe();
	  }

}
