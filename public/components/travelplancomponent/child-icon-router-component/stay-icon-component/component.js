angular.module("app")
  .component("stayIconComponent", {
    "templateUrl": "public/components/travelplancomponent/child-icon-router-component/stay-icon-component/nativeContent.html",
    "controller": stayIconComponentCtrl,
    "controllerAs": "stayIconComponentCtrl",
    "bindings":  {
      "childDetails": "<",
      "reflectChildSelect":"&",
      "childData": "<",
      "createChild": "&",
      "childRendererState": "<",
      "show":"<"
    }
});

function stayIconComponentCtrl() {
  var stayIconComponentCtrl = this;
  console.log(" I am inside stayIconComponentCtrl");
  console.log(stayIconComponentCtrl);
}
