////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/// This file and the source code provided can be used only for
/// the projects and assignments of this course

/// Last Edit by Dr. Atef Bader: 1/30/2019


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';



import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatOptionModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';


import { PlacesService } from './places.service';

import { FindComponent } from './components/find/find.component';
import { ListOfPlacesComponent } from './components/list-of-places/list-of-places.component';
import { ListOfStationsComponent } from './components/list-of-stations/list-of-stations.component';
import {RealTimeLineComponent} from './components/real-time-line-chart/real-time-line-chart.component'

import { HeatMapComponent } from './components/divvy-heat-map/heat-map.component';

import { BarChartComponent } from './components/yelp-reviews-chart/yelp-reviews-bar-chart.component';
import { DivvyTripsChartComponent } from './components/divvy-trips-chart/divvy-trips-chart.component';

import { RealTimeSMALineComponent } from './components/real-time-sma-line-chart/real-time-sma-line-chart.component';
import { DivvyCustomHeatMapComponent } from './components/divvy-custom-heat-map/divvy-custom-heat-map.component';



const routes: Routes = [
  { path: 'find', component: FindComponent},
  { path: 'list_of_places', component: ListOfPlacesComponent},
  { path: 'list_of_stations', component: ListOfStationsComponent},
  { path: 'realtime_line_chart', component: RealTimeLineComponent},
  { path: 'heat_map', component: HeatMapComponent},
  { path: 'divvy_custom_heat_map', component: DivvyCustomHeatMapComponent},
  { path: 'yelp_reviews_chart', component: BarChartComponent},
  { path: 'divvy_trips_chart', component: DivvyTripsChartComponent},
  { path: 'sma_chart', component: RealTimeSMALineComponent},




  { path: '', redirectTo: 'find', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    ListOfPlacesComponent,
    ListOfStationsComponent,
    RealTimeLineComponent,
    HeatMapComponent,
    RealTimeSMALineComponent,
    BarChartComponent,
    DivvyTripsChartComponent,
    DivvyCustomHeatMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    SatDatepickerModule,
    SatNativeDateModule,




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// SETUP NEEDED ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//  1. Create your API key from Google Developer Website
//  2. Install AGM package: npm install @agm/core @ng-bootstrap/ng-bootstrap --
//  3. Here is the URL for an online IDE for NG and TS that could be used to experiment
//  4. AGM live demo is loacted at this URL: https://stackblitz.com/edit/angular-google-maps-demo
    


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


    AgmCoreModule.forRoot({apiKey: 'AIzaSyDzm787Ko78P1qfsKqZ7mdF-QGvgQJSDXM'+ '&libraries=visualization'}),
    FormsModule,
    NgbModule,
    MatCheckboxModule

  ],

  providers: [PlacesService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})

export class AppModule { }
