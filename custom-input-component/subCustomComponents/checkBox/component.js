angular.module('app')
  .component('checkBox',{
    templateUrl: 'custom-input-component/subCustomComponents/checkBox/nativeContent.html',
    controller: CheckBoxBoxCtrl,
    controllerAs: "CheckBoxBoxCtrl"
    ,
    bindings: {
      label: '@',
      domainList: '<',
      required: '@',
      bindData: '<',
      reflectComponent: '&'
    }
});
function CheckBoxBoxCtrl($scope) {
   var ctrl = this;
   console.log("Inside CheckBoxBoxCtrl");
   console.log(ctrl);

   ctrl.$onChanges = function(changedObj) {
    
    console.log("In Changed Object");
    console.log(changedObj);
    console.log(changedObj.bindData);
    console.log("****************");
    // console.log(changedObj.isFirstChange());
    console.log("^^^^^^^^^^^^^^^");

    if(changedObj.bindData.currentValue !== undefined) {
      //If bindData is defined
      ctrl.checkBoxInternalData  = []; //Problem candidate
      console.log("constructor shown");
      console.log(ctrl.domainList.constructor);
      if(ctrl.domainList.constructor == Object) {
        for(itemId in ctrl.domainList){
          if(changedObj.bindData.currentValue.indexOf(itemId) >-1){
            //There is a value found in bindData updated  by parent from domainList
              ctrl.checkBoxInternalData.push(true);
          }
          else {
            ctrl.checkBoxInternalData.push(false);
          }
        }
      }
      else {
        if(ctrl.domainList.constructor == Array) {
          ctrl.domainList.forEach(function(item){
            if(changedObj.bindData.currentValue.indexOf(item) >-1) {
              ctrl.checkBoxInternalData.push(true);
            }
            else {
              ctrl.checkBoxInternalData.push(false);
            }
          });
        }
      }


    }

    // console.log(changedObj.bindData.isFirstChange());

    //  if(changedObj.bindData) {
    //
    //    console.log(changedObj.bindData.length.currentValue);
    //    console.log(changedObj.bindData.length.previousValue);
    //  }
  };
   $scope.$watch('this.bindData',function(nv) {
     console.log("i am inside the watch....");
     console.log(nv);
    //  console.log(ov);
   });

   ctrl.$onInit = function() {
     console.log("==================");
     console.log(ctrl.bindData);
     console.log("+++++++++++++++++");
    //  if(ctrl.bindData == undefined) {
    //    ctrl.bindData = [];
    //  }
    ctrl.checkBoxInternalData = [];
    if(ctrl.domainList.constructor === Object) {
      ctrl.listType = "object";
    }
    else {
        if(ctrl.domainList.constructor === Array) {
          ctrl.listType = "array";
        }
    }
    if(ctrl.bindData !== undefined) {
      if(ctrl.domainList.constructor === Object)
        {

          for (itemId in ctrl.domainList) {
            console.log("I am inside loop of domain list");
            console.log(itemId);
            console.log(ctrl.bindData);

            if(ctrl.bindData.indexOf(itemId)>-1) {
              console.log("Inside if");
              ctrl.checkBoxInternalData.push(true);
            }
            else
            {
              console.log("else");
              ctrl.checkBoxInternalData.push(false);
            }
          }

        }
      else
        if (ctrl.domainList.constructor === Array) {
          ctrl.domainList.forEach(function(item){
              if(ctrl.bindData.indexOf(item)>-1) {
                  ctrl.checkBoxInternalData.push(true);
              }
              else {
                  ctrl.checkBoxInternalData.push(false);
              }

          });
        }
    }

   };
   // ctrl.bindData = [];

   this.reflectValue = function(value, itemIndex) {
     console.log(value);

     console.log("Inside Toggle");
     var status = false;
     var idx = ctrl.bindData.indexOf(value);
     console.log("Index ", idx);

     if(ctrl.checkBoxInternalData[itemIndex] == false)
     {
       ctrl.bindData.push(value);
       ctrl.checkBoxInternalData[itemIndex] = true;
     }

     else {
       ctrl.checkBoxInternalData[itemIndex] = false;
       ctrl.bindData.splice(idx,1);
     }
     console.log("Status ", status);
     // ctrl.ngChecked({currentSelectedItems: ctrl.bindData});


     this.reflectComponent({value:ctrl.bindData});
   };


   console.log("Inside CheckBoxBoxCtrl");
   console.log(CheckBoxBoxCtrl.domainList);
 }
