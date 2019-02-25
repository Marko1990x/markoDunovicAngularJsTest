angular.module('MainApp')
    .component('homeDetails', {
        template: 
        `Izabrama je kucaX sa ID-om: <span>{{$ctrl.homeId}}</span> <br>`,
        controller: ['$routeParams',
        function homeDetailsController($routeParams) {
            this.homeId = $routeParams.homeId;
        }
    ]
    })