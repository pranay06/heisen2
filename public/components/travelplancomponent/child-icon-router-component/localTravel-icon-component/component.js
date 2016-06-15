angular.module("app")
  .component("localTravelIconComponent", {
    "templateUrl": "public/components/travelplancomponent/child-icon-router-component/localTravel-icon-component/nativeContent.html",
    "controller": localTravelIconComponentCtrl,
    "controllerAs": "localTravelIconComponentCtrl",
    "bindings":  {
      "childDetails": "<",
      "reflectChildSelect":"&",
      "childData": "<",
      "createChild": "&",
      "childRendererState": "<",
      "show":"<"
    }
});

function localTravelIconComponentCtrl() {
  var localTravelIconComponentCtrl = this;
  console.log(" I am inside localTravelIconComponentCtrl");
  console.log(localTravelIconComponentCtrl);


  localTravelIconComponentCtrl.reflectChildSelectWrapper = function(childServicesData) {
    console.log(" i am inside reflectChildSelectWrapper");
    console.log(childServicesData);
    localTravelIconComponentCtrl.reflectChildSelect({"childServicesData":childServicesData});
  }

}
