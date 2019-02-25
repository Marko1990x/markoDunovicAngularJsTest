angular.module('MainApp').controller('PhoneController', function($scope){
    $scope.title = 'Stranica sa gallerijom';
    $scope.phones = [
        {
            name: "picture of a flower 1",
            snippet: "ovo je flower 1",
            id: 1,
        },
        {
            name: "picture of a cat",
            snippet: "ovo je slika macke",
            id: 2,
        },
        {
            name: "picture of a bird",
            snippet: "ovo je slika ptice",
            id: 3,
        }
        
    ]
})