var app = angular.module('app', ['ngRoute']);

var item = [{

        name: "name 1",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "name2",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    },
    {
        name: "",
        email: "",
        website: "",
        link: ""
    }];

app.controller("MissionsController", function(){
    this.missions = item;
})

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html'
        }).
        when('/meet',{
            templateUrl: 'partials/firstDropDown/meet.html'
        }).
        when('/times',{
            templateUrl: 'partials/firstDropDown/times.html'
        }).
        when('/beliefs',{
            templateUrl: 'partials/firstDropDown/beliefs.html'
        }).
        when('/truths',{
            templateUrl: 'partials/firstDropDown/truths.html'
        }).
        when('/contact',{
            templateUrl: 'partials/firstDropDown/contact.html'
        }).
        when('/youth',{
            templateUrl: 'partials/secondDropDown/youth.html'
        }).
        when('/rr',{
            templateUrl: 'partials/secondDropDown/rr.html'
        }).
        when('/mpact',{
            templateUrl: 'partials/secondDropDown/mpact.html'
        }).
        when('/children',{
            templateUrl: 'partials/secondDropDown/children.html'
        }).
        when('/women',{
            templateUrl: 'partials/secondDropDown/women.html'
        }).
        when('/men',{
            templateUrl: 'partials/secondDropDown/men.html'
        }).
        when('/missions',{
            templateUrl: 'partials/secondDropDown/missions.html'
        }).
        otherwise({
            redirectTo: '/home'
        });

}]);

