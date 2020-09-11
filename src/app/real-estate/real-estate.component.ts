import { Component, OnInit } from '@angular/core';
import { EstateService } from './estate.service';


@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})


export class RealEstateComponent implements OnInit {
  
  public estates;	

  constructor(private estateService:EstateService) { }

  transformEstateData(response) {
  	let estatesArray = [];
  	 for (var key in response) {
        	let object = {};
        	object["id"] = key;
        	for (var key2 in response[key]) {	
        		object[key2] = response[key][key2];
        	}
        	estatesArray.push(object);
        }
        return estatesArray;
  }



  ngOnInit(): void {
  	this.estateService.getEstateData().subscribe((response)=> {
  		this.estates = this.transformEstateData(response);
  	})

  }

}
