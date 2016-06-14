angular.module('app')
    .component('travelBooking', {
       templateUrl: './public/components-rebuild/travel-booking/travel-booking.html',
       controller: travelBookingCtrl,
       controllerAs: "travelBooking",
       bindings: {
         "currentSelectedObj": "<",
         "metaDataOfObj": "<",
         "currentSelectedChildren": "<",
         "childrenLabels": "<"
       }
});

function travelBookingCtrl() {
  var travelBooking = this;
  console.log("Inside travelBookingCtrl################");
  console.log(travelBooking);


  travelBooking.unCheckTheSelectedOnes = function(childId) {
    console.log(" Inside unCheckTheSelectedOnes");
    for(modes in travelBooking.metaDataOfObj.essential.modesToSelectTheServices) {
      console.log("Inside the loop");
      console.log(travelBooking.metaDataOfObj.essential);
      console.log(modes);
      if(travelBooking.metaDataOfObj.essential.modesToSelectTheServices[modes].specificAttr.domainList[childId] !== undefined) {
          //When child id found
          if(travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].constructor == Array) {
            console.log("Arayyyy");
            var index = travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].indexOf(childId);
            if(index >-1) {
              console.log("index is >-1");
              console.log(index);
              travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].splice(index, 1);
              //Can be solved using angular.copy
              // var tempObjForReflection = angular.copy()
              if(index ==0) {
                console.log("Yes it was the last element");
                break;
                // travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes] = travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].concat([]);
                // delete  travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes];
                travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes] = travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].slice();
              }
            }

          }
          else {
            if(travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes].constructor ==String) {
              delete travelBooking.currentSelectedObj.essential.modesToSelectTheServices[modes];
            }
          }
      }
    }
  }

  travelBooking.arrayUnique = function(array) {
      var a = array.concat();
      for(var i=0; i<a.length; ++i) {
          for(var j=i+1; j<a.length; ++j) {
              if(a[i] === a[j])
                  a.splice(j--, 1);
          }
      }

      return a;
  }

  // travelBooking.$routerOnActivate = function() {
  //   console.log(travelBooking.metaDataOfObj.essential);
  // }

  // Essential Fiellds
  console.log(travelBooking);
  console.log("Printing essen",travelBooking.metaDataOfObj.essential);
  // travelBooking.metaDataOfObj.essential = travelBooking.metaDataOfObj.essential;
  // travelBooking.essentialFieldsData = travelBooking.currentSelectedObj.essential;
  travelBooking.arrayOfSelectedChildren = [];


  travelBooking.reflectSelectedChildren = function(arrayOfSelectedChildren) {
    travelBooking.currentSelectedChildren = arrayOfSelectedChildren;
    console.log("I am inside reflectSelectedChildren");

    console.log(travelBooking.currentSelectedChildren);

    for(cId in travelBooking.currentSelectedObj.childServices) {

      if(travelBooking.currentSelectedChildren.indexOf(cId) <0){
        //When the selected checkbox were aready there, so we need to delete them
        delete travelBooking.currentSelectedObj.childServices[cId].individualChildServices.splice(0,travelBooking.currentSelectedObj.childServices[cId].individualChildServices.length);
        travelBooking.currentSelectedObj.childServices[cId].state = "preInitial";
        break;
      }
    }
    travelBooking.currentSelectedChildren.forEach(function(childId){
      console.log("Inside foreach of children list initial");
      if(travelBooking.currentSelectedObj.childServices[childId].state == "preInitial"){
        console.log("I am going to intialize childServices");
        travelBooking.currentSelectedObj.childServices[childId].individualChildServices.push(travelBooking.metaDataOfObj.servicesIntializer[childId]);
        travelBooking.currentSelectedObj.childServices[childId].state = "initial";
      }
    });

  }


  //This needs to be in a function which gets called before html is rendered
  // travelBooking.childrenLabels = {};
  // for(mode in travelBooking.metaDataOfObj.essential.modesToSelectTheServices)
  // {
  //   var modeData = travelBooking.metaDataOfObj.essential.modesToSelectTheServices[mode];
  //   Object.assign(travelBooking.childrenLabels,modeData.specificAttr.domainList)
  //
  // }

  // travelBooking.metaDataOfChildren = travelBooking.metaDataOfObj.services;

  // travelBooking.childrenData = travelBooking.currentSelectedObj.childServices;


}
