import { AfterViewInit, Component,Input,ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as heatmap from 'heatmap.js'
import { google } from 'google-maps';

import { Station } from '../../station';
import { PlacesService } from '../../places.service';
import { Observable } from "rxjs";
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';
import * as moment from 'moment';

interface Location {
  lat: number;
  lng: number;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  label: string;
}
@Component({
  selector: 'app-divvy-custom-heat-map',
  templateUrl: './divvy-custom-heat-map.component.html',
  styleUrls: ['./divvy-custom-heat-map.scss']
})
export class DivvyCustomHeatMapComponent implements OnInit {
 // The following are tunable parameters that are used to display n samples
    // of divvy data on the heatMap

    datevar = new Date();

    FRAMES_PER_HOUR = 30;
    FRAMES_PER_DAY = 24;
    FRAMES_PER_WEEK = 7;

    PAST_HOUR =  'Past Hour';
    PAST_24_HOURS =  'Last 24 Hours';
    PAST_7_DAYS =  'Last 7 Days';

    
    newTimeRangeSelection = true;
    notNewTimeRangeSelection = false;

    timeRangeSelected = '12 - 1';

    google: google;
    gradient;
    gradientStep = -1;
    newGradient;
    distinct = [];
    stations:Station[];
    heatMapData: any[];
    timeArray:any;
    timeOffset = 0;
    timer;

    noOfDivvyDataSamplesRequested: number;
    noOfDivvyDataSamplesProcessed: number;

    currentChicagoTime;

    timeStamp;
    currentTime;

    
    timeValues = [
      { id : '12 - 1', value: '12 AM - 1 AM'},
      { id : '1 - 2', value: '1 AM - 2 AM'},
      { id : '2 - 3', value: '2 AM - 3 AM'},
      { id : '3 - 4', value: '3 AM - 4 AM'},
      { id : '4 - 5', value: '4 AM - 5 AM'},
      { id : '5 - 6', value: '5 AM - 6 AM'},
      { id : '6 - 7', value: '6 AM - 7 AM'},
      { id : '7 - 8', value: '7 AM - 8 AM'},
      { id : '8 - 9', value: '8 AM - 9 AM'},
      { id : '9 - 10', value: '9 AM - 10 AM'},
      { id : '10 - 11', value: '10 AM - 11 AM'},
      { id : '11 - 12', value: '11 AM - 12 AM'},
      { id : '12 - 13', value: '12 PM - 1 PM'},
      { id : '13 - 14', value: '1 PM - 2 PM'},
      { id : '14 - 15', value: '2 PM - 3 PM'},
      { id : '15 - 16', value: '3 PM - 4 PM'},
      { id : '16 - 17', value: '4 PM - 5 PM'},
      { id : '17 - 18', value: '5 PM - 6 PM'},
      { id : '18 - 19', value: '6 PM - 7 PM'},
      { id : '19 - 20', value: '7 PM - 8 PM'},
      { id : '20 - 21', value: '8 PM - 9 PM'},
      { id : '21 - 22', value: '9 PM - 10 PM'},
      { id : '22 - 23', value: '10 PM - 11 PM'},
      { id : '23 - 24', value: '11 PM - 12 PM'},
    ];

    getTime = { 
      '12 - 1': new Date('Nov 20, 2022 00:00:00 GMT-06:00'),
     '2 - 3' : new Date('Nov 20, 2022 02:00:00 GMT-06:00'),
     '3 - 4' : new Date('Nov 20, 2022 03:00:00 GMT-06:00'),
     '1 - 2' : new Date('Nov 20, 2022 01:00:00 GMT-06:00'),
     '4 - 5' : new Date('Nov 20, 2022 04:00:00 GMT-06:00'),
     '5 - 6' : new Date('Nov 20, 2022 05:00:00 GMT-06:00'),
    '6 - 7' : new Date('Nov 20, 2022 06:00:00 GMT-06:00'),
     '7 - 8' : new Date('Nov 20, 2022 07:00:00 GMT-06:00'),
    '8 - 9' : new Date('Nov 20, 2022 08:00:00 GMT-06:00'),
     '9 - 10': new Date('Nov 20, 2022 09:00:00 GMT-06:00'),
     '10 - 11' : new Date('Nov 20, 2022 10:00:00 GMT-06:00'),
     '11 - 12' : new Date('Nov 20, 2022 11:00:00 GMT-06:00'),
     '12 - 13' : new Date('Nov 20, 2022 12:00:00 GMT-06:00'),
     '13 - 14' : new Date('Nov 20, 2022 13:00:00 GMT-06:00'),
     '14 - 15' : new Date('Nov 20, 2022 14:00:00 GMT-06:00'),
     '15 - 16' : new Date('Nov 20, 2022 15:00:00 GMT-06:00'),
     '16 - 17' : new Date('Nov 20, 2022 16:00:00 GMT-06:00'),
     '17 - 18' : new Date('Nov 20, 2022 17:00:00 GMT-06:00'),
     '18 - 19' : new Date('Nov 20, 2022 18:00:00 GMT-06:00'),
     '19 - 20' : new Date('Nov 20, 2022 19:00:00 GMT-06:00'),
     '20 - 21' : new Date('Nov 20, 2022 20:00:00 GMT-06:00'),
     '21 - 22' : new Date('Nov 20, 2022 21:00:00 GMT-06:00'),
     '22 - 23' : new Date('Nov 20, 2022 22:00:00 GMT-06:00'),
     '23 - 24' : new Date('Nov 20, 2022 23:00:00 GMT-06:00')
    };

    

    private map: google.maps.Map = null;
    heatmap: google.maps.visualization.HeatmapLayer = null;

  


    constructor(private placesService:PlacesService) {

    }


    ngOnInit() {
      this.timeRangeSelected = '12 - 1';
      this.noOfDivvyDataSamplesProcessed=2;
    }




  
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

////////////////   Angular Callback for TimeRangeSelection

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////



  changeTimeRangeSelected(data){
    //console.log('this.timeRangeSelected', this.timeRangeSelected);
    this.clearHeatMap();
    this.noOfDivvyDataSamplesProcessed = 0;
    clearTimeout(this.timer);
    this.getDivvyStationsStatus(this.newTimeRangeSelection);

  }


  

  //////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  // A function used to prefix a single digit with a ZERO


  checkForSingleDigitAndPrefixZeroIfNeeded(digitValue) {

    if (digitValue < 10) 
      digitValue = "0" + digitValue;
    
    return digitValue;
  }



  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  getDivvyStationsStatus(timeRangeSelection){

    
    // The algorithm to collect log data for Divvy stations as follows:
    // Get current time and then rewind backward in time based on the time selection
    // 1 Hour  time selection     :  -60 * 60 * 1000 seconds
    // 24 hours  time selection   :  24 * -60 * 60 * 1000 seconds
    // 7 days time selection      :   7 * 24 * -60 * 60 * 1000 seconds

    // this is the time used to be displayed as label on the map
    var simulatedClockTime;
    var currentTime= new Date();

    var startTimeForDataCollection ;
    var currentTimeForDataCollection ;

    // What is the time-range selected? 1-Hour, 24-Hours, 7-days?
    // Based on the time-range selected we specify how many animation frames to display on th eheatmap 
    // for the Divvy logs collected from ElasticSearch
    // every data sample is displayed as a frame on the heatmap

      this.noOfDivvyDataSamplesRequested = this.FRAMES_PER_HOUR;
      console.log(this.timeRangeSelected);
      console.log(this.getTime['12 - 1'])
      startTimeForDataCollection = this.getTime[this.timeRangeSelected];
      currentTimeForDataCollection = new Date(startTimeForDataCollection.getTime()+this.timeOffset);
    



    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////


    /////////////     ADD YOUR CODE HERE      ///////////
    
    // Write your code to extend the above if statement with else block to handle
    //          timeRangeSelected == this.PAST_24_HOURS
    //          noOfDivvyDataSamplesRequested = this.FRAMES_PER_DAY
    // And
    //          timeRangeSelected == this.PAST_7_DAYS
    //          noOfDivvyDataSamplesRequested = this.FRAMES_PER_WEEK


    // The following are fine-tunable parameters 
    // They are used to specify how many data samples (Divvy heart-beats per Time-Unit)
    //      FRAMES_PER_HOUR = 30;
    //      FRAMES_PER_DAY = 24;
    //      FRAMES_PER_WEEK = 7;

    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////


    // Check to see if we collected the REQUESTED number of samples from Divvy logs on ElasticSearch
    // For example, for the past hour we collect 30 samples (2 minutes increments) and display 30 heatmap frames
    // For example, for the past 24 hours we collect 24 samples (1 hour increments) and display 24 heatmap frames


    if(this.noOfDivvyDataSamplesProcessed < this.noOfDivvyDataSamplesRequested){
      this.placesService.get_all_divvy_stations_data_custom_data(startTimeForDataCollection, timeRangeSelection).subscribe((data: Station[]) => {
        //console.log('getDivvyStationsStatus -- noOfDivvyDataSamplesProcessed=', this.noOfDivvyDataSamplesProcessed);
        this.noOfDivvyDataSamplesProcessed = this.noOfDivvyDataSamplesProcessed + 1;


        // Adjust time Offset for the next cycle by 2 minutes
        // for example: 2, 4, 6, 8, 10, ...
        // So, current time is 

          this.timeOffset = (this.noOfDivvyDataSamplesProcessed) * (60 * 1000 * 2);

        // Create digital clock as label on the heatmap
        // The convention is to prefix with ZERO the single digit for month, day, jour, minute, second
        // in the digital clock/time

        //The value returned by getMonth() is an integer between 0 and 11. 
        // 0 corresponds to January, 1 to February
        console.log(startTimeForDataCollection.getTime())
        currentTimeForDataCollection = new Date(startTimeForDataCollection.getTime()+this.timeOffset);
        let monthNumber = this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getMonth()+ 1) ;
        simulatedClockTime = currentTimeForDataCollection.getFullYear() +'-'+ 
                              monthNumber + '-' +
                              this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getDate()) + '\t' +
                              this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getHours()) + ':' +
                              this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getMinutes()) + ':' +
                              this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getSeconds());

        this.timeStamp = simulatedClockTime;



        // Now clear the HeatMap and then plot the data on the heatmap
        this.clearHeatMap();
        this.plot_availableDocksInDivvyStations_on_heatMap(data);
        

        // Not a new time-range selection, so continue calling the same method but 
        // with new time offset increment
        this.timer = setTimeout(() =>  this.getDivvyStationsStatus(this.notNewTimeRangeSelection) , 300);
      });
    }

    // we are done ... reset time offset to zero
    this.timeOffset = 0;
  }

  ///////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  plot_availableDocksInDivvyStations_on_heatMap(availableDocksInDivvyStations){

    let locationsOfAvailableDocksInDivvyStations=[];

    this.stations = availableDocksInDivvyStations;
    //console.log("data",this.stations.length);

    for (let i = 0; i < this.stations.length; i++) {
      let divvy_dock_station_location = {
        location: new google.maps.LatLng(this.stations[i].latitude, this.stations[i].longitude),
        weight: this.stations[i].availableDocks
      }
      locationsOfAvailableDocksInDivvyStations.push(divvy_dock_station_location);
    }

    this.heatMapData = locationsOfAvailableDocksInDivvyStations;

    this.heatmap = new google.maps.visualization.HeatmapLayer({
      data: this.heatMapData
    });

    this.heatmap.setMap(this.map);
  }





  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  public location:Location = {
    lat: 41.882607,
    lng: -87.643548,
    label: 'You are Here',
    zoom: 10
  };


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

  onMapLoad(mapInstance: google.maps.Map) {
    // default display is Past Hour data
    this.timeRangeSelected = '17 - 18';

    this.map = mapInstance;

    this.getDivvyStationsStatus(true);

  }


  clearHeatMap(){
    if(this.heatmap){
      this.heatmap.setMap(null);
      this.heatMapData =[];
    }

  }


  ngOnDestroy() {

      this.map  = null;
      this.heatmap = null;
         
  }
}
