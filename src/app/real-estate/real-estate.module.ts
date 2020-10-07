import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RealEstateComponent } from './real-estate.component';
import { EstatesListComponent } from './estates-list/estates-list.component';
import { EstateOverviewComponent } from './estates-list/estate-overview/estate-overview.component';
import { EstateDetailComponent } from './estate-detail/estate-detail.component';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [ 
	 RealEstateComponent,
     EstatesListComponent,
     EstateOverviewComponent,
     EstateDetailComponent
    ],
    imports:[
    	CommonModule,
    	FormsModule,
    	HttpClientModule,
        RouterModule.forChild([
            {path:'real-estate', component:RealEstateComponent}
        ])
    ],
    exports: [
	 RealEstateComponent,
     EstatesListComponent,
     EstateOverviewComponent,
     EstateDetailComponent
    ]
    
})

export class RealEstateModule{



}