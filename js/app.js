var app = angular.module('robertJensen', ['firebase', 'ui.router', 'ui.grid', 'ui.grid.resizeColumns', 'ngMaterial', 'ngAria', 'ngAnimate', 'ngMessages', 'ui.grid.importer', 'ui.grid.selection'])

.controller('appCtrl', function ($scope) {

})

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/home/homePage.html',
      controller: 'homePageCtrl'
    })
    .state('about', {
      url: '/about-us',
      templateUrl: 'js/about/aboutPage.html',
      controller: 'aboutPageCtrl',
    })
  .state('philosophy', {
      url: '/philosophy',
      templateUrl: 'js/philosophy/philosophyPage.html',
      controller: 'philosophyPageCtrl',
    })
  .state('ties', {
      url: '/ties',
      templateUrl: 'js/ties/tiesPage.html',
      controller: 'tiesPageCtrl',
    })
  .state('pocketSquares', {
      url: '/pocket-squares',
      templateUrl: 'js/pocketSquares/pocketSquaresPage.html',
      controller: 'pocketSquaresPageCtrl',
    })
  .state('retailers', {
      url: '/retailers',
      templateUrl: 'js/retailers/retailersPage.html',
      controller: 'retailersPageCtrl',
    })
  .state('contact', {
      url: '/contact-us',
      templateUrl: 'js/contact/contactPage.html',
      controller: 'contactPageCtrl',
    })
})

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.definePalette('robertJensen', {
    '50': 'FAFAFA',
    '100': 'F3F2ED',
    '200': 'EEEEEE',
    '300': 'E0E0E0',
    '400': 'B3BBBF',
    '500': '9E9E9E',
    '600': 'ECECE8',
    '700': '616161',
    '800': '424242',
    '900': '57585B',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light

    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined 
  })


  $mdThemingProvider.theme('default')
    .primaryPalette('robertJensen', {
      'default': '400',
      'hue-1': '100',
      'hue-2': '600',
      'hue-3': '900'
    })
    .accentPalette('grey', {
      'default': '900' // use shade 200 for default, and keep all other shades the same
    });
})

$(".nav a").on("click", function(){
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});