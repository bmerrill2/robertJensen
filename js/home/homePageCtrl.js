var app = angular.module('robertJensen')

app.controller('homePageCtrl', ['$scope', function ($scope) {
  
  $(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});
  
  $('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    margin:10,
    nav:false,
    responsiveClass:true
})

}])