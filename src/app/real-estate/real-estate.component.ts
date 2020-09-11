import { Component, OnInit } from '@angular/core';
import { EstateService } from './estate.service';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  styleUrls: ['./real-estate.component.css']
})


export class RealEstateComponent implements OnInit {
 
  public choosenEstate;

  constructor(private estateService:EstateService) { }

  ngOnInit(): void {
  		this.estateService.estateSubject.subscribe((data)=>{
  			this.choosenEstate = data;
  		})
  }

}
