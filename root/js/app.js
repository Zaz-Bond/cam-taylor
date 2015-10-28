var app = angular.module("camTaylorWeddingApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider){
    $routeProvider
        .when("/RSVP", {
            templateUrl : "template/rsvp/tmpl-rsvp.html",
            controller: "RsvpController",
        })
        .when("/Location", {
            templateUrl: "template/location/tmpl-location.html",
            controller: "LocationController",
        })
        .when("/Registry", {
            templateUrl: "template/registry/tmpl-registry.html",
            controller: "RegistryController",
        })
        .when("/Contact", {
            templateUrl: "template/contact/tmpl-contact.html",
            controller: "ContactController",
        })
        .otherwise("/");
}]);