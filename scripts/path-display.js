

var PathDisplayer = function (map) {
    var self = this;

    self.map = map;
    self.establishedPath = [];

    self.highlightStrokeColor = 'red';
    self.highlightFillColor = 'red';
    self.strokeColor = '#000';
    self.fillColor = '#000';
    self.lineStrokeColor = '#FF0000';

    self.DisplayPath = function (thePath) {
        self.establishedPath = thePath;
        // display the path as text
        $("#path-output").show();
        $("#display-path").html("");
        for (var i = 0; i < self.establishedPath.length; i++) {
            console.log(self.establishedPath[i]);
            var stepDescription = "<i>"+self.establishedPath[i].name+"</i>";

           // if this is the start or end then add additional text
            if (i === 0) {
                stepDescription = "Start your journey at the " + stepDescription;
            } else if (i === self.establishedPath.length - 1) {
                stepDescription = "Journey completed at the " + stepDescription;
            } else if (i > 0 && i < self.establishedPath.length - 1 && self.establishedPath[i - 1].levels.length === 1 && self.establishedPath[i + 1].levels.length === 1 && self.establishedPath[i - 1].levels[0] !== self.establishedPath[i + 1].levels[0]) {
                stepDescription = "Take the " + stepDescription + " to level " + self.establishedPath[i + 1].levels[0];
            } else {
                stepDescription = "Pass through the " + stepDescription;
            }
            // see if they're changing levels
             $("#display-path").append("<li data-index='" + i + "'>" + stepDescription + "</li>");
        }
        $("#display-path li").on("click", function () {
            self.PathClickHandler(this);
        });
        // display the path on the map
        var joins = [];
        for (var i = 0; i < self.establishedPath.length; i++) {
            // draw this building/area on the map
            self.establishedPath[i].buildingDefinition = self.DrawBuilding(self.establishedPath[i]);
            if (i + 1 < self.establishedPath.length) {
                var thisItem = self.establishedPath[i];
                var nextItem = self.establishedPath[i + 1];
                for (var x = 0; x < thisItem.joins.length; x++) {
                    if (thisItem.joins[x].linkToId == nextItem.id) {
                        // this is the join we want
                        joins.push(thisItem.joins[x]);
                        break;
                    }
                }
            }
        }

        for (var i = 0; i < joins.length - 1; i++) {
            var nextJoin = joins[i + 1];

            var line = self.DrawLine(joins[i].coordinates, nextJoin.coordinates);
            self.establishedPath[i].lineDefinition = line;
        }

        // put a marker at the start and end points
        var markerDefinition = self.DrawMarker(joins[0].coordinates, "images/marker-start.png");
        self.establishedPath[0].markerDefinition = markerDefinition;
        markerDefinition = self.DrawMarker(joins[joins.length - 1].coordinates, "images/marker-end.png");
        self.establishedPath[self.establishedPath.length-1].markerDefinition = markerDefinition;


    };

    self.DrawMarker = function (coordinates, image) {
        var coords = new google.maps.LatLng(coordinates.lat, coordinates.lng);
        var markerDefinition = new google.maps.Marker({
            position: coords,
            icon: image
        });
        markerDefinition.setMap(self.map);
        return markerDefinition;
    };

    self.DrawLine = function (startCoordinate, endCoordinate) {
        var startCo = new google.maps.LatLng(startCoordinate.lat, startCoordinate.lng);
        var endCo = new google.maps.LatLng(endCoordinate.lat, endCoordinate.lng);
        var coords = [startCo, endCo]
        var path = new google.maps.Polyline({
            path: coords,
            geodesic: true,
            strokeColor: self.lineStrokeColor,
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        path.setMap(self.map);
        return path;
    };

    self.DrawBuilding = function (building) {
        var buildingCoords = [];
        for (var c = 0; c < building.coordinates.length; c++) {
            var coordinate = building.coordinates[c];
            buildingCoords.push(new google.maps.LatLng(coordinate.lat, coordinate.lng));
        }
        var buildingDefinition = new google.maps.Polygon({
            paths: buildingCoords,
            draggable: false,
            editable: false,
            strokeColor: self.strokeColor,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: self.fillColor,
            fillOpacity: 0.35,
            originalStrokeColor: self.strokeColor,
            originalFillColor: self.fillColor,
            key: building.key,
            description: building.description,
            title: building.title
        });
        buildingDefinition.setMap(self.map);
        return buildingDefinition;
    };

    self.RemoveAllBuildingHighlight = function () {
        for (var i = 0; i < self.establishedPath.length; i++) {
            self.establishedPath[i].buildingDefinition.setOptions({
                strokeColor: self.strokeColor,
                fillColor: self.fillColor
            });
        }
    };

    self.HighlightBuilding = function (building) {
        building.setOptions({
            strokeColor: self.highlightStrokeColor,
            fillColor: self.highlightFillColor
        });
    };

    self.ClearExistingData = function () {
        for (var i = 0; i < self.establishedPath.length; i++) {
            self.establishedPath[i].buildingDefinition.setMap(null);
            if (self.establishedPath[i].lineDefinition) {
                self.establishedPath[i].lineDefinition.setMap(null);
            }
            if (self.establishedPath[i].markerDefinition) {
                self.establishedPath[i].markerDefinition.setMap(null);
            }
        }
        self.establishedPath = [];
    };

    self.PathClickHandler = function (item) {
        self.RemoveAllBuildingHighlight();
        var clickedItem = self.establishedPath[$(item).data("index")];
        self.HighlightBuilding(clickedItem.buildingDefinition);
    };
};