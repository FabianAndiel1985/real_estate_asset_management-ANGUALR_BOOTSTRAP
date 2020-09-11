import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estate-overview',
  templateUrl: './estate-overview.component.html',
  styleUrls: ['./estate-overview.component.css']
})
export class EstateOverviewComponent implements OnInit {
  
  @Input() estate;

  constructor() { }

  ngOnInit(): void {
  }

}
