/**
* Created by lenovo on 23-05-2016.
*/
var app = angular.module("app").component("nodeComponent", {

  templateUrl: "public/components/travelplancomponent/nodeComponent/nodeComponent.html",
  controllerAs: "node",
  controller: nodeController,
  bindings: {
    'travelelement': '<',
    'currentnode':'<',
    'locationchildservices':'<',
    'currentnodeedgetravel':'&',
    "reflectselectedchild": "&",
    "metadata": "<",
    "reflectchildcreation": "&"
  }
});

function nodeController(_) {

  var node = this;

  node.$onInit = function() {
    node.childDisplayState = {};
    for(childId in node.metadata.servicesDetails) {
      if(node.travelelement.childServices[childId] == undefined) {
          node.childDisplayState[childId] = "notExist";
      }
      else {
        node.childDisplayState[childId] = "exists";
      }
    }
  }
  console.log("travel element inside node controller");
  console.log(node);
  console.log("value got is");
  console.log(node.travelelement.essential.noDependencyData);
  node.locationMetaData = node.metadata.essential.noDependencyData.location;
  node.edit=false;
  node.onReflect = function(keyString,value,id) {
    console.log("Inside on reflect of node component");
    console.log(value);
    console.log(id);
    node.travelelement.essential.noDependencyData[id] = value;
  };
  node.show_autocomplete=function(){
    if(node.edit==true)
    {
      node.edit=false;
    }
    else
    {
      node.edit=true;
    }

  };

  node.available = [];
  node.locationMetaData.specificAttr.querySearch = function(searchText,url,callBack)
  {
    console.log(searchText);
    $http({
      method: 'GET',
      // url: 'autoComplete.json'
      url:url,
    }).then(function successCallback(response) {
      node.available=response.data;
      console.log("url is $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
      console.log(url);
      console.log(" first inside sucess callback");
      console.log(response);
      console.log("inside sucess callback");
      console.log(node.available.states);

      // //  ctrl.querySearch(searchText);
      // var output=response.createFilterFor(searchText)
      var results = searchText ?node.available.states.filter( node.createFilterFor(searchText) ) : [];
      console.log("results are");
      console.log(results);
      callBack(results);

      //filteredData(results);
    }, function errorCallback(response) {});

  }

  node.createFilterFor = function(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(state) {

      return (angular.lowercase(state).indexOf(lowercaseQuery) === 0);
    };
  };
  node.sendDetailsOfElement  = function(elementIndex) {
    var selectedChildren = [];
    for(childGroup in node.travelelement.essential.modesToSelectTheServices) {
      selectedChildren = selectedChildren.concat(node.travelelement.essential.modesToSelectTheServices[childGroup]);

    }
    selectedChildren = _.uniq(selectedChildren);
    node.currentnodeedgetravel({"currentElement":node.travelelement, "currentElementIndex":elementIndex,"selectedChildren":selectedChildren});

  }
  node.showMimic = true;


  // // Reflecting the value changed in the custom input box
  // node.onReflect = function(keyString,value,id) {
  //   console.log("Inside on reflect of nodeComponent");
  //   console.log("id is");
  //   console.log(id);
  //   console.log("value is");
  //   console.log(value);
  //   node.fieldsData[id] = value;
  // };

  node.sendDetailsOfChild = function(elementIndex, selectedChild) {

    console.log(" I am inside sendDetailsOfChild");
    console.log(elementIndex, selectedChild);
    console.log(node.metadata);

    console.log("after the loop");
    console.log(node.travelelement);
    node.reflectselectedchild({"currentElement":node.travelelement, "currentElementIndex":nodeelementIndex,"selectedChild":selectedChild,"metadata":node.metadata});

  }

  node.createChild = function(childId) {
    node.currentElement.childServices[childId] = node.metadata.servicesIntializer[childId];
    node.reflectchildcreation({"currentElement":node.travelelement, "currentElementIndex":elementIndex,"createdChild":childId,"metadata":node.metadata});
  }


  node.reflectChildSelect = function(childId) {
    console.log("I am inside reflectChildSelect");
    node.childDisplayState[node.currentFocussedObject] = "exists";
    node.childDisplayState[childId] = "focus";
    node.currentFocussedObject = childId;
    node.reflectselectedchild({"currentElement":node.travelelement, "currentElementIndex":node.currentnode,"selectedChild":childId,"metadata":node.metadata});
  }
  node.dummyState = "notExist";
  node.createMimicChild = function(childId) {
    console.log("I am inside createMimicChild");
    node.dummyState = "focus";
    node.mimicChild = [{a:1}];
  }

};
