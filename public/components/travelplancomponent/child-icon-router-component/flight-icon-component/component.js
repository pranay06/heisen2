angular.module('app')
  .component('flightIconComponent', {
    "templateUrl":"public/components/travelplancomponent/child-icon-router-component/flight-icon-component/nativeContent.html",
    "controller":flightIconComponent,
    "controllerAs": "flightIconComponent",
    bindings: {
      "childDetails": "<",
      "reflectChildSelect":"&",
      "childData": "<",
      "createChild": "&",
      "childRendererState": "<",
      "show":"<",
      "tempChildBuffer": "<"
    }
  });

function flightIconComponent() {
  var flightIconComponent = this;
  console.log(" I am inside flightIconComponent");
  console.log(flightIconComponent);

  flightIconComponent.reflectChildSelectWrapper = function(childServicesData) {
    console.log(" i am inside reflectChildSelectWrapper");
    console.log(childServicesData);
    flightIconComponent.reflectChildSelect({"childServicesData":childServicesData});
  }
}
