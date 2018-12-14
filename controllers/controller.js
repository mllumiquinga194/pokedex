angular.module('Pokedex')

    .controller('MainController', function ($scope, GetDatosPokemons) {
        $scope.habilitades;

        GetDatosPokemons.getData('', function (data) {
            $scope.habilitades = data.results;
        });

        $scope.showWindow = function (url) {
            GetDatosPokemons.getData(url, function (data) {
                $scope.name      = data.forms[0].name;
                $scope.url       = data.forms[0].url;
                $scope.img       = data.sprites.front_default;
                $scope.id        = data.id;
                $scope.height    = data.height/10;
                $scope.weight    = data.weight/10;
                $scope.type      = data.types[0].type.name;
                $scope.abilities = data.abilities[0].ability.name;
                $scope.category  = data.species.name;
                
                GetDatosPokemons.getData(data.species.url, function (description) {
                    $scope.description = description.flavor_text_entries[1].flavor_text;
                });

            });

            $('#bookmarkModal').modal('show');
        }
    })
    .controller('DetalleController', function ($scope, GetDatosPokemons, $routeParams) {
        
        GetDatosPokemons.getData($routeParams.name, function (data) {

            $scope.name      = data.forms[0].name;
            $scope.url       = data.forms[0].url;
            $scope.img       = data.sprites.front_default;
            $scope.id        = data.id;
            $scope.height    = data.height/10;
            $scope.weight    = data.weight/10;
            $scope.type      = data.types[0].type.name;
            $scope.abilities = data.abilities[0].ability.name;
            $scope.category  = data.species.name;
            
            GetDatosPokemons.getData(data.species.url, function (description) {
                $scope.description = description.flavor_text_entries[1].flavor_text;
            });
            
        });
    })