import { Component, OnInit, Input } from '@angular/core';
import { EstateService } from '../../estate.service';

@Component({
  selector: 'app-estate-overview',
  templateUrl: './estate-overview.component.html',
  styleUrls: ['./estate-overview.component.css']
})
export class EstateOverviewComponent implements OnInit {
  
  @Input() estate;

  constructor(private estateService:EstateService) { }

  ngOnInit(): void {
  }

  onChooseEstate(){
  	this.estateService.emitChoosenEstate(this.estate);
    window.scrollTo(0,0);
  }

}
