angular.module('app')
    .component('childrenRenderer', {
       templateUrl: './public/components-rebuild/children-renderer/children-renderer.html',
       controller: childrenRendererController,
       controllerAs: "childrenRenderer",
       bindings: {
         childrenFieldsData: "<",
         childrenFieldsMetaData: "<",
         selectedChildren: "<",
         childrenLabels: "<",
         reflectFocussedRenderer:"&"
       }
    });
function childrenRendererController() {
  var childrenRenderer = this;


  childrenRenderer.focussedChild=function(service)
  {
    childrenRenderer.reflectFocussedRenderer({'service':service})
  }
  console.log("}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]");
  console.log("childrenFieldsMetaData");
  console.log(childrenRenderer.childrenFieldsMetaData);

  console.log("&*&*&*&* I am inside childrenRendererController");
  console.log(childrenRenderer);
  console.log(")))))))))))))))))))))))))))))))))))))))))))))))))))");
  console.log(childrenRenderer.selectedChildren);
console.log("inside children renderer88888888888888888888888888888")
console.log(childrenRenderer.childrenFieldsData);
  childrenRenderer.deleteChildGroup = function(childId){
    if(childrenRenderer.childrenFieldsData[childId] !== undefined) {
      delete(childrenRenderer.childrenFieldsData[childId]);
    }
  }

  // childrenRenderer.$onInit =  function() {
  //
  //   childrenRenderer.selectedChildren.forEach(function(childId)
  //    {
  //       if(childrenRenderer.childrenFieldsData[childId] === undefined){
  //         childrenRenderer.childrenFieldsData[childId] = [];
  //       }
  //    });
  // }


  // childrenRenderer.selectedChildren.forEach(function(childId)
  //  {
  //    console.log(childId);
  //   if(childrenRenderer.childrenFieldsData[childId] === undefined){
  //     childrenRenderer.childrenFieldsData[childId] = [{}];
  //   }
  // });

}
