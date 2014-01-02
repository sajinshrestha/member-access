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
        $scope.predicate = ['date_given', "fund_name"];
    });
})