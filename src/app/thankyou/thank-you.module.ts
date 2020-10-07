import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThankyouComponent} from './thankyou.component';
import {ThankYouMessageComponent} from './thank-you-message/thank-you-message.component';
import {Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ 
        ThankyouComponent,
        ThankYouMessageComponent
    ],
    imports:[
    	CommonModule,
    	HttpClientModule,
        RouterModule.forChild([
            {path:'thankyou', component:ThankyouComponent,
              children:[
              {path:'message', component:ThankYouMessageComponent}
              ]}
        ])
    ],
    exports: [
        ThankyouComponent,
        ThankYouMessageComponent
    ]
    
})

export class ThankYouModule{
}