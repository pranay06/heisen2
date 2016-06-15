/**
 * Created by lenovo on 23-05-2016.
 */
var app = angular.module("app").component("edgeComponent", {

    templateUrl: "public/components/travelplancomponent/edgeComponent/edgeComponent.html",
    controllerAs: "edge",
    controller: edgeController,
    bindings: {
      'travelelement': '<',
      'currentnode':'<',
      'transitchildservices':'<',
      'currentnodeedgetravel':'&',
      "reflectselectedchild": "&",
      "metadata": "<",
      "reflectchildcreation": "&",
      "createChildService": "&"
    }
});

function edgeController() {

    var edge = this;
    console.log("I am inside edge");
    console.log(edge);
    edge.tempBufferForMutuallyExclusiveChild = {};
    edge.createChildServiceById = function(childId) {
        // edge.travelelement.childServices[childId].individualChildServices = edge.metadata.servicesIntializer[childId];
          edge.travelelement.childServices[childId] = {
            "state": "initial",
            "individualChildServices": {
              "state": "initial",
              "requested": {}
            }
          }

          edge.reflectselectedchild({"currentElement":edge.travelelement, "currentElementIndex":edge.currentedge,"selectedChild":childId,"metadata":edge.metadata});

          edge.createChildService({"childId":childId});
          edge.tempBufferForMutuallyExclusiveChild[childId] = edge.travelelement.childServices[childId]
          console.log("Before return");
          console.log(edge.tempBufferForMutuallyExclusiveChild[childId]);
          // return edge.travelelement.childServices[childId];
    }
    edge.selectededge = function (indexid,type) {
      consoles.log("Edge is clicked");
      console.log(indexid);
      console.log(type);
      console.log({'index':indexid,'type':type});
      //  edge.currentnodeedgetravel({clicked:{'index':indexid,'type':type }});
    };

}
