angular.module('Pokedex')

//Este sercivio se encarga de realizar las peticiones al servidor
    .service('GetDatosPokemons', function ($http) {

        //Recibo las URL/NOMBRE para realizar las peticiones
        this.getData = function (url, success, failure) {

            //Si URL es un string vacio, realizo al peticion con el siguiente string 'https://pokeapi.co/api/v2/pokemon/'
            if (url === '') {
                return $http.get('https://pokeapi.co/api/v2/pokemon/')
                    .success(success)
                    .error(failure);
            }

            //Si la URL contiene el string 'https' es porque ya es una URL formada y realizo la peticion con dicha URL
            if (url.indexOf('https') == 0) {
                return $http.get(url)
                    .success(success)
                    .error(failure);
            }

            //Si no cumple con las anteriores, asumo que recibe el nombre el algun pokemon y con ese nombre armo la URL para traer sus datos.
            return $http.get('https://pokeapi.co/api/v2/pokemon/' + url + '/')
                .success(success)
                .error(failure);

        }
    })