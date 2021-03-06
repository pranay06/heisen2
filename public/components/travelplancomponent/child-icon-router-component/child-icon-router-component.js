angular.module("app").component("childIconRouterComponent", {

  templateUrl: "public/components/travelplancomponent/child-icon-router-component/child-icon-router-component.html",
  controllerAs: "childIconRouterComponent",
  controller: childIconRouterComponent,
  bindings: {
    childType:"<",
    childDetails:"<",
    childData: "<",
    reflectChildSelect: "&",
    createChild: "&",
    childRendererState: "<",
    show: "<",
    createChildObject: "&",
    tempChildBuffer: "<"
  }
});

function childIconRouterComponent() {

  var childIconRouterComponent = this;
  console.log(" i am inside childIconRouterComponent");
  console.log(childIconRouterComponent);
  childIconRouterComponent.getSelectedChild = function(childServicesData) {
    console.log(" i am inside childServicesData");
    console.log(childServicesData);
    childIconRouterComponent.reflectChildSelect({"childId":childIconRouterComponent.childType, "childServicesData":childServicesData});
    console.log("first return");
    // console.log(r);
  }
  childIconRouterComponent.createChildWrapper = function() {
    console.log(" I am inside createChildWrapper");
    childIconRouterComponent.createChild({"childId":childIconRouterComponent.childType})
  }

  childIconRouterComponent.createChildWrapperWithId = function(childId) {
    console.log(" I am inside createChildWrapper");
    console.log(childId);
    childIconRouterComponent.createChild({"childId":childId});
  }

  childIconRouterComponent.askToCreateNewChild = function() {
    console.log("I am inside childIconRouterComponent.askToCreateNewChild");
    childIconRouterComponent.createChild({"childId":childIconRouterComponent.childType});
  }



}
