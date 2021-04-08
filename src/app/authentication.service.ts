import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './auth/models/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

login(user:User): Observable<any>  {
return this.http.post<User>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyBoI6eaE0XVgfFAA3eocXXEqJady8Lk2GU",{"email":user.email,"password":user.password,"returnSecureToken":true})
}


}
