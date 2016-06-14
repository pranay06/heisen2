var app = angular.module("app").component("stayRenderer", {
    templateUrl: "./public/components-rebuild/stay/child-renderer.html",
    controllerAs: "stayRenderer",
    controller: stayRendererCtrl,
    bindings: {
      "childFieldsData": "<",
      "metaDataOfChildFields": "<",
      "cardHeading": "@",
      "deleteAll": "&",
      "currentlyFocussedForm":"&"
    }
});

function stayRendererCtrl()
{


  var stayRenderer = this;
  console.log("inside stay %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(stayRenderer);
  // stayRenderer.$onInit = function() {
  //   console.log("I am in stay renderer onit");
  //   console.log(stayRenderer.childFieldsData);
  //   if(stayRenderer.childFieldsData.length == 0) {
  //     console.log("I am inside if of stayRenderer");
  //     stayRenderer.childFieldsData.push({});
  //   }
  //   console.log(stayRenderer.childFieldsData);
  //   console.log("end of oninit stay");
  // }

  stayRenderer.reflectFormIsFoccused=function()
  {
    console.log("stay form is focussed")
    stayRenderer.currentlyFocussedForm();
  }
  console.log("Stay renderer");
  console.log(stayRenderer);
  stayRenderer.onDelete = function(index) {
    console.log("inside on delete");
    console.log(index);
    stayRenderer.childFieldsData.splice(index,1);
    if(stayRenderer.childFieldsData == 0)
      {
        console.log("Inside if of stayRenderer");
        stayRenderer.deleteAll();
      }
  }

  stayRenderer.onAdd = function(index) {
    stayRenderer.childFieldsData.push({"state":"initial","requested": {}});
  }


  stayRenderer.onEdit = function(index) {
    console.log("I am inside of stayRenderer onedit");
    console.log(index);
    stayRenderer.childFieldsData[index].state = "request";
  }
}
