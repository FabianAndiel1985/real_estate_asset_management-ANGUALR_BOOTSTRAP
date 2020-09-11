import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EstateService {

  constructor(private http:HttpClient) { }

  getEstateData() {
  	return this.http.get('https://realestateassetmanest.firebaseio.com/estates.json');
  }






}
