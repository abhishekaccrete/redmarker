// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
var question_data = [{
	"id" : 1,
	"question" : "Important aspects of property management",
	"sound" : "http:\/\/www.wavsource.com\/snds_2014-11-02_5108491365167486\/people\/politics\/clinton_200101_funny.wav",
	//"sound" : "http:\/\/www.wavsource.com\/snds_2014-06-01_3524379041952374\/people\/politics\/clinton_200101_funny.wav",
	"options" : [{
		"label" : "good tenants",
		"image" : "http:\/\/www.drspropertyservices.ie\/attachments\/Image\/property-maintenance.jpg",
		"correct" : true
	}, {
		"label" : "rent paid on time",
		"image" : "http:\/\/www.handymanlocations.co.uk\/Images\/CompanyImages\/Woolston-Property-Maintenance-585282-5.jpeg",
		"correct" : false
	}, {
		"label" : "easy landlords",
		"image" : "http:\/\/www.frontlinepropertymaintenance.com.au\/images\/about.jpg",
		"correct" : false
	}]
}, {
	"id" : 2,
	"question" : "Most difficult part of property management",
	//"sound" : "http:\/\/www.wavsource.com\/snds_2014-06-01_3524379041952374\/people\/politics\/baker_arduous.wav",
	"sound": "http:\/\/www.wavsource.com\/snds_2014-11-02_5108491365167486\/people\/politics\/baker_arduous.wav",
	"options" : [{
		"label" : "dealing with tenants",
		"image" : "http:\/\/www.nwfacilities.com\/wp-content\/uploads\/2009\/12\/Property-Maintenance-600.jpg",
		"correct" : false
	}, {
		"label" : "vacancies",
		"image" : "http:\/\/www.p10ps.co.uk\/Property%20Maintenance.jpg",
		"correct" : true
	}, {
		"label" : "property maintenance",
		"image" : "http:\/\/buildmateltd.co.uk\/uploads\/Main-Logo.jpg",
		"correct" : false
	}]
}];

var mediaPlayer = Titanium.Media.createAudioPlayer();
