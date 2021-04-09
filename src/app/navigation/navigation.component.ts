import { Subscription } from 'rxjs';
import { AuthenticationService } from './../authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  userSubscription: Subscription;
  isAuthenticated:boolean = false;


  constructor( private authService:AuthenticationService ) { }

  ngOnInit(): void {
    this.userSubscription = this.authService.userSubject.subscribe(
      data=> {
        this.isAuthenticated = !data ? false :true;
        console.log(this.isAuthenticated);
      }

    )
  }

  logout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

}
