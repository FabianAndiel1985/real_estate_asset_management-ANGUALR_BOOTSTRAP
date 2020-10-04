import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './contact/contact.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
import {ThankYouMessageComponent} from './thankyou/thank-you-message/thank-you-message.component';
import {RealEstateComponent} from  './real-estate/real-estate.component';


const routes: Routes = [	
  {path:'', component:LandingComponent},
  {path:'contact', component:ContactComponent},
  //Den 'real-estate' path würde ich gerne ins Feature-Modul auslagern
  {path:'real-estate', component:RealEstateComponent},
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
