var parishionerApp = angular.module("parishionerApp", [] );

parishionerApp.config([ '$routeProvider', function( $routeProvider ) {
    $routeProvider.
        when( '/main', {
            templateUrl : 'template/main.html',
            controller : 'grabData'
        }).
        when( '/directory', {
            templateUrl : 'template/directory.html',
            controller : 'grabData'
        }).
        when( '/contributions', {
            templateUrl : 'template/contributions.html',
            controller : 'grabContributions' 
        }).
        otherwise({
            redirectTo: '/main'
        });
}]);

$('ul.nav > li').click( function() {
    $('ul.nav > li').removeClass('active');
    $(this).addClass('active');                
});