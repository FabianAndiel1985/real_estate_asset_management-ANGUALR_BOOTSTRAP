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
    
    const{e1,e2,e3,e4,e5,e6} = response;

    return [e1,e2,e3,e4,e5,e6];
  }

  ngOnInit(): void {
  	this.estateService.getEstateData().subscribe((response)=> {
  	this.estates = this.transformEstateData(response);
  	})
  }

}
