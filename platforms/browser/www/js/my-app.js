// Determine theme depending on device
var isAndroid = Framework7.prototype.device.android === true;
var isIos = Framework7.prototype.device.ios === true;

// Set Template7 global devices flags
Template7.global = {
    android: isAndroid,
    ios: isIos
};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Init App
var myApp = new Framework7({
    // Enable Material theme for Android device only
    material: isAndroid ? true : false,
    // Enable Template7 pages
    template7Pages: true
});

var nearbyView = myApp.addView('#nearby', {
    domCache: true
});
var cameraView = myApp.addView('#camera', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true,
    domCache: true
});
var routesView = myApp.addView('#routes', {
    domCache: true
});
var purchasesView = myApp.addView('#purchases', {
    domCache: true
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });

    nearbyView.router.loadPage("views/nearby/home.html");
    cameraView.router.loadPage("views/camera/home.html");
    routesView.router.loadPage("views/routes/home.html");
    purchasesView.router.loadPage("views/purchases/home.html");
});


myApp.onPageInit('nearby/home', function (page) {
    // Do something here for "about" page

})

myApp.onPageInit('camera/home', function (page) {
    // Do something here for "about" page
    console.log("VVVV");
})

// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page
    console.log("XXX");
})

myApp.onPageInit('index', function (page) {
    // Do something here for "about" page
    //view3.router.loadPage()
    console.log("LLL");
})
