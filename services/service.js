angular.module('Pokedex')

    .service('GetDatosPokemons', function ($http) {

        this.getData = function (url, success, failure) {

            if (url === '') {
                return $http.get('https://pokeapi.co/api/v2/pokemon/')
                    .success(success)
                    .error(failure);
            }

            if (url.indexOf('https') == 0) {
                return $http.get(url)
                    .success(success)
                    .error(failure);
            }

            return $http.get('https://pokeapi.co/api/v2/pokemon/' + url + '/')
                .success(success)
                .error(failure);

        }
    })