angular.module('app').
  component('timePickerBox',{
    templateUrl: 'custom-input-component/subCustomComponents/time/nativeContent.html',
    controller: TimePickerBoxCtrl,
    controllerAs: "TimePickerBoxCtrl"
    ,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&',
      reflectFocussedInput:'&'
    }
  });

function TimePickerBoxCtrl($timeout, $scope)
{
    var ctrl = this;
    console.log("Inside controller of timePickerBoxCtrl");
    console.log(this);
    ctrl.currentlyFocussed=function()
    {
      ctrl.reflectFocussedInput();
      console.log("currentlyFocussed DatePickerCtrl");
      //this.reflectFocussedInput();
    }
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };


}
