import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './auth/models/user';
import AuthenticatedUser from './auth/models/AuthenticatedUser' ;
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

userSubject = new BehaviorSubject<AuthenticatedUser>(null);

constructor(private http:HttpClient, private router:Router) { }

login(user:User): Observable<any>  {
  console.log(user.email, user.password);
  return this.http.post<User>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBoI6eaE0XVgfFAA3eocXXEqJady8Lk2GU",{"email":user.email,"password":user.password,"returnSecureToken":true}).pipe(
  tap(response=> {
    this.createLoggedInUserSubject(response);
  })
  )
}

createLoggedInUserSubject({email,expiresIn,idToken,localId,...rest}) {

  const authenticatedUser = new AuthenticatedUser(
    email,
    expiresIn,
    idToken,
    localId
  );

    this.userSubject.next(authenticatedUser);
}



logout() {
  this.userSubject.next(null);
  this.router.navigate(['/admin-login']);
}


}
