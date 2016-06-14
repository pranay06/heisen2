angular.module("app").component("commonIconComponent", {
  templateUrl: "public/components/travelplancomponent/child-icon-router-component/common-icon-component/common-icon-component.html",
  controllerAs: "commonIconComponent",
  controller: commonIconComponent,
  bindings: {
    childDetails:"<",
    reflectChildSelect: "&",
    childData: "<",
    createChild: "&",
    childRendererState: "<",
    show: "<"
  }
});

function commonIconComponent() {
  var commonIconComponent = this;
  console.log("I am in commonIconComponent");
  console.log(commonIconComponent);
  commonIconComponent.createChild2 = function() {
    console.log(" I am inside createChild2");
  }
}
