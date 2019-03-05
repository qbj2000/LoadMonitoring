(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3 font=\"bold\">What it is ? </h3>\n    <p>Create a simple web application that monitors load average on your machine:</p>\n    <ul>\n        <li>Collect the load averages of your system (see examples below)</li>\n        <li>Display in the application the key statistics as well as a history of load \n          over the past 10 minutes in 10s intervals. We’d \n          suggest a graphical representation like a timeseries. Make it easy for the end-user to \n          picture the situation!\n        </li>\n        <li>Make sure a user can keep the web page open and monitor the load on their machine.</li>\n        <li>Whenever the load for the past 2 minutes exceeds 1 on average, add a message saying that \"High load generated an alert - load = value, triggered at time\"</li>\n        <li>Whenever the load average drops again below 1 on average for the past 2 minutes, Add another message explaining when the alert recovered.</li>\n        <li>Make sure all messages showing when alerting thresholds are crossed remain visible on the page for historical reasons.</li>\n        <li> Write a test for the alerting logic</li>\n        <li>Explain how you’d improve on this application design</li>\n        <li>This exercise is oriented towards showcasing your frontend skills, there is no need for advanced backends capable of persisting data</li>\n      </ul>\n\n      <h3> Personal Notes: </h3>\n\n      <p>The application gets one load data every 10 minutes from the flask service.</p> \n      <p>If the flask service has not been on for long enough prior to loading the application, there will not be anough data to \n        fill the window so the data will just keep being appended to the graph until the window size is reached. After, the window \n        will start sliding to allow new data to come in. \n      </p>\n      <p> By default, the window spans 10 minutes or 10 * 6 = 60 points but this can be modifies in the \"Window Size\" inbox \n          below the graph. Also, the default value for the alert threshold is 1 but this can also be modified, for instance \n          decreasing this value is a good way of testing the feature (as a average value of 1 is not necessarily reached very often ...).\n      </p>\n      <p>\n        The alert is based on the average of the last 2 minutes, if there are not enough data - let's say, we just turned the service on - \n        we will consider the max(available points, 2 min points).\n      </p>\n      \n      <p>Above the graph are some basic statistics of the current data being displayed. </p>\n\n      <h3> Improvements on UI: </h3>\n\n      <ul>\n        <li> Login ? </li>\n        <li> More control over the backend from the UI: choose the interval, less or more than 10 seconds</li>\n        <li> Additional statistics or more data ...</li>\n      </ul>\n\n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  font-size: 13px; }\n  div li {\n    padding: 6px 0 6px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlLEVBQUE7RUFEbkI7SUFJUSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICAgIGZvbnQtc2l6ZTogMTNweDtcblxuICAgIGxpIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDAgNnB4IDA7XG4gICAgfVxuXG59Il19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/monitor/monitor.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");





var routes = [
    { path: '', component: _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_3__["MonitorComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<section>\n    <router-outlet></router-outlet>\n</section>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'load-monitoring';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-plotly.js */ "./node_modules/angular-plotly.js/fesm5/angular-plotly.js.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./monitor/monitor.component */ "./src/app/monitor/monitor.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _load_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./load.service */ "./src/app/load.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./statistics/statistics.component */ "./src/app/statistics/statistics.component.ts");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./date.service */ "./src/app/date.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");


// import { Routes, RouterModule } from '@angular/router';
















// const routes: Routes = [
//   {path: '', component: MonitorComponent},
//   {path: 'about', component: AboutComponent},
// ];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _monitor_monitor_component__WEBPACK_IMPORTED_MODULE_8__["MonitorComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_14__["MessagesComponent"],
                _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_15__["StatisticsComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_plotly_js__WEBPACK_IMPORTED_MODULE_4__["PlotlyModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
            ],
            providers: [_load_service__WEBPACK_IMPORTED_MODULE_10__["LoadService"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"], _date_service__WEBPACK_IMPORTED_MODULE_16__["DateService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date.service.ts":
/*!*********************************!*\
  !*** ./src/app/date.service.ts ***!
  \*********************************/
/*! exports provided: DateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateService", function() { return DateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var DateService = /** @class */ (function () {
    function DateService(datepipe) {
        this.datepipe = datepipe;
    }
    DateService.prototype.toTime = function (date) {
        return new Date(date).getTime();
    };
    DateService.prototype.toString = function (date, format) {
        return this.datepipe.transform(date, format);
    };
    DateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], DateService);
    return DateService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-container\">\n      Made by Quentin Jost\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #7700FF;\n  color: white;\n  height: 30px;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIGJhY2tncm91bmQ6ICM3NzAwRkY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/load.service.ts":
/*!*********************************!*\
  !*** ./src/app/load.service.ts ***!
  \*********************************/
/*! exports provided: LoadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadService", function() { return LoadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var LoadService = /** @class */ (function () {
    function LoadService(http) {
        this.http = http;
        // list of data currently in the window to send to statistic comp
        this.loadsList = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.cast = this.loadsList.asObservable();
        // stop calling the rest service when the monitor is not displayed
        this.stopLooper = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // append loadsList
    LoadService.prototype.newLoads = function (loads) {
        this.loadsList.next(loads);
    };
    // get ONE last value of laod
    LoadService.prototype.getLiveLoad = function () {
        var _this = this;
        return this.http.get('http://localhost:5000/get_load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    // get multiple loads
    LoadService.prototype.getLastLoads = function (minutes) {
        var _this = this;
        return this.http.get('http://localhost:5000/get_loads/' + minutes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return _this.handleError(err); }));
    };
    // initiate the looper that will request one load to the rest service every 10 secondes 
    LoadService.prototype.getDataAtInterval = function () {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000 * 10).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopLooper), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () { return _this.getLiveLoad(); }));
    };
    // kill the looper 
    LoadService.prototype.killLooper = function () {
        this.stopLooper.next();
    };
    LoadService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    LoadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], LoadService);
    return LoadService;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modeles_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modeles/Constants */ "./src/app/modeles/Constants.ts");




var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
        this.messageThreshold = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_modeles_Constants__WEBPACK_IMPORTED_MODULE_3__["ALERT_THRESHOLD"]);
        this.cast = this.messageThreshold.asObservable();
        this.isAlertOn = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.castAlert = this.isAlertOn.asObservable();
    }
    // to communicate threashold level between statistics and monitor componenent 
    MessageService.prototype.newThreshold = function (value) {
        this.messageThreshold.next(value);
    };
    // to keep the status of the alert when the monitor component is destroyed
    MessageService.prototype.newAlertStatus = function (bool) {
        this.isAlertOn.next(bool);
    };
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 align=\"center\">Messages</h4>\n\n<div *ngIf=\"messageService.messages.length\" class=\"message-container\">\n\n    <ul>\n        <li *ngFor='let message of messageService.messages'> \n            {{message}}\n        </li>\n    </ul>\n\n    <div class=\"button\">\n        <button class=\"clear\" (click)=\"messageService.clear()\">clear</button>\n    </div> \n\n</div>"

/***/ }),

/***/ "./src/app/messages/messages.component.scss":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-container {\n  font-size: 13px;\n  margin-top: 4em; }\n\nul {\n  font-size: 1em; }\n\n.button {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUduQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1jb250YWluZXJ7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi10b3A6IDRlbTtcbn1cblxudWwge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4uYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/modeles/Constants.ts":
/*!**************************************!*\
  !*** ./src/app/modeles/Constants.ts ***!
  \**************************************/
/*! exports provided: DEFAULT_WINDOW_SIZE, ALERT_THRESHOLD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WINDOW_SIZE", function() { return DEFAULT_WINDOW_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_THRESHOLD", function() { return ALERT_THRESHOLD; });
var DEFAULT_WINDOW_SIZE = 10;
var ALERT_THRESHOLD = 1;


/***/ }),

/***/ "./src/app/monitor/monitor.component.html":
/*!************************************************!*\
  !*** ./src/app/monitor/monitor.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"monitor-container\">\n    <div>\n        <app-statistics></app-statistics>\n        <div #graph id=\"graph\" (window:resize)=\"onResize()\"></div>\n        <nav class=\"parameters-container\">\n            <div>\n                <label>Window Size (min):\n                    <input [(ngModel)]=\"windowSize\">\n                </label>\n                <button (click)=\"updateWindow()\">Resize</button>\n            </div>\n            <div>\n                <label>Alert Threshold:\n                    <input [(ngModel)]=\"alertThreshold\">\n                </label>\n                <button (click)=\"updateThreshold()\">Apply</button>\n            </div>\n        </nav>\n    </div>\n    <div>\n        <app-messages></app-messages>\n    </div> \n    \n</div>\n\n"

/***/ }),

/***/ "./src/app/monitor/monitor.component.scss":
/*!************************************************!*\
  !*** ./src/app/monitor/monitor.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".monitor-container {\n  display: grid;\n  grid-template-columns: 75% 25%;\n  grid-gap: 1em; }\n\n.parameters-container {\n  display: grid;\n  grid-template-columns: 50% 50%;\n  font-size: 13px;\n  padding-top: 1em; }\n\n.parameters-container input {\n  width: 5em; }\n\n#graph {\n  border: solid black 1px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvbW9uaXRvci9tb25pdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksYUFBWTtFQUNaLDhCQUE2QjtFQUM3QixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb25pdG9yL21vbml0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5tb25pdG9yLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzUlIDI1JTtcbiAgICBncmlkLWdhcDogMWVtO1xufVxuXG4ucGFyYW1ldGVycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6Z3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6NTAlIDUwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLnBhcmFtZXRlcnMtY29udGFpbmVyIGlucHV0IHtcbiAgICB3aWR0aDogNWVtO1xufVxuXG4jZ3JhcGgge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/monitor/monitor.component.ts":
/*!**********************************************!*\
  !*** ./src/app/monitor/monitor.component.ts ***!
  \**********************************************/
/*! exports provided: MonitorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitorComponent", function() { return MonitorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../load.service */ "./src/app/load.service.ts");
/* harmony import */ var _modeles_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modeles/Constants */ "./src/app/modeles/Constants.ts");
/* harmony import */ var plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! plotly.js/dist/plotly.min.js */ "./node_modules/plotly.js/dist/plotly.min.js");
/* harmony import */ var plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../date.service */ "./src/app/date.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");







var MonitorComponent = /** @class */ (function () {
    function MonitorComponent(service, dateService, messageService) {
        this.service = service;
        this.dateService = dateService;
        this.messageService = messageService;
        // data currently being displayed
        this.currentData = [];
        //  number of minutes being displayed
        this.windowSize = _modeles_Constants__WEBPACK_IMPORTED_MODULE_3__["DEFAULT_WINDOW_SIZE"];
        // threshold for alert
        this.alertThreshold = _modeles_Constants__WEBPACK_IMPORTED_MODULE_3__["ALERT_THRESHOLD"];
    }
    MonitorComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create new chart 
        this.createNewChart(this.windowSize);
        // start listening to new load every 10s
        this.service.getDataAtInterval().subscribe(function (data) {
            if (data) {
                _this.extendChart(data);
            }
            else {
                console.log("bad load received from service");
            }
        });
    };
    MonitorComponent.prototype.ngOnDestroy = function () {
        this.service.killLooper();
    };
    // let the message component know that the threshold has been changed
    MonitorComponent.prototype.updateThreshold = function () {
        this.messageService.newThreshold(this.alertThreshold);
    };
    // resize the window
    MonitorComponent.prototype.updateWindow = function () {
        this.createNewChart(this.windowSize);
    };
    // create chart function 
    MonitorComponent.prototype.createNewChart = function (window) {
        var _this = this;
        this.service.getLastLoads(window).subscribe(function (res) {
            // when changing page the monitor will be reloaded but we dont want to start the graph from scratch 
            if (res) {
                _this.currentData = res;
                _this.buildChart();
                _this.service.newLoads(_this.currentData);
            }
            else {
                console.log("Bad data received from service");
            }
        }, function (err) { console.log("Cannot create the chart!!! AIE AIE AIE"); });
    };
    MonitorComponent.prototype.buildChart = function () {
        var _this = this;
        var element = this.el.nativeElement;
        var dataX;
        var dataY;
        dataX = this.currentData.map(function (res) { return _this.dateService.toTime(res.time); });
        dataY = this.currentData.map(function (res) { return res.value; });
        var data = [{
                x: dataX,
                y: dataY,
            }];
        var style = {
            xaxis: {
                type: 'date',
                title: 'Time',
                tickformat: '%H:%M:%S',
            },
            yaxis: {
                title: 'Normalized load average'
            },
            margin: { t: 0 },
            type: 'line',
            title: 'Load monitoring'
        };
        Object(plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__["newPlot"])(element, data, style);
        // return for testing... basically we assume that the function provided by plotly work. 
        // we should just make sure that the input we give are good
        return [element, data, style];
    };
    // add data to the current chart 
    MonitorComponent.prototype.extendChart = function (load) {
        var element = this.el.nativeElement;
        var t = this.dateService.toTime(load.time);
        var data = {
            x: [[t]],
            y: [[load.value]]
        };
        Object(plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__["extendTraces"])(element, data, [0]);
        this.currentData.push(load);
        this.checkWindow();
        this.service.newLoads(this.currentData);
    };
    // function to resize the chart according to the current window
    MonitorComponent.prototype.checkWindow = function () {
        var element = this.el.nativeElement;
        while (this.currentData.length > this.windowSize * 6) {
            var newLeft = void 0;
            var currentRight = void 0;
            newLeft = this.dateService.toTime(this.currentData.shift().time);
            currentRight = this.dateService.toTime(this.currentData[this.currentData.length - 1].time);
            Object(plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__["relayout"])(element, {
                xaxis: {
                    type: 'date',
                    range: [newLeft, currentRight],
                    tickformat: '%H:%M:%S',
                }
            });
        }
    };
    // to have a responsive graph 
    MonitorComponent.prototype.onResize = function () {
        var element = this.el.nativeElement;
        Object(plotly_js_dist_plotly_min_js__WEBPACK_IMPORTED_MODULE_4__["relayout"])(element, {
            width: 0.9 * 0.75 * window.innerWidth,
            height: 0.5 * window.innerHeight
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('graph'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], MonitorComponent.prototype, "el", void 0);
    MonitorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitor',
            template: __webpack_require__(/*! ./monitor.component.html */ "./src/app/monitor/monitor.component.html"),
            styles: [__webpack_require__(/*! ./monitor.component.scss */ "./src/app/monitor/monitor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"], _date_service__WEBPACK_IMPORTED_MODULE_5__["DateService"], _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], MonitorComponent);
    return MonitorComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"logo\">{{appTitle}}</a>\n    <nav>\n      <ul>\n        <li><a routerLink=\"\">Monitor</a></li>\n        <li><a routerLink=\"/about\">Read Me</a></li>\n      </ul>\n    </nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  background: #7700FF; }\n  header .logo {\n    font-weight: bold; }\n  header nav {\n    justify-self: right; }\n  header nav ul {\n      list-style-type: none;\n      margin: 0;\n      padding: 0; }\n  header nav ul li {\n        float: left; }\n  header nav ul li a {\n          padding: 1.5em;\n          text-transform: uppercase;\n          font-size: .8em; }\n  header nav ul li a:hover {\n            background: #8E2BFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBO0VBRHZCO0lBSVEsaUJBQWlCLEVBQUE7RUFKekI7SUFRUSxtQkFBbUIsRUFBQTtFQVIzQjtNQVdZLHFCQUFxQjtNQUNyQixTQUFTO01BQUUsVUFBVSxFQUFBO0VBWmpDO1FBZWdCLFdBQVcsRUFBQTtFQWYzQjtVQWtCb0IsY0FBYztVQUNkLHlCQUF5QjtVQUN6QixlQUFlLEVBQUE7RUFwQm5DO1lBdUJ3QixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3NzAwRkY7XG5cbiAgICAubG9nbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIG5hdiB7XG4gICAgICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XG4gICAgXG4gICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDsgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG5cbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjOEUyQkZGO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
        this.appTitle = "Load monitoring web application";
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/statistics/statistics.component.html":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ul class=\"statistic-container\">\n  <label> Average\n    <div align=\"center\" [ngClass]=\"{'red':averageTrend==-1, 'green': averageTrend==1, 'black': averageTrend==0}\">\n      {{runningAverage | number : '1.2-2'}}\n    </div>\n  </label>\n  <label> Standart Deviation\n    <div  align=\"center\" [ngClass]=\"{'red':stdTrend==-1, 'green': stdTrend==1, 'black': stdTrend==0}\">\n        {{runningStd | number : '1.2-2'}}\n    </div>\n  </label>\n  <label> Minimum\n    <div  align=\"center\" [ngClass]=\"{'red':minTrend==-1, 'green': minTrend==1, 'black': minTrend==0}\">\n        {{runningMin | number : '1.2-2'}}\n    </div>\n  </label>\n  <label> Maximum\n    <div  align=\"center\" [ngClass]=\"{'red':maxTrend==-1, 'green': maxTrend==1, 'black': maxTrend==0}\">\n        {{runningMax | number : '1.2-2'}}\n    </div>\n  </label>\n</ul>"

/***/ }),

/***/ "./src/app/statistics/statistics.component.scss":
/*!******************************************************!*\
  !*** ./src/app/statistics/statistics.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".statistic-container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1em;\n  justify-items: center;\n  font-size: 13px; }\n\n.red {\n  color: red; }\n\n.green {\n  color: green; }\n\n.black {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9xdWVudGluL0RvY3VtZW50cy9Db2RlL0RhdGFkb2cvRnJvbnRlbmQvbG9hZC1tb25pdG9yaW5nL3NyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBWTtFQUNaLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLGVBQWUsRUFBQTs7QUFPbkI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0YXRpc3RpYy1jb250YWluZXJ7XG4gICAgZGlzcGxheTpncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gICAgZ3JpZC1nYXA6IDFlbTtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5sYWJlbCBkaXZ7XG4gICAgLy8gYWxpZ246IGNlbnRlcjtcbn1cblxuLnJlZCB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmdyZWVuIHtcbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbi5ibGFjayB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/statistics/statistics.component.ts":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../load.service */ "./src/app/load.service.ts");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
/* harmony import */ var _date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../date.service */ "./src/app/date.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(service, messageService, dateService) {
        this.service = service;
        this.messageService = messageService;
        this.dateService = dateService;
        // to unsubscibe our service when the page is not on
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        // to know the trend of the stats: values [-1, 0, 1]
        this.averageTrend = 0;
        this.stdTrend = 0;
        this.minTrend = 0;
        this.maxTrend = 0;
    }
    StatisticsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.castAlert.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (res) {
            _this.isAboveThreashold = res;
        });
        // retrieve the data in the window from the monitor component 
        this.service.loadsList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (res) {
            _this.currentData = res;
            _this.mainRoutine();
        });
        // retrieve the new threshold defined in the monitor component
        this.messageService.messageThreshold.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (res) {
            // console.log(res)
            _this.alertThreshold = res;
        });
    };
    StatisticsComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    StatisticsComponent.prototype.mainRoutine = function () {
        // Calculate all the statistics we want to display 
        if (this.currentData.length > 0) {
            var values = this.currentData.map(function (res) { return res.value; });
            var valuesShort = values.slice(-12, -1);
            this.averageLast2Min = this.average(valuesShort);
            var tempRunningAverage = this.average(values);
            var tempRunningStd = this.standardDeviation(values);
            var tempRunningMax = this.max(values);
            var tempRunningMin = this.min(values);
            this.averageTrend = this.trend(this.runningAverage, tempRunningAverage);
            this.stdTrend = this.trend(this.runningStd, tempRunningStd);
            this.minTrend = this.trend(this.runningMin, tempRunningMin);
            this.maxTrend = this.trend(this.runningMax, tempRunningMax);
            this.runningAverage = tempRunningAverage;
            this.runningStd = tempRunningStd;
            this.runningMax = tempRunningMax;
            this.runningMin = tempRunningMin;
            this.checkAlert();
        }
    };
    StatisticsComponent.prototype.checkAlert = function () {
        // part where we check if the average load over the last 2 minutes exceeds the threshold 
        if (this.averageLast2Min > this.alertThreshold && !this.isAboveThreashold) {
            this.messageService.add("High load generated an alert - load = " +
                this.round(this.averageLast2Min, 2) + ", triggered at " + this.dateService.toString(this.currentData[this.currentData.length - 1].time, 'mediumTime'));
            this.messageService.newAlertStatus(true);
        }
        if (this.averageLast2Min < this.alertThreshold && this.isAboveThreashold) {
            this.messageService.add("Load back under Threshold at " + this.dateService.toString(this.currentData[this.currentData.length - 1].time, 'mediumTime'));
            this.messageService.newAlertStatus(false);
        }
    };
    StatisticsComponent.prototype.trend = function (oldValue, newValue) {
        if (newValue > oldValue) {
            return 1;
        }
        else if (newValue < oldValue) {
            return -1;
        }
        else {
            return 0;
        }
    };
    StatisticsComponent.prototype.round = function (value, decimals) {
        return Number(value.toFixed(decimals));
    };
    StatisticsComponent.prototype.min = function (values) {
        return values.reduce(function (min, a) {
            if (min < a) {
                return min;
            }
            else {
                return a;
            }
        });
    };
    StatisticsComponent.prototype.max = function (values) {
        return values.reduce(function (max, a) {
            if (max > a) {
                return max;
            }
            else {
                return a;
            }
        });
    };
    StatisticsComponent.prototype.standardDeviation = function (values) {
        var avg = this.average(values);
        var squareDiffs = values.map(function (value) {
            var diff = value - avg;
            var sqrDiff = diff * diff;
            return sqrDiff;
        });
        var avgSquareDiff = this.average(squareDiffs);
        var stdDev = Math.sqrt(avgSquareDiff);
        return stdDev;
    };
    StatisticsComponent.prototype.average = function (data) {
        var sum = data.reduce(function (sum, value) {
            return sum + value;
        }, 0);
        var avg = sum / data.length;
        return avg;
    };
    StatisticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/statistics/statistics.component.html"),
            styles: [__webpack_require__(/*! ./statistics.component.scss */ "./src/app/statistics/statistics.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_load_service__WEBPACK_IMPORTED_MODULE_2__["LoadService"], _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"], _date_service__WEBPACK_IMPORTED_MODULE_4__["DateService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/quentin/Documents/Code/Datadog/Frontend/load-monitoring/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map