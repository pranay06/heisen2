angular.module('app')
  .component('modeIconComponent', {
    "templateUrl":"public/components/travelplancomponent/child-icon-router-component/mode-icon-component/nativeContent.html",
    "controller":modeIconComponent,
    "controllerAs": "modeIconComponent",
    "bindings": {
      "childDetails": "<",
      "reflectChildSelect":"&",
      "childData": "<",
      "createChild": "&",
      "childRendererState": "<",
      "show":"<",
      "tempChildBuffer": "<"
    }
});

function modeIconComponent() {
  var modeIconComponent = this;
  console.log("I am inside modeIconComponent");

  console.log(modeIconComponent);

  modeIconComponent.modeShow = false;
  modeIconComponent.showModes = function()  {
    console.log(" I am in showModes");
    modeIconComponent.modeShow = !modeIconComponent.modeShow;
  }

  modeIconComponent.selectMode = function(modeId) {
      console.log("i am inside selectmode");

      modeIconComponent.selectedMode = modeId;
      modeIconComponent.createChild({"childId":modeId});
      modeIconComponent.childData.state = "initial";
      console.log(" I have returned");
      console.log(modeIconComponent.tempChildBuffer[modeId]);

      console.log(modeIconComponent.childObj);
      modeIconComponent.childData.state = 'initial';
  }

  modeIconComponent.reflectChildSelectWrapper = function() {
    modeIconComponent.reflectChildSelect({"childId":modeIconComponent.selectedMode});
  }

}
