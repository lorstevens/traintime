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

  // $("#submitBid").on("click",function(){
  // // event.preventDefault();

	 //  var trainName = $("#name-input").val().trim();
	 //  var trainWhere = $("#where-input").val().trim();
	 //  // var trainTime = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
	 //  var trainFrequency = $("#frequency-input").val().trim();

	 //  console.log(trainName);

	 //  return false;

  // // Creates local "temporary" object for holding employee data
  // // var newUser = {
  // //   Name: trainName,
  // //   destination: trainWhere,
  // //   Time: trainTime,
  // //   Frequency: trainFrequency



  // });


 

  $('#submitTrain').on('click', function(e){

  e.preventDefault();

 	var trainName = $("#name-input").val().trim();
	var trainWhere = $("#where-input").val().trim();
	// var trainTime = moment($("#time-input").val().trim(), "DD/MM/YY").format("X");
	var trainFrequency = $("#frequency-input").val().trim();

  	console.log(trainName);
  	console.log(trainWhere);
  	// console.log(trainTime);
  	console.log(trainFrequency);


   return false;

 	var newUser = {
	    name: trainName,
	    destination: trainWhere,
	    time: trainTime,
	    frequency: trainFrequency
	}

 	database.ref().set(newUser);

  // $("#name-input").val("");
  // $("#where-input").val("");
  // $("#frequency-input").val("");

});


  	
 

