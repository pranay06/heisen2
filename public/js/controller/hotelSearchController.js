angular.module("app")
.controller('hotelSearchController', function ($scope, $timeout, $q) {

  var self = this;
  self.searchText = [];
  // list of `state` value/display objects
  self.states = loadAll();
  self.querySearch = querySearch;
  self.defau = "Alabama"
        $scope.node = [
            {

                city: 'New York',
                accommodation: [
                    {
                        rootInfo: [],
                        address: "",
                        expense: {
                            value: 0,
                            currency: ""
                        },
                        name: "",
                        checkinDate: "",
                        checkoutDate: "",
                        checkinTime: "",
                        area: "",
                        options: {}

                    }
                ],
                localTravel: [
                    {
                        pickupPoint: "",
                        dropPoint: "",
                        date: "",
                        time: "",
                        companyName: "",
                        options: {}
                    }
                ]

            }
        ];

        $scope.edge = [
            [
                {
                    mode: 'Flight',
                }
            ]
        ];
        var obj = [{'key': 0}];
        $scope.obj = obj;


        $scope.add = function () {
            var tempAccomObj = {
                rootInfo: [],
                address: "",
                expense: {
                    value: 0,
                    currency: ""
                },
                name: "",
                checkinDate: "",
                checkinTime: "",
                area: "",
                options: {}

            };
            $scope.node[0].accommodation.push(tempAccomObj);

        }

//for deleting an  item

        $scope.deleteAccommodationItem = function (index) {
            $scope.node[0].accommodation.splice(index, 1);
            self.searchText.splice(index, 1);
        }
//for area auto complete


        // ******************************
        // Internal methods
        // ******************************

        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? self.states.filter(createFilterFor(query)) : self.states;
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random() * 1000, false);
            return deferred.promise;
        }

        /**
         * Build `states` list of key/value pairs
         */
        function loadAll() {
            var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
          Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
          Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
          Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
          North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
          South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
          Wisconsin, Wyoming';

            return allStates.split(/, +/g).map(function (state) {
                return {
                    value: state.toLowerCase(),
                    display: state
                };
            });
        }

        /**
         * Create filter function for a query string
         */
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
                return (state.value.indexOf(lowercaseQuery) === 0);
            };

        }

    })
