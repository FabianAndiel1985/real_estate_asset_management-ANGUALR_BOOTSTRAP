import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-estate-detail',
  templateUrl: './estate-detail.component.html',
  styleUrls: ['./estate-detail.component.css']
})
export class EstateDetailComponent implements OnInit {

  constructor() { }

  @Input() choosenEstate;

  ngOnInit(): void {
  }

}
