var app=angular.module("app");
app.component('localTravelResultsComponent',{
  templateUrl:'public/components/localSearchResultsParentComponent/localTravelResultsComponent/localTravelResultsComponent.html',
  controllerAs:'localTravelResults',
  controller:localTravelResultsController

});
function localTravelResultsController($http,$filter) {
  localTravelResults=this;
  // localTravelResults.myorder="before";
  // localTravelResults.range=300;
  // localTravelResults.check=false;
  // localTravelResults.sortIcon=true;

  $http.get('public/data/localTravelSearchResults.json').success(function(data){

      localTravelResults.list=data.searchResults;
      localTravelResults.data=localTravelResults.list;
      localTravelResults.filters=data.filters;
      localTravelResults.previousData=localTravelResults.data;
  });





  localTravelResults.reset=function() {
    console.log("im in reset");
    localTravelResults.check=false;
    localTravelResults.range=300;
    localTravelResults.data=localTravelResults.list;
    localTravelResults.previousData=localTravelResults.data;

  };

  // localTravelResults.sort=function(time){
  //   // console.log("im in sort"+time);
  //
  //   localTravelResults.myorder=time;
  //   //console.log("sort aaa"+localTravelResults.myorder);
  // };

  localTravelResults.selectedFilters={};
  localTravelResults.reflectValue=function(keyString,value, id){

    console.log("in reflectValue");
    console.log(id);
    console.log("in value : "+value);
    localTravelResults.selectedFilters[id]=value;
    selectedFilters=localTravelResults.selectedFilters;
    var afterFilter=[];
    count=0;
    for (variable in selectedFilters) {
      if(selectedFilters[variable].length==0){
        count++;
      }
    }
    if(count==Object.keys(selectedFilters).length ){
        localTravelResults.data=localTravelResults.previousData;
        count=0;
    }
    else{
       localTravelResults.data=localTravelResults.previousData;
       var array=localTravelResults.data;

       for(train of array) {
         countids=0;
         for (id in selectedFilters) {
           countvalues=0;
           for(filter in selectedFilters[id]){
             if(id==="price"){
               console.log("im in price ");
               console.log(train[id]);
               if(train[id]>=selectedFilters[id][0] && train[id]<=selectedFilters[id][1]){
                 countvalues++;
               }
             }
             else if(id==="company"){
               console.log("im in check box ");
               console.log(train[id]);
               console.log(selectedFilters[id][filter]);
               if(train[id]===selectedFilters[id][filter]){
                 countvalues++;
               }
             }

           }
           if(countvalues==selectedFilters[id].length){

             countids++;
           }
         }

         if(countids==Object.keys(selectedFilters).length){

           afterFilter.push(train);
         }
       }
       localTravelResults.data=afterFilter;
      //  localTravelResults.previousData=localTravelResults.data;
   }
  }
};
