angular.module('app')
    .component('childrenRouter', {
       templateUrl: './public/components-rebuild/children-router/children-router.html',
       controller: childrenRouterController,
       controllerAs: "childrenRouter",
       bindings: {
         childFieldsData: "<",
         metaDataOfChildFields: "<",
         cardHeading: "@",
         childId: "@",
         deleteAll: "&",
         childServiceId:"<",
         focussedChildRenderer:"&"
       }
    });
function childrenRouterController() {
  var childrenRouter = this;
  console.log("Inside childrenRouterController");
  console.log(childrenRouter);


  childrenRouter.focussedForm=function()
  {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++");
    console.log( "childrenRouter.focussedForm");
    childrenRouter.focussedChildRenderer({service:childrenRouter.childId});
  }
  childrenRouter.deleteAllWrapper = function() {
    childrenRouter.deleteAll({"childId":childrenRouter.childId});
  }
}
