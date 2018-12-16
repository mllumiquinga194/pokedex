angular.module('Pokedex')


//Configuracion de las RUTAS
.config(function($routeProvider){

    $routeProvider
    .when("/",{
        templateUrl: 'templates/home.html',
        controller: 'MainController'
    })
    .when("/detalle/:name",{
        templateUrl: 'templates/detalle.html',
        controller: 'DetalleController'
    })
    .when("/home",{
        templateUrl: 'templates/home.html',
        controller: 'MainController'
    })
    .otherwise({
        redirecTo: "/"
    })
})