
var pageModel = function (locationsData) {

    var self = this;
    self.map = null;
    self.locations = [];
    self.joins = [];
    self.editor;
    self.rawLocationsData = locationsData;
    self.currentLevel = 1;
    self.possibleLevels = [{ title: "Basement", value: 0 }, { title: "L1", value: 1 }, { title: "L2", value: 2 }, { title: "L3", value: 3 }, { title: "L4", value: 4 }];
    self.selectedLocation = null;

    self.GenerateLocationsModel = function () {
        self.locations = self.rawLocationsData.locations;
    };
    self.GenerateJoinsModel = function () {
        self.joins = self.rawLocationsData.joins;
    };

    self.DrawVisibleLocations = function () {
        for (var i = 0; i < self.locations.length; i++) {
            if (self.IsLocationAtLevel(self.locations[i], self.currentLevel)) {
                self.DrawLocationOnMap(self.locations[i]);
            }
        }
    };
    self.DrawVisibleJoins = function () {
        for (var i = 0; i < self.joins.length; i++) {
            if (self.IsJoinAtLevel(self.joins[i], self.currentLevel)) {
                self.DrawJoinOnMap(self.joins[i]);
            }
        }
    };

    self.DrawJoinOnMap = function (join) {

        var coords = new google.maps.LatLng(join.coordinates.lat, join.coordinates.lng);
        var markerDefinition = new google.maps.Marker({
            position: coords
        });
        markerDefinition.setMap(map);
        join.markerDefinition = markerDefinition;
        return markerDefinition;
    };

    self.DrawLocationOnMap = function (location) {
        //console.log("about to draw location");
        //console.log(location);
        if (location.coordinates && location.coordinates.length > 0) {
            //console.log("drawing " + location.id)
            // draw each location, add a reference to the polygon back into the js object
            var polygonCoords = [];
            //console.log(location.coordinates);
            for (var c = 0; c < location.coordinates.length; c++) {
                var coordinate = location.coordinates[c];
                //console.log(coordinate);
                polygonCoords.push(new google.maps.LatLng(coordinate.lat, coordinate.lng));
            }
            //console.log(polygonCoords);
            var polygonDefinition = new google.maps.Polygon({
                paths: polygonCoords,
                //draggable: false,
                //editable: false,
                //strokeColor: colour,
                //strokeOpacity: 0,
                //strokeWeight: 2,
                //fillColor: colour,
                //fillOpacity: .5
            });
            polygonDefinition.setMap(map);

            // add event listeners for polygon maipulation

            google.maps.event.addListener(polygonDefinition.getPath(), 'set_at', function () {
                self.editor.PolygonCompletedCallback(polygonDefinition, true);
            });

            google.maps.event.addListener(polygonDefinition.getPath(), 'insert_at', function () {
                self.editor.PolygonCompletedCallback(polygonDefinition, true);
            });

            google.maps.event.addListener(polygonDefinition, 'click', function (event) {
                self.LocationClicked(location);
            }); 

            location.polygonDefinition = polygonDefinition;
        }
    };

    self.LocationClicked = function (location) {
        if (self.editor.newJoinSelectingId) {
            self.editor.LocationSelectedForNewJoin(location);
        } else {
            self.SetSelectedLocation(location);
        }
    };
    self.MarkerWasAddedCallback = function (coord) {
        if (self.editor.newJoinSelectingCoords) {
            self.editor.CoordinatesSetForNewJoin(coord);
        }
    };

    self.SetSelectedLocation = function (location) {
        self.ClearSelectedLocation();
        self.selectedLocation = location;
        self.MakePolygonEditable(location);
        self.editor.DisplaySelectedLocation(location);
    };
    self.ClearSelectedLocation = function () {
        self.MakeAllPolygonsNotEditable();
        self.selectedLocation = null;
    };

    self.MakePolygonEditable = function (location) {
        if (location.polygonDefinition) {
            location.polygonDefinition.setEditable(true);
        }
    };

    self.MakeAllPolygonsNotEditable = function () {
        for (var i = 0; i < self.locations.length; i++) {
            if (self.locations[i].polygonDefinition) {
                if (self.locations[i].polygonDefinition.getEditable()) {
                    self.locations[i].polygonDefinition.setEditable(false);
                }
            }
        }
    };

    self.EraseAlLocations = function () {
        for (var i = 0; i < self.locations.length; i++) {
            if (self.locations[i].polygonDefinition) {
                self.locations[i].polygonDefinition.setMap(null);
            }
        }
    };
    self.EraseAllJoins = function () {
        for (var i = 0; i < self.joins.length; i++) {
            if (self.joins[i].markerDefinition) {
                self.joins[i].markerDefinition.setMap(null);
            }
        }
    };

    self.IsLocationAtLevel = function (location, level) {
        return location.levels.includes(level);
    };
    self.IsJoinAtLevel = function (join, level) {
        return join.level === level;
    };

    self.InitMap = function () {
        var uluru = {
            lat: -39.072474,
            lng: 174.055992
        };
        map = new google.maps.Map(document.getElementById('map'), {
            center: uluru,
            zoom: 17,
            mapTypeId: 'satellite'
        });

        // this creates the base options for the drawings (polygons/buildings)
        var drawingManager = new google.maps.drawing.DrawingManager({
            drawingControl: true,
            drawingMode: null,
            drawingControlOptions: {
                position: google.maps.ControlPosition.TOP_CENTER,
                //drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
                drawingModes: ['marker', 'polygon']
            },
            markerOptions: {
                //icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
            },
            polygonOptions: {
                editable: true
            }
        });
        drawingManager.setMap(map);

        google.maps.event.addListener(drawingManager, 'overlaycomplete', function (event) {
            if (event.type == 'marker') {
                var lat = event.overlay.getPosition().lat();
                var lng = event.overlay.getPosition().lng();
                var coord = '{"lat": ' + lat + ', "lng": ' + lng + '}';
                console.log(coord);
                self.MarkerWasAddedCallback(coord);
            }
        });

    };

    self.SetCurrentLevel = function (level) {
        self.ClearSelectedLocation();
        if (level !== self.currentLevel) {
            console.log("setting level to " + level);
            self.currentLevel = level;
            self.editor.ClearCurrentItem();
            self.EraseAlLocations();
            self.EraseAllJoins();
            self.DrawVisibleLocations();
            self.DrawVisibleJoins();
        }
    };

    self.GetJoinsForLocation = function (location) {
        var joins = [];
        for (var i = 0; i < self.joins.length; i++) {
            if (self.joins[i].locations.includes(location.id)) {
                joins.push(self.joins[i]);
            }
        }
        return joins;
    };

    self.InitializePage = function () {
        self.InitMap();
        self.GenerateLocationsModel();
        self.GenerateJoinsModel();
        self.editor = new editor(this);
        self.DrawVisibleLocations();
        self.DrawVisibleJoins();
    };
    self.InitializePage();
};

var editor = function (pageModel) {

    var self = this;
    self.pageModel = pageModel;
    self.newJoinSelectingId = false;
    self.newJoinLocation = null;
    self.newJoinSelectingCoords = false;


    self.PopulateLocationsList = function () {
        self.ClearLocationsList();
        for (var i = 0; i < self.pageModel.locations.length; i++) {
            var location = self.pageModel.locations[i];
            $("#locations-list").append($('<div>' + location.id + ' - ' + location.name + '</div>')
                .attr({ "data-locationid": location.id })
                .addClass("location-item")
            );
        }
        $(".location-item").on("click", function () {
            LocationItemClicked($(this));
        });
    };
    self.ClearLocationsList = function () {
        $("#locations-list").html("");
    };

    self.NewJoinRequested = function () {
        self.newJoinSelectingId = true;
        $("#new-join-instructions").text("Select a building on the map that you want to join this one too").show();
    };
    self.LocationSelectedForNewJoin = function (location) {
        self.newJoinSelectingId = false;
        self.newJoinSelectingCoords = true;
        $("#new-join-instructions").text("Put a marker on the map for where this join should be");
        self.newJoinLocation = location;
    };
    self.CoordinatesSetForNewJoin = function (coordinates) {
        self.newJoinSelectingCoords = false;
        $("#new-join-instructions").hide();

        $("#join-container").append($('<div class="join-item"></div>').append($("<input type='text' class='linkToId' value='" + self.newJoinLocation.id + "' /><input class='coordinates' type='text' value='" + coordinates + "' />")).append($("<span class='delete-join'>X</span>")));
    };

    self.DisplaySelectedLocation = function () {
        var location = self.pageModel.selectedLocation;
        if (!location) {
            return;
        }

        // find any joins associated with this location
        var relatedJoins = self.pageModel.GetJoinsForLocation(location);

        //$("#item-index").val(index);
        $("#item-id").val(location.id);
        $("#item-name").val(location.name);
        $("#item-levels").val(JSON.stringify(location.levels) || "[]");
        $("#item-ddshow").val(location.showInDropdowns || false);
        $("#join-container").html("");
        for (var i = 0; i < relatedJoins.length; i++) {
            var thisJoin = relatedJoins[i];
            var otherLocationId;
            if (thisJoin.locations[0] === location.id) {
                otherLocationId = thisJoin.locations[1];
            } else {
                otherLocationId = thisJoin.locations[0];
            }
            
            $("#join-container").append($('<div class="join-item"></div>').append($("<input type='text' class='linkToId' value='" + otherLocationId + "' /><input class='coordinates' type='text' value='" + JSON.stringify(thisJoin.coordinates) + "' />")).append($("<span class='delete-join'>X</span>")));
        }
        $("#item-coordinates-input").val(JSON.stringify(location.coordinates) || "[]");

        $(".delete-join").on("click", function () {
            $(this).parent().remove();
        });
    };

    self.ClearCurrentItem = function () {
        $("#item-id").val("");
        $("#item-name").val("");
        $("#item-levels").val("");
        $("#item-ddshow").val("");
        $("#join-container").html("");
        $("#item-coordinates-input").val("");
    };

    self.SaveALocationsData = function () {

        var thisId = $("#item-id").val();


        /***************** joins garbage *********************/
        var links = [];
        $("#join-container").find(".join-item").each(function () {
            var link = {
                locations: [thisId , $(this).find(".linkToId").val()],
                coordinates: JSON.parse($(this).find(".coordinates").val()),
                level: self.pageModel.currentLevel
            };
            links.push(link);
        });

        // if any joins for this id that exist that aren't in the above 'links' collection then they need to be deleted
        for (var i = self.pageModel.joins.length - 1; i >= 0; i--) {
            if (self.pageModel.joins[i].locations.includes(thisId)) {
                var otherValue;
                if (self.pageModel.joins[i].locations[0] == thisId) {
                    otherValue = self.pageModel.joins[i].locations[1];
                } else {
                    otherValue = self.pageModel.joins[i].locations[0];
                }
                // check to see if these values exist in the links collection, if not, delete them please!
                var found = false;
                for (var x = 0; x < links.length; x++) {
                    if (links[x].locations.includes(thisId) && links[x].locations.includes(otherValue)) {
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    self.pageModel.joins = self.pageModel.joins.splice(i, 1);
                }
            }
        }

        // if any joins exist that match ids in the above collection the copy over the coordinates
        for (i = 0; i < self.pageModel.joins.length; i++) {
            for (x = 0; x < links.length; x++) {
                if (links[x].locations.includes(thisId) && links[x].locations.includes(otherValue)) {
                    self.pageModel.joins[i].coordinates = links[x].coordinates;
                }
            }
        }

        // if any joins in the links collection don't already exist then create them
        for (x = 0; x < links.length; x++) {
            found = false;
            for (i = 0; i < self.pageModel.joins.length; i++) {
                if (self.pageModel.joins[i].locations.includes(thisId) && self.pageModel.joins[i].locations.includes(links[x].locations[1])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                self.pageModel.joins.push(links[x]);
            }

        }

        /***************** END joins garbage *********************/

        console.log("generating location object");
        var updatedLocation = {
            id: $("#item-id").val(),
            name: $("#item-name").val(),
            levels: JSON.parse( $("#item-levels").val() ),
            showInDropdowns: $("#item-ddshow").val(),
            //joins: links,
            coordinates: JSON.parse( $("#item-coordinates-input").val() )
        };
        console.log("about to save location");
        console.log(updatedLocation);

        var locationFound = false;
        for (var i = 0; i < self.pageModel.locations.length; i++) {
            var location = self.pageModel.locations[i];
            if (location.id === updatedLocation.id) {
                updatedLocation.polygonDefinition = self.pageModel.locations[i].polygonDefinition;
                self.pageModel.locations[i] = updatedLocation;
                locationFound = true;
            }
        }

        if (!locationFound) {
            console.log("adding as a new location");
            self.pageModel.locations.push(updatedLocation);
        }

        //self.SetBackLocationsToInput();
    };

    self.SetBackLocationsToInput = function () {
        //const cloneLocations = Object.assign([], self.pageModel.locations);
        //// we have to clear off any objects we don't want ...
        //for (var i = 0; i < cloneLocations.length; i++) {
        //    //delete cloneLocations[i].polygonDefinition;
        //}
        //console.log(cloneLocations);
        //var locationJson = JSON.stringify(cloneLocations);
        //console.log(locationJson);
        //$("#load-locations-input").val(locationJson);

        var copiedLocations = [];
        for (var i = 0; i < self.pageModel.locations.length; i++) {
            var item = self.pageModel.locations[i];
            var copiedLocation = {
                id: item.id,
                name: item.name,
                levels: item.levels,
                showInDropdowns: item.showInDropdowns,
                joins: item.joins,
                coordinates: item.coordinates
            };
            copiedLocations.push(copiedLocation);
        }
        var copiedJoins = [];
        for (var y = 0; y < self.pageModel.joins.length; y++) {
            item = self.pageModel.joins[y];
            var copiedJoin = {
                locations: item.locations,
                coordinates: item.coordinates,
                level: item.level
            };
            copiedJoins.push(copiedJoin);
        }
        var pageInfo = {
            joins: copiedJoins,
            locations: copiedLocations
        };
        var locationJson = JSON.stringify(pageInfo);
        $("#load-locations-input").val(locationJson);
    };

    self.PolygonCompletedCallback = function (polygon, isUpdate) {
        console.log("PolygonWasDrawnCallback called");

        // all we need to do is put the co-ordinates into the appropriate editor window
        var coordinatesArray = polygon.getPath().getArray();
        var allCoordinates = "";
        for (var i = 0; i < coordinatesArray.length; i++) {
            //console.log("new google.maps.LatLng(" + coordinatesArray[i].lat() + ", " + coordinatesArray[i].lng() + "),");
            var coord = '{"lat": ' + coordinatesArray[i].lat() + ', "lng": ' + coordinatesArray[i].lng() + '},';
            allCoordinates = allCoordinates + coord;
        }
        allCoordinates = allCoordinates.slice(0, -1);
        $("#item-coordinates-input").val("[" + allCoordinates + "]");

    };

    self.InititalizeEditor = function () {
        // put the data on the page so we can see it
        $("#load-locations-input").val(JSON.stringify(self.pageModel.rawLocationsData));
        self.PopulateLocationsList();

        $("#save-selected-item").on("click", function () {
            self.SaveALocationsData();
        });
    };
    self.InititalizeEditor();
};

