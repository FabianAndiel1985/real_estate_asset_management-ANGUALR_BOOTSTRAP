import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GoPreviousPageDirective } from './go-previous-page.directive';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationDirective } from './navigation/navigation.directive';
import {ThankYouModule} from './thankyou/thank-you.module';
import { AuthComponent } from './auth/auth.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    GoPreviousPageDirective,
    ContactComponent,
    FooterComponent,
    NavigationComponent,
    NavigationDirective,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    ThankYouModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
