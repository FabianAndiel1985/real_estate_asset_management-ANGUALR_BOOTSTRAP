import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './contact/contact.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ThankYouMessageComponent} from './thankyou/thank-you-message/thank-you-message.component';


const routes: Routes = [	
  {path:'', component:LandingComponent},
  {path:'contact', component:ContactComponent},
  {path:'thankyou', component:ThankyouComponent,
  children:[
  {path:'message', component:ThankYouMessageComponent}
  ]},
  {path: '**', component:PageNotFoundComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
