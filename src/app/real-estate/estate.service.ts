import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EstateService {

  constructor(private http:HttpClient) { }

  estateSubject = new Subject<any>();

  getEstateData() {
  	return this.http.get('https://realestateassetmanest.firebaseio.com/estates.json');
  }

  emitChoosenEstate(estate) {
  	this.estateSubject.next(estate);
  }

}
