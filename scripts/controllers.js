parishionerApp.controller( "grabData", function( $scope, $http ) {
    $scope.index = 0;
    $scope.households = {};
    $http.post( 'data/directory.json' ).success( function ( data ) {
        $scope.apiData = data.directory;
    }); 
});

parishionerApp.controller( "grabGroups", function( $scope, $http ) {
    $scope.index = 0;
    $scope.groups = {};
    $http.post( 'data/groupsH.json' ).success( function ( data ) {
        $scope.groups = data.household;
    }); 
});

parishionerApp.controller( "grabContributions", function( $scope, $http ) {
    $scope.index = 0;
    $scope.contributions = {};
    $http.post( 'data/contributions.json' ).success( function ( data ) {
        $scope.contributions = data.posted;
        // var log = [];
        // angular.forEach( contributions, function( value, key ) {
        //     this.push( key + ': ' + value );
        // }, log );
    });
})

// parishionerApp.controller( "grabData", function( $scope, $http ) {
//     $scope.index = 0;
//     $scope.households = {};
//     $http.JsonP( 'https://secure3.iconcmo.com/api/', {
//         "Auth": {
//             "Phone": "5555555555",
//             "Username": "JoePUser",
//             "Password": "password"
//         },
//         "Request": {
//             "Module": "membership",
//             "Section": "directory",
//             "Filters": {
//                 "id": 721
//             },
//             "Sort": {
//                 "last_name": "ascending",
//                 "first_name": "ascending"
//             }
//         }
//     } ).success( function ( data ) {
//         $scope.households = data.directory;
// //         console.log( $scope.households[0] );
//     });
// });