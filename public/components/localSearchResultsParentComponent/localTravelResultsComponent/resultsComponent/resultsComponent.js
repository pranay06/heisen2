var app=angular.module("app");
app.component('resultsComponent',{
  templateUrl:'public/components/localSearchResultsParentComponent/localTravelResultsComponent/resultsComponent/resultsComponent.html',
  controllerAs:'resultComponent',
  controller:resultComponentController,
  bindings:{
    one:'<'
  }
});
function resultComponentController() {
  resultComponent=this;
  resultComponent.showbutton=true;

};
