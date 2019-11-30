var config = {
    information: "Removed for GitHub Upload."
};

firebase.initializeApp(config);

var database = firebase.database();

var trainLine = "";
var trainDest = "";
var trainStart = 0;
var trainFreq = 0;

$("#addNewTrain").on("click", function (event) {
    event.preventDefault();

    trainLine = $("#trainLine").val().trim();
    trainDest = $("#trainDest").val().trim();
    trainStart = $("#trainStart").val().trim();
    trainFreq = $("#trainFreq").val().trim();

    var newTrain = {
        train: trainLine,
        destination: trainDest,
        start: trainStart,
        frequency: trainFreq,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    };

    database.ref().push(newTrain);

    $("#trainLine").val("");
    $("#trainDest").val("");
    $("#trainStart").val("");
    $("#trainFreq").val("");
});

database.ref().on("child_added", function (childSnapshot) {
    var minutesToTrain = findTime(childSnapshot.val().frequency, childSnapshot.val().start);
    var nextTrain = nextArrival(minutesToTrain);

    var newRow = $("<tr>").append(
        $("<td scope='row'>" + childSnapshot.val().train + "</td>"),
        $("<td>" + childSnapshot.val().destination + "</td>"),
        $("<td>" + childSnapshot.val().frequency + "</td>"),
        $("<td>" + nextTrain + "</td>"),
        $("<td>" + minutesToTrain + "</td>")
    );

    $("#trainRows").append(newRow);

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

function findTime(frequency, startTime) {
    var tFreq = frequency;
    var tStart = startTime;

    var tStartConverted = moment(tStart, "HH:mm").subtract(1, "years"); // make sure time is set before current time

    var diffTime = moment().diff(moment(tStartConverted), "minutes"); // find the difference between the current moment and the converted train start time

    var tRemainder = diffTime % tFreq; // find the remainder between the time dfference divided by frequency

    var tMinutesTillTrain = tFreq - tRemainder; // subtract the remainder from the frequency to determine when next train will be here

    return tMinutesTillTrain;
};

function nextArrival(untilTrain) {
    var nextTrain = moment().add(untilTrain, "minutes");
    console.log("Next Train will arrive in: " + nextTrain + " minutes");

    return moment(nextTrain).format("hh:mm A");
};