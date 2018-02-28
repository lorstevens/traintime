
// Firebase API Key

var config = {
    apiKey: "AIzaSyCcEpbcqJ7jLtvH_A4sS-Y9fYE7dwDz6bw",
    authDomain: "lornaproject-cbbec.firebaseapp.com",
    databaseURL: "https://lornaproject-cbbec.firebaseio.com",
    projectId: "lornaproject-cbbec",
    storageBucket: "lornaproject-cbbec.appspot.com",
    messagingSenderId: "679728535251"
  };
  firebase.initializeApp(config);

  var database = firebase.database();




// click function 

  $('#submitTrain').on('click', function(e){

  e.preventDefault();

// setting variable to the value of user input
 	var trainName = $("#name-input").val().trim();
	var trainWhere = $("#where-input").val().trim();
  var trainTime = $("#time-input").val().trim();
  var trainF = $("#frequency-input").val().trim();


// creating the object for the Firebase database
 var newTrain = {
    name: trainName,
    destination: trainWhere,
    first_time: trainTime,
    frequency: trainF


  };


     // return false; (not needed here?)

// pushing the newTrain object into the Firbase database
 	database.ref().push(newTrain);


//clearing the input forrms after the user clicks submit

  $("#name-input").val("");
  $("#where-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

 	 });



//setting the object

  database.ref().on("child_added", function(childSnapshot) {

    var sv = childSnapshot.val();

//current time
    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

//time first train leaves
    var startTime = moment (sv.first_time, "hh:mm");
    console.log("First Train Leaves at: " + moment(startTime).format("hh:mm"));

//difference between current time and start time
    var diffTime = moment().diff(moment(startTime), "minutes");
    console.log("Difference in first train and current time: " + diffTime);

//renmainder of time difference and frequency 
    var remainder = diffTime % sv.frequency;
    console.log("remainder: " + remainder);

//frequency minus remainder
    var trainMinutes = sv.frequency - remainder;
    console.log("Minutes until train: " + trainMinutes);

//add trainMinutes to current time to figure out next train arrival time
    var nextTrain = moment().add(trainMinutes, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("H:mm"));


//prepend the firebase onject to the HTML
        $(".table > tbody").prepend("<tr><td>" + sv.name + "</td><td>" + sv.destination + "</td><td>" +
  sv.frequency + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + trainMinutes);

        

 

  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


  	
 

