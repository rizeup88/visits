// Business Logic for Trip Log
function TripLog() {
  this.trips = []
  this.currentId = 0
}

TripLog.prototype.addTrip = function(trip) {
  trip.id = this.assignId();
  this.trips.push(trip)
}

TripLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

function Trip(location, visitDate, stayLength, favoriteSight) {
  this.location = location,
  this.visitDate = visitDate,
  this.stayLength = stayLength,
  this.favoriteSight = favoriteSight
}

var tripLog = new TripLog();
var trip1 = new Trip("Paris, France", "January 2019", "4 days", "Notre Dame");
var trip2 = new Trip("Rome, Italy", "January 2019", "2 days", "Trevi Fountain");
var trip3 = new Trip("Puerto Vallarta, Mexico", "November 2016", "7 days", "Malecón Shopping Boulevard");
tripLog.addTrip(trip1);
tripLog.addTrip(trip2);
tripLog.addTrip(trip3);

// User Interface Logic
$(document).ready(function() {
  $("button#paris").click(function() {
    $("#destination1").empty().append("<li>Location: " + trip1.location + "</li>", "<li>Date of Visit: " + trip1.visitDate + "</li>", "<li>Length of Stay: " + trip1.stayLength + "</li>", "<li>Favorite Sight to Visit: " + trip1.favoriteSight + "</li>").toggle();
  })
  $("button#rome").click(function() {
    $("#destination2").empty().append("<li>Location: " + trip2.location + "</li>", "<li>Date of Visit: " + trip2.visitDate + "</li>", "<li>Length of Stay: " + trip2.stayLength + "</li>", "<li>Favorite Sight to Visit: " + trip2.favoriteSight + "</li>").toggle();
  })
  $("button#mexico").click(function() {
    $("#destination3").empty().append("<li>Location: " + trip3.location + "</li>", "<li>Date of Visit: " + trip3.visitDate + "</li>", "<li>Length of Stay: " + trip3.stayLength + "</li>", "<li>Favorite Sight to Visit: " + trip3.favoriteSight + "</li>").toggle();
  })
});
