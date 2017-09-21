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



  var trainName = "";
  var trainWhere= "";
  var trainTime = "";


  $('#submitTrain').on('click', function(e){

  e.preventDefault();

 	var trainName = $("#name-input").val().trim();
	var trainWhere = $("#where-input").val().trim();
  var trainTime = $("#time-input").val().trim();
  var trainF = $("#frequency-input").val().trim();



 var newTrain = {
    name: trainName,
    destination: trainWhere,
    first_time: trainTime,
    frequency: trainF


  };


     // return false;
 	database.ref().push(newTrain);

  $("#name-input").val("");
  $("#where-input").val("");
  $("#first_time").val("");
  $("#frequency-input").val("");

 	 });





  database.ref().on("child_added", function(childSnapshot) {

    var sv = childSnapshot.val();

    // console.log(sv.name);
    // console.log(sv.destination);
    // console.log(sv.first_time);
    // console.log(sv.frequency);


    var trainFrequency = sv.frequency;

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var startTime = moment (sv.first_time, "hh:mm");
    console.log("please work" + moment(startTime).format("hh:mm"));

    var diffTime = moment().diff(moment(startTime), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var remainder = diffTime % trainFrequency;
    console.log(remainder);

    var trainMinutes = trainFrequency - remainder;
    console.log("MINUTES TILL TRAIN: " + trainMinutes);

    var nextTrain = moment().add(trainMinutes, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



        $(".table > tbody").prepend("<tr><td>" + sv.name + "</td><td>" + sv.destination + "</td><td>" +
  sv.frequency + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + trainMinutes + "</td><td>");

        

 

  }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


  	
 

