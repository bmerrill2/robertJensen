var app = angular.module('robertJensen')

app.controller('pocketSquaresPageCtrl', ['$scope', function ($scope) {
 
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel();
  });

  $('.owl-carousel').owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    margin: 10,
    nav: true,
    navText: [
    "<i class='fa fa-arrow-circle-left'></i>",
    "<i class='fa fa-arrow-circle-right'></i>"
  ],
    responsiveClass: true
  })  

}])