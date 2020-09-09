import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-thank-you-message',
  templateUrl: './thank-you-message.component.html',
  styleUrls: ['./thank-you-message.component.css']
})

export class ThankYouMessageComponent implements OnInit {
	
	firstname:string;
	lastname:string;	
  	action:string;

  	constructor(private currentRoute:ActivatedRoute) { }

	  ngOnInit() {
	  	if (this.currentRoute.snapshot.queryParams['action'] == "contact" ) 
	  	{ 	
	  		this.firstname = this.currentRoute.snapshot.queryParams['firstname']; 
	  		this.lastname = this.currentRoute.snapshot.queryParams['lastname'];
	  		this.action = this.currentRoute.snapshot.queryParams['action']+"ing";
	 	}
	  }

}
