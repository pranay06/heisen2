angular.module('app').component("localTravelParentComponent", {
    templateUrl: 'public/components/localSearchResultsParentComponent/localTravelResultsParentComponent.html',
    controllerAs: "localTravelParent",
    controller: localTravelParentController
});
function localTravelParentController($http, $rootScope) {
    var localTravelParent = this;
    localTravelParent.travelPlanObject = [
        {
            type: "location",
            cityName: "Bangalore"
        },
        {
            type: "transit",
            childServices: {
                booking: {
                    requested: {mode: "localTravel"}
                }
            }
        },
        {
            type: "location",
            cityName: "Bangalore Air Port"
        }
    ];

    localTravelParent.currentnodeedge = function (id, type) {
        console.log(id);
        console.log(type);

    };
}
