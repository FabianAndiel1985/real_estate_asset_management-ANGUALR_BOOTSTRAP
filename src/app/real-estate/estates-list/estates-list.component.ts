import { Component, OnInit } from '@angular/core';
import { EstateService } from '../estate.service';

@Component({
  selector: 'app-estates-list',
  templateUrl: './estates-list.component.html',
  styleUrls: ['./estates-list.component.css']
})
export class EstatesListComponent implements OnInit {

  constructor(private estateService:EstateService) { }

  public estates;	

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
