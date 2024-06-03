(self["webpackChunkp1_app"] = self["webpackChunkp1_app"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 57822);




class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'ChicagoSocialHub-app';
    }
    callHomePage() {
        console.log("called find");
        this.registerView = "regView2";
        this.router.navigate(['/find']);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 13, vars: 0, consts: [["text-align", "center", 3, "click"], [1, "fill-remaining-space"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_toolbar_click_0_listener() { return ctx.callHomePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Chicago Social Hub ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "restaurant");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "local_bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "local_cafe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: [".mat-toolbar[_ngcontent-%COMP%] {\r\n    background:purple;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n  .fill-remaining-space[_ngcontent-%COMP%] {\r\n    \r\n    text-align: center;\r\n    flex: 1 1 auto;\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7O0FBRWhCOzs7RUFHRTtJQUNFO3FEQUNpRDtJQUNqRCxrQkFBa0I7SUFDbEIsY0FBYzs7RUFFaEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xyXG4gICAgYmFja2dyb3VuZDpwdXJwbGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG59XHJcblxyXG5cclxuICAuZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gICAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAiXX0= */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3191);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @agm/core */ 93333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! saturn-datepicker */ 78493);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./places.service */ 63136);
/* harmony import */ var _components_find_find_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/find/find.component */ 38889);
/* harmony import */ var _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/list-of-places/list-of-places.component */ 86712);
/* harmony import */ var _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/list-of-stations/list-of-stations.component */ 10851);
/* harmony import */ var _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/real-time-line-chart/real-time-line-chart.component */ 53957);
/* harmony import */ var _components_divvy_heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/divvy-heat-map/heat-map.component */ 50526);
/* harmony import */ var _components_yelp_reviews_chart_yelp_reviews_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/yelp-reviews-chart/yelp-reviews-bar-chart.component */ 1591);
/* harmony import */ var _components_divvy_trips_chart_divvy_trips_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/divvy-trips-chart/divvy-trips-chart.component */ 31743);
/* harmony import */ var _components_real_time_sma_line_chart_real_time_sma_line_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/real-time-sma-line-chart/real-time-sma-line-chart.component */ 91679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
/// This file and the source code provided can be used only for
/// the projects and assignments of this course
/// Last Edit by Dr. Atef Bader: 1/30/2019
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


































const routes = [
    { path: 'find', component: _components_find_find_component__WEBPACK_IMPORTED_MODULE_2__.FindComponent },
    { path: 'list_of_places', component: _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_3__.ListOfPlacesComponent },
    { path: 'list_of_stations', component: _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_4__.ListOfStationsComponent },
    { path: 'realtime_line_chart', component: _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_5__.RealTimeLineComponent },
    { path: 'heat_map', component: _components_divvy_heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_6__.HeatMapComponent },
    { path: 'yelp_reviews_chart', component: _components_yelp_reviews_chart_yelp_reviews_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__.BarChartComponent },
    { path: 'divvy_trips_chart', component: _components_divvy_trips_chart_divvy_trips_chart_component__WEBPACK_IMPORTED_MODULE_8__.DivvyTripsChartComponent },
    { path: 'sma_chart', component: _components_real_time_sma_line_chart_real_time_sma_line_chart_component__WEBPACK_IMPORTED_MODULE_9__.RealTimeSMALineComponent },
    { path: '', redirectTo: 'find', pathMatch: 'full' }
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_places_service__WEBPACK_IMPORTED_MODULE_1__.PlacesService, _agm_core__WEBPACK_IMPORTED_MODULE_11__.GoogleMapsAPIWrapper], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_28__.SatDatepickerModule,
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_28__.SatNativeDateModule,
        /////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////// SETUP NEEDED ////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////
        //  1. Create your API key from Google Developer Website
        //  2. Install AGM package: npm install @agm/core @ng-bootstrap/ng-bootstrap --
        //  3. Here is the URL for an online IDE for NG and TS that could be used to experiment
        //  4. AGM live demo is loacted at this URL: https://stackblitz.com/edit/angular-google-maps-demo
        /////////////////////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////////////////////
        _agm_core__WEBPACK_IMPORTED_MODULE_11__.AgmCoreModule.forRoot({ apiKey: 'ADD-YOUR-API-KEY-HERE' + '&libraries=visualization' }),
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckboxModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _components_find_find_component__WEBPACK_IMPORTED_MODULE_2__.FindComponent,
        _components_list_of_places_list_of_places_component__WEBPACK_IMPORTED_MODULE_3__.ListOfPlacesComponent,
        _components_list_of_stations_list_of_stations_component__WEBPACK_IMPORTED_MODULE_4__.ListOfStationsComponent,
        _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_5__.RealTimeLineComponent,
        _components_divvy_heat_map_heat_map_component__WEBPACK_IMPORTED_MODULE_6__.HeatMapComponent,
        _components_real_time_sma_line_chart_real_time_sma_line_chart_component__WEBPACK_IMPORTED_MODULE_9__.RealTimeSMALineComponent,
        _components_yelp_reviews_chart_yelp_reviews_bar_chart_component__WEBPACK_IMPORTED_MODULE_7__.BarChartComponent,
        _components_divvy_trips_chart_divvy_trips_chart_component__WEBPACK_IMPORTED_MODULE_8__.DivvyTripsChartComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOptionModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__.MatCardModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_25__.MatTableModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_26__.MatDividerModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__.MatSnackBarModule,
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_28__.SatDatepickerModule,
        saturn_datepicker__WEBPACK_IMPORTED_MODULE_28__.SatNativeDateModule, _agm_core__WEBPACK_IMPORTED_MODULE_11__.AgmCoreModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_29__.NgbModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__.MatCheckboxModule] }); })();


/***/ }),

/***/ 50526:
/*!*****************************************************************!*\
  !*** ./src/app/components/divvy-heat-map/heat-map.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeatMapComponent": () => (/* binding */ HeatMapComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/interval */ 95363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @agm/core */ 93333);














function HeatMapComponent_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeValue_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", timeValue_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", timeValue_r1.value, " ");
} }
class HeatMapComponent {
    constructor(placesService) {
        this.placesService = placesService;
        // The following are tunable parameters that are used to display n samples
        // of divvy data on the heatMap
        this.FRAMES_PER_HOUR = 30;
        this.FRAMES_PER_DAY = 24;
        this.FRAMES_PER_WEEK = 7;
        this.PAST_HOUR = 'Past Hour';
        this.PAST_24_HOURS = 'Last 24 Hours';
        this.PAST_7_DAYS = 'Last 7 Days';
        this.newTimeRangeSelection = true;
        this.notNewTimeRangeSelection = false;
        this.timeRangeSelected = this.PAST_HOUR;
        this.gradientStep = -1;
        this.distinct = [];
        this.timeOffset = 0;
        this.timeValues = [
            { id: this.PAST_HOUR, value: this.PAST_HOUR },
            { id: this.PAST_24_HOURS, value: this.PAST_24_HOURS },
            { id: this.PAST_7_DAYS, value: this.PAST_7_DAYS }
        ];
        this.map = null;
        this.heatmap = null;
        ////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////
        this.location = {
            lat: 41.882607,
            lng: -87.643548,
            label: 'You are Here',
            zoom: 10
        };
    }
    ngOnInit() {
        this.timeRangeSelected = this.PAST_HOUR;
        this.noOfDivvyDataSamplesProcessed = 2;
    }
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    ////////////////   Angular Callback for TimeRangeSelection
    //////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    changeTimeRangeSelected(data) {
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
    getDivvyStationsStatus(timeRangeSelection) {
        // The algorithm to collect log data for Divvy stations as follows:
        // Get current time and then rewind backward in time based on the time selection
        // 1 Hour  time selection     :  -60 * 60 * 1000 seconds
        // 24 hours  time selection   :  24 * -60 * 60 * 1000 seconds
        // 7 days time selection      :   7 * 24 * -60 * 60 * 1000 seconds
        // this is the time used to be displayed as label on the map
        var simulatedClockTime;
        var currentTime = new Date();
        var startTimeForDataCollection;
        var currentTimeForDataCollection;
        // What is the time-range selected? 1-Hour, 24-Hours, 7-days?
        // Based on the time-range selected we specify how many animation frames to display on th eheatmap 
        // for the Divvy logs collected from ElasticSearch
        // every data sample is displayed as a frame on the heatmap
        if (this.timeRangeSelected == this.PAST_HOUR) {
            this.noOfDivvyDataSamplesRequested = this.FRAMES_PER_HOUR;
            startTimeForDataCollection = new Date(currentTime.getTime() - 60 * 60 * 1000);
            currentTimeForDataCollection = new Date(startTimeForDataCollection.getTime() + this.timeOffset);
        }
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
        //console.log('this.noOfDivvyDataSamplesRequested = ', this.noOfDivvyDataSamplesRequested);
        //console.log('startTimeForDataCollection= ', startTimeForDataCollection);
        //console.log('currentTimeForDataCollection= ', currentTimeForDataCollection);
        //console.log('this.timeRangeSelected = ', this.timeRangeSelected);
        // Check to see if we collected the REQUESTED number of samples from Divvy logs on ElasticSearch
        // For example, for the past hour we collect 30 samples (2 minutes increments) and display 30 heatmap frames
        // For example, for the past 24 hours we collect 24 samples (1 hour increments) and display 24 heatmap frames
        if (this.noOfDivvyDataSamplesProcessed < this.noOfDivvyDataSamplesRequested) {
            this.placesService.get_all_divvy_stations_data(this.timeRangeSelected, timeRangeSelection).subscribe((data) => {
                //console.log('getDivvyStationsStatus -- noOfDivvyDataSamplesProcessed=', this.noOfDivvyDataSamplesProcessed);
                this.noOfDivvyDataSamplesProcessed = this.noOfDivvyDataSamplesProcessed + 1;
                // Adjust time Offset for the next cycle by 2 minutes
                // for example: 2, 4, 6, 8, 10, ...
                // So, current time is 
                if (this.timeRangeSelected == this.PAST_HOUR) {
                    this.timeOffset = (this.noOfDivvyDataSamplesProcessed) * (60 * 1000 * 2);
                }
                else if (this.timeRangeSelected == this.PAST_24_HOURS) {
                    this.timeOffset = (this.noOfDivvyDataSamplesProcessed) * (60 * 60 * 1000);
                }
                else if (this.timeRangeSelected == this.PAST_7_DAYS) {
                    this.timeOffset = (this.noOfDivvyDataSamplesProcessed) * (24 * 60 * 60 * 1000);
                }
                // Create digital clock as label on the heatmap
                // The convention is to prefix with ZERO the single digit for month, day, jour, minute, second
                // in the digital clock/time
                //The value returned by getMonth() is an integer between 0 and 11. 
                // 0 corresponds to January, 1 to February
                currentTimeForDataCollection = new Date(startTimeForDataCollection.getTime() + this.timeOffset);
                let monthNumber = this.checkForSingleDigitAndPrefixZeroIfNeeded(currentTimeForDataCollection.getMonth() + 1);
                simulatedClockTime = currentTimeForDataCollection.getFullYear() + '-' +
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
                this.timer = setTimeout(() => this.getDivvyStationsStatus(this.notNewTimeRangeSelection), 300);
            });
        }
        // we are done ... reset time offset to zero
        this.timeOffset = 0;
    }
    ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////
    plot_availableDocksInDivvyStations_on_heatMap(availableDocksInDivvyStations) {
        let locationsOfAvailableDocksInDivvyStations = [];
        this.stations = availableDocksInDivvyStations;
        //console.log("data",this.stations.length);
        for (let i = 0; i < this.stations.length; i++) {
            let divvy_dock_station_location = {
                location: new google.maps.LatLng(this.stations[i].latitude, this.stations[i].longitude),
                weight: this.stations[i].availableDocks
            };
            locationsOfAvailableDocksInDivvyStations.push(divvy_dock_station_location);
        }
        this.heatMapData = locationsOfAvailableDocksInDivvyStations;
        this.heatmap = new google.maps.visualization.HeatmapLayer({
            data: this.heatMapData
        });
        this.heatmap.setMap(this.map);
    }
    /////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////
    onMapLoad(mapInstance) {
        // default display is Past Hour data
        this.timeRangeSelected = this.PAST_HOUR;
        this.map = mapInstance;
        this.getDivvyStationsStatus(true);
    }
    clearHeatMap() {
        if (this.heatmap) {
            this.heatmap.setMap(null);
            this.heatMapData = [];
        }
    }
    ngOnDestroy() {
        this.map = null;
        this.heatmap = null;
    }
}
HeatMapComponent.ɵfac = function HeatMapComponent_Factory(t) { return new (t || HeatMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_1__.PlacesService)); };
HeatMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeatMapComponent, selectors: [["heatmap"]], decls: 18, vars: 8, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/list_of_stations", 2, "float", "right"], ["placeholder", "Time Range:", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["id", "floating-panel"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "latitudeChange", "longitudeChange", "zoomChange", "mapReady"], [3, "value"]], template: function HeatMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-card")(3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Go Back \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeatMapComponent_Template_mat_select_ngModelChange_11_listener($event) { return ctx.timeRangeSelected = $event; })("ngModelChange", function HeatMapComponent_Template_mat_select_ngModelChange_11_listener($event) { return ctx.changeTimeRangeSelected($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HeatMapComponent_mat_option_12_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "mat-divider")(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "agm-map", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("latitudeChange", function HeatMapComponent_Template_agm_map_latitudeChange_17_listener($event) { return ctx.location.lat = $event; })("longitudeChange", function HeatMapComponent_Template_agm_map_longitudeChange_17_listener($event) { return ctx.location.lng = $event; })("zoomChange", function HeatMapComponent_Template_agm_map_zoomChange_17_listener($event) { return ctx.location.zoom = $event; })("mapReady", function HeatMapComponent_Template_agm_map_mapReady_17_listener($event) { return ctx.onMapLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.timeRangeSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.timeValues);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.timeStamp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.location.lat)("longitude", ctx.location.lng)("zoom", ctx.location.zoom)("disableDefaultUI", true)("zoomControl", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _agm_core__WEBPACK_IMPORTED_MODULE_13__.AgmMap, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: ["agm-map[_ngcontent-%COMP%] {\n  height: 600px;\n}\n\n#map_canvas[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n}\n\n#floating-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 378px;\n  left: 64%;\n  color: black;\n  font-size: large;\n  z-index: 5;\n  padding: 5px;\n  text-align: center;\n  font-family: \"Roboto\", \"sans-serif\";\n  line-height: 30px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYXQtbWFwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxJbGxpbm9pcyUyMFRlY2hcXENvdXJzZXNcXEVXQVxcQXNzaWdubWVudCUyMDRcXENoaWNhZ29Tb2NpYWxIdWJfVHV0b3JpYWxfMl9Bbmd1bGFyXzE0X1N0dWRlbnRcXENoaWNhZ29Tb2NpYWxIdWJfVHV0b3JpYWxfMl9Bbmd1bGFyXzE0X1N0dWRlbnRcXGZyb250ZW5kXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcZGl2dnktaGVhdC1tYXBcXGhlYXQtbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDR0oiLCJmaWxlIjoiaGVhdC1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhZ20tbWFwIHtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbn1cclxuI21hcF9jYW52YXN7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIGhlaWdodDo1MDBweDtcclxufVxyXG4jZmxvYXRpbmctcGFuZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzNzhweDtcclxuICAgIGxlZnQ6IDY0JTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCdzYW5zLXNlcmlmJztcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuXG4jbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxuI2Zsb2F0aW5nLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDM3OHB4O1xuICBsZWZ0OiA2NCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgei1pbmRleDogNTtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 31743:
/*!*****************************************************************************!*\
  !*** ./src/app/components/divvy-trips-chart/divvy-trips-chart.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivvyTripsChartComponent": () => (/* binding */ DivvyTripsChartComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ 67615);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ 35122);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-axis */ 18210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! saturn-datepicker */ 78493);















class DivvyTripsChartComponent {
    constructor(placesService, router, http, fb) {
        this.placesService = placesService;
        this.router = router;
        this.http = http;
        this.divvyTripsCounts = [];
        this.margin = { top: 20, right: 100, bottom: 150, left: 100 };
        this.collectDays = [];
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
        this.form = fb.group({
            date: [{ begin: new Date(2018, 9, 8), end: new Date(2018, 9, 14) }]
        });
    }
    ngOnInit() {
        // Default display is for first week of 2018 fourth quarter
        this.minDate = new Date('10/01/2018');
        this.maxDate = new Date('12/31/2018');
        this.dates_of_week_days = this.getDates('2018-10-01', '2018-10-07');
        console.log(this.dates_of_week_days);
        for (var i = 0; i < this.dates_of_week_days.length; i++) {
            var daydata = new Date(this.dates_of_week_days[i]).getDay() + 1;
            if (daydata == 7) {
                daydata = 0;
            }
            this.getDivvyTripsCountsPerDay(daydata, new Date(this.dates_of_week_days[i]));
        }
        this.form.valueChanges.subscribe((res) => {
            console.log('this.form.valueChanges selected');
            console.log('res.date.begin=', res.date.begin);
            console.log('res.date.end=', res.date.end);
            this.updateChart();
            this.collectDays = [];
            console.log(res);
            this.startDate = new Date(res.date.begin);
            this.endDate = new Date(res.date.end);
            this.dates_of_week_days = this.getDates(this.startDate, this.endDate);
            console.log(this.dates_of_week_days);
            for (var i = 0; i < this.dates_of_week_days.length; i++) {
                var daydata = new Date(this.dates_of_week_days[i]).getDay() + 1;
                if (daydata == 7) {
                    daydata = 0;
                }
                this.collectDays.push(daydata);
                console.log("length", this.collectDays.length);
                if (this.collectDays.length > 7) {
                    console.log("Select a week");
                    console.log("datasliced", this.collectDays.slice(-7).pop());
                }
                else {
                    this.getDivvyTripsCountsPerDay(daydata, new Date(this.dates_of_week_days[i]));
                }
            }
        });
    }
    getDivvyTripsCountsPerDay(day, selectedDate) {
        this.placesService.getDivvyTripsCountsPerDay(day, selectedDate).subscribe(() => {
            this.getDivvyTripsCounts(day);
        });
    }
    getDivvyTripsCounts(day) {
        if (day == 0) {
            this.chart_7_name = 'Sunday';
            this.placesService
                .getDivvyTripsCountsForSunday()
                .subscribe((data) => {
                this.divvyTripsCounts = data;
                var id = "#svg";
                this.initSvg(id);
                this.initAxis();
                this.drawAxis();
                this.updateChartBars(this.divvyTripsCounts);
            });
        }
        else if (day == 1) {
            this.chart_1_name = 'Monday';
            this.placesService
                .getDivvyTripsCountsForMonday()
                .subscribe((data) => {
                this.divvyTripsCounts = data;
                var id = "#svg1";
                this.initSvg(id);
                this.initAxis();
                this.drawAxis();
                this.updateChartBars(this.divvyTripsCounts);
            });
        }
        else if (day == 2) {
            this.chart_2_name = 'Tuesday';
            this.placesService
                .getDivvyTripsCountsForTuesday()
                .subscribe((data) => {
                this.divvyTripsCounts = data;
                var id = "#svg2";
                this.initSvg(id);
                this.initAxis();
                this.drawAxis();
                this.updateChartBars(this.divvyTripsCounts);
            });
        }
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////
        /////////////     ADD YOUR CODE HERE      ///////////
        // Extend the else if block above to add and plot the charts for
        // Wednesday, Thursday, Friday, and Saturday
        /////////////////////////////////////////////////////
        /////////////////////////////////////////////////////
    }
    initSvg(id) {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(id);
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
    initAxis() {
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_4__["default"]().rangeRound([0, this.width]).padding(0.2);
        this.y = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().range([this.height, 0]).domain([0, 100]);
        this.x.domain(this.divvyTripsCounts.map((d) => d.hour_timestamp));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_2__.max(this.divvyTripsCounts, (d) => Number(d.total_trips))]).nice();
    }
    drawAxis() {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__.axisBottom(this.x)
            .ticks(d3__WEBPACK_IMPORTED_MODULE_1__.timeHour.every(1)))
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(60)")
            .style("text-anchor", "start");
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__.axisLeft(this.y).ticks(10))
            .append("text")
            .attr("transform", "rotate(90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");
        this.svg.append("text")
            .attr("x", this.width / 2 + 80)
            .attr("y", this.height + 85)
            .style("text-anchor", "middle")
            .text("");
        //text label for y axis
        this.svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 58)
            .attr("x", 0 - (this.height / 2))
            //.attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Divvy Trips");
    }
    updateChartBars(data) {
        // Remove existing Bars
        var bars = this.g.selectAll(".bar")
            .remove()
            .exit()
            .data(data);
        // Create new rectangle/bar
        bars.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => this.x(d.hour_timestamp))
            .attr('y', (d) => this.y(d.total_trips))
            .attr('width', this.x.bandwidth())
            .attr('height', (d) => this.height - this.y(d.total_trips));
    }
    getDates(fromDate, toDate) {
        var dates = [];
        var startDate = moment__WEBPACK_IMPORTED_MODULE_0__(fromDate);
        var endDate = moment__WEBPACK_IMPORTED_MODULE_0__(toDate);
        while (startDate <= endDate) {
            dates.push(moment__WEBPACK_IMPORTED_MODULE_0__(startDate).format('YYYY-MM-DD'));
            startDate = moment__WEBPACK_IMPORTED_MODULE_0__(startDate).add(1, 'days');
        }
        return dates;
    }
    updateChart() {
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg1').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg2').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg3').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg4').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg5').select("g").remove().exit();
        d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg6').select("g").remove().exit();
    }
}
DivvyTripsChartComponent.ɵfac = function DivvyTripsChartComponent_Factory(t) { return new (t || DivvyTripsChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_3__.PlacesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.UntypedFormBuilder)); };
DivvyTripsChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DivvyTripsChartComponent, selectors: [["app-divvy-trips-chart"]], decls: 34, vars: 14, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/list_of_stations", 2, "float", "right", "margin-right", "20px"], [2, "margin-left", "40%", 3, "formGroup"], ["matInput", "", "placeholder", "Choose a week", "formControlName", "date", 3, "satDatepicker", "min", "max"], [3, "disabled", "rangeMode"], ["picker2", ""], ["matSuffix", "", 3, "for"], ["width", "500", "height", "400", "id", "svg1"], ["x", "250", "y", "15", "fill", "black"], ["width", "500", "height", "400", "id", "svg2"], ["width", "500", "height", "400", "id", "svg3"], ["width", "500", "height", "400", "id", "svg4"], ["width", "500", "height", "400", "id", "svg5"], ["width", "500", "height", "400", "id", "svg6"], ["width", "500", "height", "400", "id", "svg"]], template: function DivvyTripsChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "\nGo Back\n\u00A0 \u00A0 \u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "form", 1)(6, "section")(7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "input", 2)(9, "sat-datepicker", 3, 4)(11, "sat-datepicker-toggle", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "svg", 6)(14, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "svg", 8)(17, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "svg", 9)(20, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "svg", 10)(23, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "svg", 11)(26, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "svg", 12)(29, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "svg", 13)(32, "text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("satDatepicker", _r0)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.datepickerDisabled)("rangeMode", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_1_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_2_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_3_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_4_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_5_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_6_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.chart_7_name);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__.SatDatepicker, saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__.SatDatepickerInput, saturn_datepicker__WEBPACK_IMPORTED_MODULE_14__.SatDatepickerToggle], styles: ["[_nghost-%COMP%]     .bar {\r\n    fill: steelblue;\r\n}\r\n\r\n[_nghost-%COMP%]     .bar:hover {\r\n    fill: brown;\r\n}\r\n\r\n[_nghost-%COMP%]     .axis-title {\r\n    fill: none;\r\n    stroke: black;\r\n    stroke-width: 0.5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .space {\r\n    padding-right: 20px;\r\n}\r\n\r\n.custom-day[_ngcontent-%COMP%] {\r\n      text-align: center;\r\n      padding: 0.185rem 0.25rem;\r\n      display: inline-block;\r\n      height: 2rem;\r\n      width: 2rem;\r\n    }\r\n\r\n.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\r\n      background-color: rgb(2, 117, 216);\r\n      color: white;\r\n    }\r\n\r\n.custom-day.faded[_ngcontent-%COMP%] {\r\n      background-color: rgba(2, 117, 216, 0.5);\r\n    }\r\n\r\n.custom-day.selected[_ngcontent-%COMP%]{\r\n      background-color: rgba(255, 255, 0, .5);\r\n\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpdnZ5LXRyaXBzLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBQ0E7TUFDTSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixZQUFZO01BQ1osV0FBVztJQUNiOztBQUNBO01BQ0Usa0NBQWtDO01BQ2xDLFlBQVk7SUFDZDs7QUFDQTtNQUNFLHdDQUF3QztJQUMxQzs7QUFDQTtNQUNFLHVDQUF1Qzs7SUFFekMiLCJmaWxlIjoiZGl2dnktdHJpcHMtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCAuYmFyIHtcclxuICAgIGZpbGw6IHN0ZWVsYmx1ZTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5iYXI6aG92ZXIge1xyXG4gICAgZmlsbDogYnJvd247XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYXhpcy10aXRsZSB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiBibGFjaztcclxuICAgIHN0cm9rZS13aWR0aDogMC41cHg7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5zcGFjZSB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5jdXN0b20tZGF5IHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiAwLjE4NXJlbSAwLjI1cmVtO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgd2lkdGg6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5yYW5nZSwgLmN1c3RvbS1kYXk6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMiwgMTE3LCAyMTYpO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5mYWRlZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMiwgMTE3LCAyMTYsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWRheS5zZWxlY3RlZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMCwgLjUpO1xyXG5cclxuICAgIH1cclxuIl19 */"] });


/***/ }),

/***/ 38889:
/*!***************************************************!*\
  !*** ./src/app/components/find/find.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindComponent": () => (/* binding */ FindComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 71528);












const _c0 = function (a0) { return { color: a0 }; };
class FindComponent {
    constructor(placesService, fb, router) {
        this.placesService = placesService;
        this.fb = fb;
        this.router = router;
        this.hintColor = "#76FF03";
        this.createForm = this.fb.group({
            where: '',
            find: ''
        });
    }
    findPlaces(find, where) {
        this.placesService.findPlaces(find, where).subscribe(() => {
            this.router.navigate(['/list_of_places']);
        });
    }
    ngOnInit() {
    }
}
FindComponent.ɵfac = function FindComponent_Factory(t) { return new (t || FindComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_0__.PlacesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
FindComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FindComponent, selectors: [["app-find"]], decls: 31, vars: 7, consts: [[1, "create-form", 3, "formGroup"], [1, "field-full-width"], ["color", "blue"], ["align", "start", "matInput", "", "formControlName", "find"], ["find", ""], [3, "ngStyle"], ["align", "start", "matInput", "", "formControlName", "where"], ["where", ""], ["type", "submit", "mat-raised-button", "", 3, "click"]], template: function FindComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "mat-divider")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 0)(6, "mat-form-field", 1)(7, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Find");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Restaurants, Bars, Cafe, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br")(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 1)(16, "mat-label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Where");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Near me, ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "br")(23, "br")(24, "mat-divider")(25, "br")(26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FindComponent_Template_button_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.findPlaces(_r0.value, _r1.value)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Go \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.createForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.hintColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.hintColor));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider], styles: [".create-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    width: 75%;\r\n    align-items: center;\r\n    justify-content : center;\r\n}\r\n\r\n.field-full-width[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-icon[_ngcontent-%COMP%] {\r\n    background: purple;\r\n    color: white;\r\n}\r\n\r\n.example-form[_ngcontent-%COMP%] {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.mat-button[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%]{\r\n    background-color:purple;\r\n    color: white;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.bottom-left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 8px;\r\n  left: 16px;\r\n}\r\n\r\n\r\n\r\n.top-left[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 8px;\r\n  left: 16px;\r\n}\r\n\r\n\r\n\r\n.top-right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 8px;\r\n  right: 16px;\r\n}\r\n\r\n\r\n\r\n.bottom-right[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 8px;\r\n  right: 16px;\r\n}\r\n\r\n\r\n\r\n.centered[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBR0E7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTs7QUFFaEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxxQkFBcUI7O0FBQ3JCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7QUFDYjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUEsa0JBQWtCOztBQUNsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQyIsImZpbGUiOiJmaW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG59XHJcblxyXG4uZmllbGQtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cHVycGxlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogQm90dG9tIGxlZnQgdGV4dCAqL1xyXG4uYm90dG9tLWxlZnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICBsZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4vKiBUb3AgbGVmdCB0ZXh0ICovXHJcbi50b3AtbGVmdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogOHB4O1xyXG4gIGxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi8qIFRvcCByaWdodCB0ZXh0ICovXHJcbi50b3AtcmlnaHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDhweDtcclxuICByaWdodDogMTZweDtcclxufVxyXG5cclxuLyogQm90dG9tIHJpZ2h0IHRleHQgKi9cclxuLmJvdHRvbS1yaWdodCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIHJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4vKiBDZW50ZXJlZCB0ZXh0ICovXHJcbi5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 86712:
/*!***********************************************************************!*\
  !*** ./src/app/components/list-of-places/list-of-places.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfPlacesComponent": () => (/* binding */ ListOfPlacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);










function ListOfPlacesComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r16.name, " ");
} }
function ListOfPlacesComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r17.display_phone, " ");
} }
function ListOfPlacesComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r18.address1, " ");
} }
function ListOfPlacesComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Closed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r19.is_closed, " ");
} }
function ListOfPlacesComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r20.rating, " ");
} }
function ListOfPlacesComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Review Count");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ListOfPlacesComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r21.review_count, " ");
} }
function ListOfPlacesComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "th", 18);
} }
function ListOfPlacesComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListOfPlacesComponent_td_36_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const element_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r23.findStations(element_r22.name)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Divvy Near by");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function ListOfPlacesComponent_tr_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
} }
function ListOfPlacesComponent_tr_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
} }
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
class ListOfPlacesComponent {
    constructor(placesService, router, http) {
        this.placesService = placesService;
        this.router = router;
        this.http = http;
        this.uri = 'http://localhost:4000';
        this.circleRadius = 3000; // km
        this.location = {
            lat: 41.882607,
            lng: -87.643548,
            label: 'You are Here',
            zoom: 13
        };
        this.icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            scaledSize: {
                width: 60,
                height: 60
            }
        };
        this.places = [];
        this.name_of_place = " ";
        this.displayedColumns = ['name', 'display_phone', 'address1', 'is_closed', 'rating', 'review_count', 'Divvy'];
    }
    ngOnInit() {
        this.fetchPlaces();
    }
    fetchPlaces() {
        this.placesService
            .getPlaces()
            .subscribe((data) => {
            this.places = data;
        });
    }
    findStations(placeName) {
        this.name_of_place = placeName;
        for (var i = 0, len = this.places.length; i < len; i++) {
            if (this.places[i].name === placeName) { // strict equality test
                var place_selected = this.places[i];
                break;
            }
        }
        this.placesService.findStations(placeName).subscribe(() => {
            this.router.navigate(['/list_of_stations']);
        });
    }
}
ListOfPlacesComponent.ɵfac = function ListOfPlacesComponent_Factory(t) { return new (t || ListOfPlacesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_0__.PlacesService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ListOfPlacesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListOfPlacesComponent, selectors: [["app-list-of-places"]], decls: 39, vars: 3, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/find", 2, "float", "left"], ["mat-raised-button", "", "color", "primary", "routerLink", "/yelp_reviews_chart"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "display_phone"], ["matColumnDef", "address1"], ["matColumnDef", "is_closed"], ["matColumnDef", "rating"], ["matColumnDef", "review_count"], ["matColumnDef", "Divvy"], ["mat-header-cell", "", "class", "mat-column-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "mat-column-right", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "mat-column-right"], ["mat-cell", "", 1, "mat-column-right"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ListOfPlacesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-card")(2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Home \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Yelp Reviews Chart \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "bar_chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "br")(12, "br")(13, "mat-divider")(14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](16, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ListOfPlacesComponent_th_17_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ListOfPlacesComponent_td_18_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](19, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ListOfPlacesComponent_th_20_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ListOfPlacesComponent_td_21_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](22, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ListOfPlacesComponent_th_23_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ListOfPlacesComponent_td_24_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](25, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ListOfPlacesComponent_th_26_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ListOfPlacesComponent_td_27_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](28, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, ListOfPlacesComponent_th_29_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ListOfPlacesComponent_td_30_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](31, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ListOfPlacesComponent_th_32_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, ListOfPlacesComponent_td_33_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](34, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, ListOfPlacesComponent_th_35_Template, 1, 0, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ListOfPlacesComponent_td_36_Template, 3, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ListOfPlacesComponent_tr_37_Template, 1, 0, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ListOfPlacesComponent_tr_38_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.places);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nagm-map[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb2YtcGxhY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBR0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6Imxpc3Qtb2YtcGxhY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"] });
ListOfPlacesComponent.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ListOfPlacesComponent, factory: ListOfPlacesComponent.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10851:
/*!***************************************************************************!*\
  !*** ./src/app/components/list-of-stations/list-of-stations.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListOfStationsComponent": () => (/* binding */ ListOfStationsComponent)
/* harmony export */ });
/* harmony import */ var _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/real-time-line-chart/real-time-line-chart.component */ 53957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ 93333);










function ListOfStationsComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r30.id, " ");
} }
function ListOfStationsComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "stationName");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r31.stationName, " ");
} }
function ListOfStationsComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "availableBikes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r32.availableBikes, " ");
} }
function ListOfStationsComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "availableDocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r33.availableDocks, " ");
} }
function ListOfStationsComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "is_renting");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r34.is_renting, " ");
} }
function ListOfStationsComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "lastCommunicationTime ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r35.lastCommunicationTime, " ");
} }
function ListOfStationsComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "latitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r36.latitude, " ");
} }
function ListOfStationsComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "longitude");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r37.longitude, " ");
} }
function ListOfStationsComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r38.status, " ");
} }
function ListOfStationsComponent_th_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "totalDocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_th_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "totalDocks");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListOfStationsComponent_td_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r39.totalDocks, " ");
} }
function ListOfStationsComponent_th_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 31);
} }
function ListOfStationsComponent_td_58_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListOfStationsComponent_td_58_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r42); const element_r40 = restoredCtx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r41.getLineChart(element_r40.stationName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Real-Time Chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "show_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ListOfStationsComponent_th_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 31);
} }
function ListOfStationsComponent_td_61_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 32)(1, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListOfStationsComponent_td_61_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r45); const element_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r44.getSMALineChart(element_r43.stationName)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "SMA Chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "show_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
function ListOfStationsComponent_tr_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 34);
} }
function ListOfStationsComponent_tr_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 35);
} }
function ListOfStationsComponent_agm_marker_88_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "agm-marker", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("markerClick", function ListOfStationsComponent_agm_marker_88_Template_agm_marker_markerClick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r51); const m_r47 = restoredCtx.$implicit; const i_r48 = restoredCtx.index; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r50.clickedMarker(m_r47.stationName, i_r48)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "agm-info-window", null, 25)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Divvy Station");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br")(10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br")(14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const m_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", m_r47.latitude)("longitude", m_r47.longitude)("label", m_r47.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("stationName: ", m_r47.stationName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("status: ", m_r47.status, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("availableDocks: ", m_r47.availableDocks, "");
} }
const _c0 = function () { return { color: "white", text: "You are Here" }; };
const _c1 = function () { return { width: 40, height: 60 }; };
const _c2 = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
const _c3 = function (a1) { return { url: _c2, scaledSize: a1 }; };
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
class ListOfStationsComponent {
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    constructor(placesService, router) {
        this.placesService = placesService;
        this.router = router;
        this.displayedColumns = ['id', 'stationName', 'availableBikes', 'availableDocks', 'is_renting', 'lastCommunicationTime', 'latitude', 'longitude', 'status', 'totalDocks', 'ChartData', 'smachart'];
        this.icon = {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
            scaledSize: {
                width: 60,
                height: 60
            }
        };
        ///////////////////////////////////////////////////////////////////////
        ///////////////////////////////////////////////////////////////////////
        this.circleRadius = 3000; // km
        this.location = {
            lat: 41.882607,
            lng: -87.643548,
            label: 'You are Here',
            zoom: 13
        };
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.getPlaceSelected();
        this.fetchStations();
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    fetchStations() {
        this.placesService
            .getStations()
            .subscribe((data) => {
            this.stations = data;
            this.markers = data;
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    getPlaceSelected() {
        this.placesService
            .getPlaceSelected()
            .subscribe((data) => {
            this.placeSelected = data;
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    getDivvyDailyTripsChart() {
        console.log('getting Divvy Trips chart');
        this.router.navigate(['/divvy_trips_chart']);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    getLineChart(stationName) {
        this.placesService.stationNameSelected = stationName;
        console.log(stationName);
        this.timeLimit = "1 HOUR";
        const realTimeLineChart = new _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_0__.RealTimeLineComponent(this.placesService);
        this.router.navigate(['/realtime_line_chart']);
        realTimeLineChart.create_d3_chart(stationName, this.placesService, this.timeLimit);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    getSMALineChart(stationName) {
        this.placesService.stationNameSelected = stationName;
        console.log(stationName);
        this.timeLimit = "1 HOUR";
        const realTimeLineChart = new _components_real_time_line_chart_real_time_line_chart_component__WEBPACK_IMPORTED_MODULE_0__.RealTimeLineComponent(this.placesService);
        this.router.navigate(['/sma_chart']);
        realTimeLineChart.create_d3_chart(stationName, this.placesService, this.timeLimit);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
}
ListOfStationsComponent.ɵfac = function ListOfStationsComponent_Factory(t) { return new (t || ListOfStationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_1__.PlacesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
ListOfStationsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListOfStationsComponent, selectors: [["app-list-of-stations"]], decls: 90, vars: 29, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/find", 2, "position", "absolute", "top", "75px", "margin-left", "20px"], ["mat-raised-button", "", "color", "primary", "routerLink", "/heat_map", 2, "position", "absolute", "top", "75px", "margin-left", "140px"], ["mat-raised-button", "", "color", "primary", 2, "position", "absolute", "top", "75px", "margin-left", "140px", 3, "click"], ["mat-raised-button", "", "color", "primary", "routerLink", "/list_of_places", 2, "position", "absolute", "top", "75px", "right", "20px"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "stationName"], ["matColumnDef", "availableBikes"], ["matColumnDef", "availableDocks"], ["matColumnDef", "is_renting"], ["matColumnDef", "lastCommunicationTime"], ["matColumnDef", "latitude"], ["matColumnDef", "longitude"], ["matColumnDef", "status"], ["matColumnDef", "totalDocks"], ["matColumnDef", "ChartData"], ["mat-header-cell", "", "class", "mat-column-right", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "mat-column-right", 4, "matCellDef"], ["matColumnDef", "smachart"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "latitude", "longitude", "zoom", "disableDefaultUI", "zoomControl", "latitudeChange", "longitudeChange", "zoomChange"], [3, "latitude", "longitude", "iconUrl", "label", "markerClick"], ["infoWindow", ""], [3, "latitude", "longitude", "iconUrl", "markerClick"], [3, "latitude", "longitude", "label", "markerClick", 4, "ngFor", "ngForOf"], [3, "latitude", "longitude", "radius", "fillColor", "circleDraggable", "editable", "radiusChange"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "mat-column-right"], ["mat-cell", "", 1, "mat-column-right"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [3, "latitude", "longitude", "label", "markerClick"]], template: function ListOfStationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Home \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Divvy Stations HeatMap \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "directions_bike");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 \u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListOfStationsComponent_Template_button_click_11_listener() { return ctx.getDivvyDailyTripsChart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Divvy Trips - Trends & Seasonality \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Go Back \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br")(21, "br")(22, "mat-divider")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](25, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ListOfStationsComponent_th_26_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ListOfStationsComponent_td_27_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](28, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ListOfStationsComponent_th_29_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ListOfStationsComponent_td_30_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](31, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ListOfStationsComponent_th_32_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, ListOfStationsComponent_td_33_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](34, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, ListOfStationsComponent_th_35_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, ListOfStationsComponent_td_36_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](37, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, ListOfStationsComponent_th_38_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, ListOfStationsComponent_td_39_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](40, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, ListOfStationsComponent_th_41_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, ListOfStationsComponent_td_42_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](43, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, ListOfStationsComponent_th_44_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, ListOfStationsComponent_td_45_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](46, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, ListOfStationsComponent_th_47_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, ListOfStationsComponent_td_48_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](49, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](50, ListOfStationsComponent_th_50_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ListOfStationsComponent_td_51_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ListOfStationsComponent_th_52_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](53, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](54, ListOfStationsComponent_th_54_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, ListOfStationsComponent_td_55_Template, 2, 1, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](56, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ListOfStationsComponent_th_57_Template, 1, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ListOfStationsComponent_td_58_Template, 5, 0, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](59, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, ListOfStationsComponent_th_60_Template, 1, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, ListOfStationsComponent_td_61_Template, 5, 0, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](62, ListOfStationsComponent_tr_62_Template, 1, 0, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ListOfStationsComponent_tr_63_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "agm-map", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("latitudeChange", function ListOfStationsComponent_Template_agm_map_latitudeChange_64_listener($event) { return ctx.location.lat = $event; })("longitudeChange", function ListOfStationsComponent_Template_agm_map_longitudeChange_64_listener($event) { return ctx.location.lng = $event; })("zoomChange", function ListOfStationsComponent_Template_agm_map_zoomChange_64_listener($event) { return ctx.location.zoom = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "agm-marker", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("markerClick", function ListOfStationsComponent_Template_agm_marker_markerClick_65_listener() { return ctx.clickedMarker("Union Station", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "agm-info-window", null, 25)(68, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "You are currently here by the Union Station");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "agm-marker", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("markerClick", function ListOfStationsComponent_Template_agm_marker_markerClick_70_listener() { return ctx.clickedMarker("placeSelected", 0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "agm-info-window", null, 25)(73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "You have selected this place");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "br")(76, "br")(77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "br")(81, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](84, "br")(85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](88, ListOfStationsComponent_agm_marker_88_Template, 17, 6, "agm-marker", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "agm-circle", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("radiusChange", function ListOfStationsComponent_Template_agm_circle_radiusChange_89_listener($event) { return ctx.circleRadius = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.stations);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.location.lat)("longitude", ctx.location.lng)("zoom", ctx.location.zoom)("disableDefaultUI", true)("zoomControl", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.location.lat)("longitude", ctx.location.lng)("iconUrl", ctx.icon)("label", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.placeSelected.latitude)("longitude", ctx.placeSelected.longitude)("iconUrl", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](27, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Name: ", ctx.placeSelected.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Phone: ", ctx.placeSelected.display_phone, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Address: ", ctx.placeSelected.address1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.location.lat)("longitude", ctx.location.lng)("radius", ctx.circleRadius)("fillColor", "blue")("circleDraggable", true)("editable", true);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_7__.MatRow, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmCircle, _agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmInfoWindow, _agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_9__.AgmMarker], styles: ["table[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n\r\n.mat-column-right[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n\r\nagm-map[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtb2Ytc3RhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoibGlzdC1vZi1zdGF0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 53957:
/*!***********************************************************************************!*\
  !*** ./src/app/components/real-time-line-chart/real-time-line-chart.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealTimeLineComponent": () => (/* binding */ RealTimeLineComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/interval */ 95363);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ 17659);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3-scale */ 65853);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3-scale */ 71060);
/* harmony import */ var d3_shape__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3-shape */ 73015);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-array */ 35122);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3-axis */ 18210);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 82156);


















function RealTimeLineComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeRange_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", timeRange_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", timeRange_r1.value, " ");
} }
class RealTimeLineComponent {
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    constructor(placesService) {
        this.placesService = placesService;
        this.margin = { top: 50, right: 20, bottom: 30, left: 150 };
        this.padding = 1;
        this.timeRanges = [
            { id: '1 HOUR', value: 'Past Hour' },
            { id: '24 HOUR', value: 'Last 24 Hours' },
            { id: '7 DAY', value: 'Last 7 Days' }
        ];
        this.version = _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.VERSION;
        this.width = 900 - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ngOnInit() {
        if (this.SMALineChart !== undefined) {
            this.SMALineChart.unsubscribe();
        }
        this.timeRangeSelected = "1 HOUR";
        this.stationNameSelected = this.placesService.stationNameSelected;
        this.title = 'Divvy Dock Station:    ' + this.stationNameSelected;
        this.createPriodicTaskToPullStationDataFromServer();
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    changeTimeRangeSelected(data) {
        this.build_d3_chart('#008000', 0, this.timeRangeSelected);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    createPriodicTaskToPullStationDataFromServer() {
        if (this.SMALineChart !== undefined) {
            this.SMALineChart.unsubscribe();
        }
        this.placesService.getStationSelected().subscribe((data) => {
            this.stationSelected = data;
            this.LineChart = this.placesService.pulledNewStationDocksDataFromServer(this.placesService.stationNameSelected, this.timeRangeSelected).subscribe(res => {
                this.create_d3_chart(this.placesService.stationNameSelected, this.placesService, this.timeRangeSelected);
            });
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    build_d3_chart(color, value, type) {
        this.placesService.getStationSelected().subscribe((data) => {
            this.stationSelected = data;
            this.create_d3_chart(this.stationSelected.stationName, this.placesService, this.timeRangeSelected);
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    create_d3_chart(stationName, placesService, timeRange) {
        if (this.SMALineChart !== undefined) {
            this.SMALineChart.unsubscribe();
        }
        this.stationNameSelected = stationName;
        this.title = 'Divvy Dock Station:    ' + this.stationNameSelected;
        placesService.getStationDocksLog(stationName, timeRange).subscribe(() => {
            this.fetchDocks(placesService, timeRange);
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    fetchDocks(placesService, timeRange) {
        placesService
            .getDocks()
            .subscribe((data) => {
            this.docks = data;
            console.log(this.docks);
            this.updateChart();
            this.initSvg();
            this.initAxis();
            this.create_d3_chart_legend(timeRange);
            this.create_d3_chart_X_Y_Axis(timeRange);
            this.create_d3_line();
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    initSvg() {
        this.svg = d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg')
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
    initAxis() {
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_6__["default"]().range([0, this.width]);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_7__["default"]().range([this.height, 0]);
        this.x.domain(d3_array__WEBPACK_IMPORTED_MODULE_2__.extent(this.docks, (d) => new Date(d.lastCommunicationTime.replace(/-/g, '/').toString())));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_2__.max(this.docks, (d) => d.availableDocks)]);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    setTimeIncrementFor_X_Axis(timeRange) {
        if (timeRange == "1 HOUR") {
            this.svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(d3_axis__WEBPACK_IMPORTED_MODULE_8__.axisBottom(this.x)
                .ticks(d3__WEBPACK_IMPORTED_MODULE_1__.timeMinute.every(2)))
                .selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(45)")
                .style("text-anchor", "start");
        }
        else if (timeRange == "24 HOUR") {
            this.svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(d3_axis__WEBPACK_IMPORTED_MODULE_8__.axisBottom(this.x)
                .ticks(d3__WEBPACK_IMPORTED_MODULE_1__.timeHour.every(1)))
                .selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(45)")
                .style("text-anchor", "start");
        }
        else if (timeRange == "7 DAY") {
            this.svg.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', 'translate(0,' + this.height + ')')
                .call(d3_axis__WEBPACK_IMPORTED_MODULE_8__.axisBottom(this.x)
                .ticks(d3__WEBPACK_IMPORTED_MODULE_1__.timeHour.every(12)))
                .selectAll("text")
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(45)")
                .style("text-anchor", "start");
        }
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    create_d3_chart_X_Y_Axis(timeRange) {
        this.svg.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .append('text')
            .attr('class', 'axis-title')
            .attr('text-anchor', 'middle')
            .attr('transform', 'translate(420,50)')
            .text('Time');
        this.setTimeIncrementFor_X_Axis(timeRange);
        this.svg.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_8__.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr("transform", "translate(" + 1 + "," + (this.height / 2) + ")rotate(90)")
            .attr('y', 35)
            .attr('dy', '.71em')
            .style('text-anchor', 'end')
            .text('Available Docks');
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    create_d3_line() {
        this.line = d3_shape__WEBPACK_IMPORTED_MODULE_9__["default"]()
            .x((d) => this.x(new Date(d.lastCommunicationTime.replace(/-/g, '/').toString())))
            .y((d) => this.y(d.availableDocks));
        this.svg.append('path')
            .datum(this.docks)
            .attr('class', 'line')
            .attr('d', this.line);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    create_d3_chart_legend(timeRange) {
        var legend = this.svg.append('g')
            .attr("class", "legend")
            .attr("x", 15)
            .attr("y", 5)
            .attr('transform', 'translate(860,5)')
            .attr("width", 18)
            .attr("height", 10);
        if (timeRange == "1 HOUR") {
            legend.append("rect")
                .attr("class", "legend")
                .attr("x", 1)
                .attr("y", 5)
                .attr("width", 15)
                .attr("height", 7)
                .style("fill", 'green');
            legend.append("text")
                .attr("class", "legendTxt")
                .style("font-size", "13px")
                .attr("x", 20)
                .attr("y", 5)
                .attr("dy", "10px")
                .style("text-anchor", "start")
                .text("Real-Time Data");
        }
        else if (timeRange == "24 HOUR") {
            legend.append("rect")
                .attr("class", "legend")
                .attr("x", 1)
                .attr("y", 5)
                .attr("width", 15)
                .attr("height", 7)
                .style("fill", 'green');
            legend.append("text")
                .attr("class", "legendTxt")
                .style("font-size", "13px")
                .attr("x", 20)
                .attr("y", 5)
                .attr("dy", "10px")
                .style("text-anchor", "start")
                .text("Real-Time Data");
        }
        else if (timeRange == "7 DAY") {
            legend.append("rect")
                .attr("class", "legend")
                .attr("x", 1)
                .attr("y", 5)
                .attr("width", 15)
                .attr("height", 7)
                .style("fill", 'green');
            legend.append("text")
                .attr("class", "legendTxt")
                .style("font-size", "13px")
                .attr("x", 20)
                .attr("y", 5)
                .attr("dy", "10px")
                .style("text-anchor", "start")
                .text("Real-Time Data");
        }
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    updateChart() {
        var chart = d3__WEBPACK_IMPORTED_MODULE_1__.select('#svg').select("g").remove().exit();
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ngOnDestroy() {
        if (this.LineChart !== undefined) {
            this.LineChart.unsubscribe();
        }
    }
}
RealTimeLineComponent.ɵfac = function RealTimeLineComponent_Factory(t) { return new (t || RealTimeLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_3__.PlacesService)); };
RealTimeLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: RealTimeLineComponent, selectors: [["app-real-time-line-chart"]], decls: 25, vars: 3, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/find", 2, "position", "absolute", "top", "75px"], [2, "margin-left", "27px", "text-align", "left", "margin-top", "17px"], ["placeholder", "Time Range:", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/list_of_stations", 2, "position", "absolute", "top", "75px", "right", "20px"], [2, "margin-left", "27px"], ["width", "1200", "height", "700", "id", "svg"], [3, "value"]], template: function RealTimeLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Home \u00A0\u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br")(9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-card")(11, "div", 1)(12, "mat-form-field")(13, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function RealTimeLineComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.timeRangeSelected = $event; })("ngModelChange", function RealTimeLineComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.changeTimeRangeSelected($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, RealTimeLineComponent_mat_option_14_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "button", 4)(17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " \u00A0\u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.timeRangeSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.timeRanges);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.title);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel], styles: [".axis {\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.axis path,\r\n.axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n.axis-title {\r\n    fill: none;\r\n    stroke: black;\r\n    stroke-width: 0.5px;\r\n}\r\n\r\n.line {\r\n    fill: none;\r\n    stroke: green;\r\n    stroke-width: 1.5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWwtdGltZS1saW5lLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFJQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InJlYWwtdGltZS1saW5lLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXhpcyB7XHJcbiAgICBmb250OiAxMHB4IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5heGlzIHBhdGgsXHJcbi5heGlzIGxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogIzAwMDtcclxuICAgIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcclxufVxyXG5cclxuLmF4aXMtdGl0bGUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogYmxhY2s7XHJcbiAgICBzdHJva2Utd2lkdGg6IDAuNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IGdyZWVuO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 91679:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/real-time-sma-line-chart/real-time-sma-line-chart.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealTimeSMALineComponent": () => (/* binding */ RealTimeSMALineComponent)
/* harmony export */ });
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/add/observable/interval */ 95363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


class RealTimeSMALineComponent {
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////     ADD YOUR CODE HERE      ///////////
    // Write your code SIMILAR to real-time-chart component
    // real-time-sma-line-chart.component.html MUST BE UPDATED as well
    // Update list-of-stations.component.ts by adding somtehing similar to getLineChart(stationName)
    // Update list-of-stations.component.html by adding somtehingsimilar to (click)="getLineChart(element.stationName)
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    ngOnInit() {
    }
}
RealTimeSMALineComponent.ɵfac = function RealTimeSMALineComponent_Factory(t) { return new (t || RealTimeSMALineComponent)(); };
RealTimeSMALineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RealTimeSMALineComponent, selectors: [["app-real-time-sma-line-chart"]], decls: 0, vars: 0, template: function RealTimeSMALineComponent_Template(rf, ctx) { }, styles: [".axis {\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.axis path,\r\n.axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n.axis-title {\r\n    fill: none;\r\n    stroke: black;\r\n    stroke-width: 0.5px;\r\n}\r\n\r\n.axis--x path {\r\n    /*display: none;*/\r\n}\r\n\r\n.line {\r\n    fill: none;\r\n    stroke: green;\r\n    stroke-width: 1.5px;\r\n}\r\n\r\n.sma_line_1hr {\r\n    fill: none;\r\n    stroke: blue;\r\n    stroke-width: 1.5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.sma_line_24hr {\r\n    fill: none;\r\n    stroke: red;\r\n    stroke-width: 1.5px;\r\n    margin-top: 2px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWwtdGltZS1zbWEtbGluZS1jaGFydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CIiwiZmlsZSI6InJlYWwtdGltZS1zbWEtbGluZS1jaGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF4aXMge1xyXG4gICAgZm9udDogMTBweCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uYXhpcyBwYXRoLFxyXG4uYXhpcyBsaW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6ICMwMDA7XHJcbiAgICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XHJcbn1cclxuXHJcbi5heGlzLXRpdGxlIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IGJsYWNrO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAwLjVweDtcclxufVxyXG5cclxuXHJcbi5heGlzLS14IHBhdGgge1xyXG4gICAgLypkaXNwbGF5OiBub25lOyovXHJcbn1cclxuXHJcbi5saW5lIHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6IGdyZWVuO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcclxufVxyXG5cclxuLnNtYV9saW5lXzFociB7XHJcbiAgICBmaWxsOiBub25lO1xyXG4gICAgc3Ryb2tlOiBibHVlO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG5cclxuLnNtYV9saW5lXzI0aHIge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogcmVkO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAxLjVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 1591:
/*!***********************************************************************************!*\
  !*** ./src/app/components/yelp-reviews-chart/yelp-reviews-bar-chart.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BarChartComponent": () => (/* binding */ BarChartComponent)
/* harmony export */ });
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-selection */ 52825);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-scale */ 67615);
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-scale */ 71060);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ 35122);
/* harmony import */ var d3_axis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-axis */ 18210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../places.service */ 63136);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 82156);










///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
class BarChartComponent {
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    constructor(placesService) {
        this.placesService = placesService;
        this.title = "Yelp Reviews Chart";
        this.margin = { top: 20, right: 20, bottom: 150, left: 80 };
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    ngOnInit() {
        this.fetchPlaces();
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    fetchPlaces() {
        this.placesService
            .getPlaces()
            .subscribe((data) => {
            this.places = data;
            let list_of_names = [];
            let list_of_places = [];
            for (let i = 0; i < this.places.length; i++) {
                let name = this.places[i].name;
                let review_count = this.places[i].review_count;
                if (list_of_names.includes(name)) {
                    name = ' ' + name;
                }
                list_of_names.push(name);
                list_of_places.push({ name: name, review_count: review_count });
            }
            this.places = list_of_places;
            console.log(this.places);
            this.initSvg();
            this.init_X_Y_Axis();
            this.create_X_Y_Axis();
            this.createBarChart(this.places);
        });
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    initSvg() {
        this.svg = d3_selection__WEBPACK_IMPORTED_MODULE_2__["default"]('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    init_X_Y_Axis() {
        this.x = d3_scale__WEBPACK_IMPORTED_MODULE_3__["default"]().rangeRound([0, this.width]).padding(.800);
        this.y = d3_scale__WEBPACK_IMPORTED_MODULE_4__["default"]().rangeRound([this.height, .099]);
        this.x.domain(this.places.map((d) => d.name));
        this.y.domain([0, d3_array__WEBPACK_IMPORTED_MODULE_0__.max(this.places, (d) => Number(d.review_count))]);
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    create_X_Y_Axis() {
        this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__.axisBottom(this.x))
            .selectAll("text")
            .attr("y", 0)
            .attr("x", 9)
            .attr("dy", ".35em")
            .attr("transform", "rotate(60)")
            .style("text-anchor", "start");
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3_axis__WEBPACK_IMPORTED_MODULE_5__.axisLeft(this.y))
            .append("text")
            .attr("transform", "rotate(90)")
            .attr("y", 6)
            .attr("dy", "0.71em")
            .attr("text-anchor", "end")
            .text("Frequency");
        this.svg.append("text")
            .attr("x", this.width / 2 + 80)
            .attr("y", this.height + 85)
            .style("text-anchor", "middle")
            .text("Name");
        this.svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 15)
            .attr("x", 0 - (this.height / 2))
            .style("text-anchor", "middle")
            .text("Review Count");
    }
    ///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////
    createBarChart(data) {
        //select all bars on the graph, take them out, and exit the previous data set.
        //then you can add/enter the new data set
        var bars = this.g.selectAll(".bar")
            .remove()
            .exit()
            .data(data);
        //now actually give each rectangle the corresponding data
        bars.enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => this.x(d.name))
            .attr('y', (d) => this.y(d.review_count))
            .attr('width', this.x.bandwidth())
            .attr('height', (d) => this.height - this.y(d.review_count));
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_places_service__WEBPACK_IMPORTED_MODULE_1__.PlacesService)); };
BarChartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], decls: 10, vars: 1, consts: [["mat-raised-button", "", "color", "primary", "routerLink", "/list_of_places", 2, "float", "right", "margin-right", "20px"], ["width", "1000", "height", "600"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card")(2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Go Back \u00A0 \u00A0 \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "keyboard_backspace");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.title);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCard], styles: ["[_nghost-%COMP%]     .bar {\r\n    fill: steelblue;\r\n}\r\n\r\n[_nghost-%COMP%]     .bar:hover {\r\n    fill: brown;\r\n}\r\n\r\n[_nghost-%COMP%]     .axis-title {\r\n    fill: none;\r\n    stroke: black;\r\n    stroke-width: 0.5px;\r\n}\r\n\r\n[_nghost-%COMP%]     .space {\r\n    padding-right: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInllbHAtcmV2aWV3cy1iYXItY2hhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ5ZWxwLXJldmlld3MtYmFyLWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmJhciB7XHJcbiAgICBmaWxsOiBzdGVlbGJsdWU7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAuYmFyOmhvdmVyIHtcclxuICAgIGZpbGw6IGJyb3duO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmF4aXMtdGl0bGUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogYmxhY2s7XHJcbiAgICBzdHJva2Utd2lkdGg6IDAuNXB4O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuc3BhY2Uge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 63136:
/*!***********************************!*\
  !*** ./src/app/places.service.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlacesService": () => (/* binding */ PlacesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 12378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json'
    })
};
class PlacesService {
    constructor(http) {
        this.http = http;
        this.uri = 'http://localhost:4000';
        this.stationNameSelected = 'None';
        this.pulledNewStationDocksDataFromServer = (stationName, timeRange) => {
            return rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable.create(observer => {
                this.Emmiter = observer;
                this.time_interval = setInterval(() => {
                    observer.next({
                        getStationDocksLog(placeName, timeRange) {
                            const find_stations_at = {
                                placeName: placeName,
                                timeRange: timeRange
                            };
                            var str = JSON.stringify(find_stations_at, null, 2);
                            return this.http.post(`${this.uri}/stations/getdocks`, find_stations_at, httpOptions);
                        }
                    });
                }, 30000);
            });
        };
    }
    getPlaces() {
        return this.http.get(`${this.uri}/places`);
    }
    getPlaceSelected() {
        return this.http.get(`${this.uri}/place_selected`);
    }
    getStationSelected() {
        return this.http.get(`${this.uri}/station_selected`);
    }
    getStations() {
        return this.http.get(`${this.uri}/stations`);
    }
    getDocks() {
        return this.http.get(`${this.uri}/docks`);
    }
    getDocksSME() {
        return this.http.get(`${this.uri}/docksSME`);
    }
    ////////////////////////////////////////////////////////////////////////////////////
    ///                                                                              ///
    ///   This function will get all Divvy stations data from the App server         ///
    ///    The app server collects Divvy Logs that are stored on ElasticSearch       ///                              ///
    ///                                                                              ///
    ////////////////////////////////////////////////////////////////////////////////////
    get_all_divvy_stations_data(timeRange, newTimeRangeSelection) {
        const find_stations_at = {
            timeRange: timeRange,
            newTimeRangeSelection: newTimeRangeSelection
        };
        var str = JSON.stringify(find_stations_at, null, 2);
        return this.http.post(`${this.uri}/stations/fetch_all_divvy_stations_data`, find_stations_at, httpOptions);
    }
    findPlaces(find, where) {
        const find_places_at = {
            find: find,
            where: where
        };
        return this.http.post(`${this.uri}/places/find`, find_places_at, httpOptions);
    }
    findStations(placeName) {
        const find_stations_at = {
            placeName: placeName
        };
        var str = JSON.stringify(find_stations_at, null, 2);
        return this.http.post(`${this.uri}/stations/find`, find_stations_at, httpOptions);
    }
    getStationDocksLog(placeName, timeRange) {
        const find_stations_at = {
            placeName: placeName,
            timeRange: timeRange
        };
        var str = JSON.stringify(find_stations_at, null, 2);
        return this.http.post(`${this.uri}/stations/getdocks`, find_stations_at, httpOptions);
    }
    destroy() {
        if (this.time_interval) {
            clearInterval(this.time_interval);
        }
        if (this.Emmiter) {
            this.Emmiter.complete();
        }
    }
    ///////////////////////////////////////////////////////////////////
    getDivvyTripsCountsPerDay(day, selectedDate) {
        const find_stations_at = {
            day: day,
            selectedDate: selectedDate
        };
        var str = JSON.stringify(find_stations_at, null, 2);
        return this.http.post(`${this.uri}/countDivvyTripsPerDay`, find_stations_at, httpOptions);
    }
    getDivvyTripsCountsForSunday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsSunday`);
    }
    getDivvyTripsCountsForMonday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForMonday`);
    }
    getDivvyTripsCountsForTuesday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForTuesday`);
    }
    getDivvyTripsCountsForWednesday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForWednesday`);
    }
    getDivvyTripsCountsForThursday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForThursday`);
    }
    getDivvyTripsCountsForFriday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForFriday`);
    }
    getDivvyTripsCountsForSaturday() {
        return this.http.get(`${this.uri}/getDivvyTripsCountsForSaturday`);
    }
}
PlacesService.ɵfac = function PlacesService_Factory(t) { return new (t || PlacesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
PlacesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PlacesService, factory: PlacesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 86494,
	"./es-us.js": 86494,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map