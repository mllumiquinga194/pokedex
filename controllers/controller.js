angular.module('Pokedex')

    .controller('MainController', function ($scope, GetDatosPokemons) {
        $scope.habilitades;

        //Para mostrar la lista de todos los POKEMONS
        GetDatosPokemons.getData('', function (data) {
            $scope.habilitades = data.results;
        });

        $scope.showWindow = function (url) {

            //Recibo la URL del pokemon al que le dí click para ver sus detalles, con ese url me traigo su informacion desde GetDatosPokemons.getData
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
                
                //Dentro de DATA tengo otros URL, uno de ellos está en flavor_text_entries[1].flavor_text la cual me trae la descripcion del pokemon
                GetDatosPokemons.getData(data.species.url, function (description) {
                    $scope.description = description.flavor_text_entries[1].flavor_text;
                });

            });

            //Muestro la ventana MODAL
            $('#bookmarkModal').modal('show');
        }
    })

    //Controlador del TEMPLATE DETALLE
    .controller('DetalleController', function ($scope, GetDatosPokemons, $routeParams) {
        
        //Este controlador recibe como parametro el nombre del pokemon al cual quiero ver sus detalles, con este nombre armo la URL en el servicio y realizo la peticion GET al API
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
            
            //Dentro de DATA tengo otros URL, uno de ellos está en flavor_text_entries[1].flavor_text la cual me trae la descripcion del pokemon
            GetDatosPokemons.getData(data.species.url, function (description) {
                $scope.description = description.flavor_text_entries[1].flavor_text;
            });
            
        });
    })