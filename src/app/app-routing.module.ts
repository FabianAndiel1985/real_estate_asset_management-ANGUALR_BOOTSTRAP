import {NgModule} from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [	
  {path:'', component:LandingComponent},
  {path:'contact', component:ContactComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
