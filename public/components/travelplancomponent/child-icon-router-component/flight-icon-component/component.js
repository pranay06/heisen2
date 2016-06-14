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
      "show":"<"
    }
  });

function flightIconComponent() {
  var flightIconComponent = this;

}
