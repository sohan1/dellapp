// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'templateservicemod'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
    })

    /*Sidemenu Pages*/

    .state('app.home', {
            url: "/home",
            views: {
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'HomeCtrl'
                }
            }
        })
        .state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/profile.html",
                    controller: 'ProfileCtrl'
                }
            }
        })
        .state('app.postinfo', {
            url: "/postinfo",
            views: {
                'menuContent': {
                    templateUrl: "templates/postinfo.html",
                    controller: 'PostinfoCtrl'
                }
            }
        })
        .state('app.postinfofb', {
            url: "/postinfofb",
            views: {
                'menuContent': {
                    templateUrl: "templates/postinfofb.html",
                    controller: 'PostinfofbCtrl'
                }
            }
        })
        .state('app.suggestpost', {
            url: "/suggestpost",
            views: {
                'menuContent': {
                    templateUrl: "templates/suggestpost.html",
                    controller: 'SuggestpostCtrl'
                }
            }
        })
        .state('app.postfb', {
            url: "/postfb",
            views: {
                'menuContent': {
                    templateUrl: "templates/postfb.html",
                    controller: 'PostfbCtrl'
                }
            }
        })
        .state('app.leaderboard', {
            url: "/leaderboard",
            views: {
                'menuContent': {
                    templateUrl: "templates/leaderboard.html",
                    controller: 'LeaderboardCtrl'
                }
            }
        })
        .state('app.post', {
            url: "/post",
            views: {
                'menuContent': {
                    templateUrl: "templates/post.html",
                    controller: 'PostCtrl'
                }
            }
        })
        .state('app.createpost', {
            url: "/createpost",
            views: {
                'menuContent': {
                    templateUrl: "templates/createpost.html",
                    controller: 'CreatepostCtrl'
                }
            }
        })
        .state('app.table', {
            url: "/table",
            views: {
                'menuContent': {
                    templateUrl: "templates/table.html",
                    controller: 'TableCtrl'
                }
            }
        })
        .state('app.tablefb', {
            url: "/tablefb",
            views: {
                'menuContent': {
                    templateUrl: "templates/tablefb.html",
                    controller: 'TablefbCtrl'
                }
            }
        })
        .state('app.suggestedpost', {
            url: "/suggestedpost",
            views: {
                'menuContent': {
                    templateUrl: "templates/suggestedpost.html",
                    controller: 'SuggestedpostCtrl'
                }
            }
        })
        .state('app.twitterpost', {
            url: "/twitterpost",
            views: {
                'menuContent': {
                    templateUrl: "templates/twitterpost.html",
                    controller: 'TwitterpostCtrl'
                }
            }
        })
        .state('app.fbpost', {
            url: "/fbpost",
            views: {
                'menuContent': {
                    templateUrl: "templates/fbpost.html",
                    controller: 'FbpostCtrl'
                }
            }
        })
        /*Simple Pages*/

    .state('login', {
            url: "/login",
            templateUrl: "templates/login.html",
            controller: 'LoginCtrl'
        })
        .state('search', {
            url: "/search",
            templateUrl: "templates/search.html",
            controller: 'SearchCtrl'
        })

    .state('welcome', {
        url: "/welcome",
        templateUrl: "templates/welcome.html",
        controller: 'WelcomeCtrl'
    })

    .state('editprofile', {
        url: "/editprofile",
        templateUrl: "templates/editprofile.html",
        controller: 'EditprofileCtrl'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
});