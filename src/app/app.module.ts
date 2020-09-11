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
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankYouMessageComponent } from './thankyou/thank-you-message/thank-you-message.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { EstatesListComponent } from './real-estate/estates-list/estates-list.component';
import { EstateOverviewComponent } from './real-estate/estates-list/estate-overview/estate-overview.component';
import { EstateDetailComponent } from './real-estate/estate-detail/estate-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PageNotFoundComponent,
    GoPreviousPageDirective,
    ContactComponent,
    ThankyouComponent,
    ThankYouMessageComponent,
    FooterComponent,
    NavigationComponent,
    RealEstateComponent,
    EstatesListComponent,
    EstateOverviewComponent,
    EstateDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
