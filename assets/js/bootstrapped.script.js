const container = $('.container');
var currentDay = $('#currentDay');
var showtimer = setInterval(showMomentTimer,1000);
var time = setInterval(getTime,1000);
const schedTimeFormat = 'HH:mm:ss';


/*********Getting moment timers and setting conditions*********/
function getTime () {
    time = moment().format(schedTimeFormat);
}

function showMomentTimer () {
    var now = new moment().format('dddd, MMMM Do YYYY [at] h:mm:ss a');
    currentDay.text(now);
}

var timeConditionArr = [];
setInterval ( function setTimeConditions () {
    if ( time >= '09:00:00' && time <= '10:00:00' ) { //9 am time block
        timeConditionArr[0] = 'present';
    } else if ( time >= '10:00:00') {
        timeConditionArr[0] = 'past';
    } else if ( time <= '09:00:00') {
        timeConditionArr[0] = 'future';
    }
    if ( time >= '10:00:00' && time <= '11:00:00' ) { //10 am time block
        timeConditionArr[1] = 'present';
    } else if ( time >= '11:00:00') {
        timeConditionArr[1] = 'past';
    } else if ( time <= '10:00:00') {
        timeConditionArr[1] = 'future';
    }
    if ( time >= '11:00:00' && time <= '12:00:00' ) { //11 am time block
        timeConditionArr[2] = 'present';
    } else if ( time >= '12:00:00') {
        timeConditionArr[2] = 'past';
    } else if ( time <= '11:00:00') {
        timeConditionArr[2] = 'future';
    }
    if ( time >= '12:00:00' && time <= '13:00:00' ) { //12 pm time block
        timeConditionArr[3] = 'present';
    } else if ( time >= '13:00:00') {
        timeConditionArr[3] = 'past';
    } else if ( time <= '12:00:00') {
        timeConditionArr[3] = 'future';
    }
    if ( time >= '13:00:00' && time <= '14:00:00' ) { // 1 pm time block
        timeConditionArr[4] = 'present';
    } else if ( time >= '14:00:00') {
        timeConditionArr[4] = 'past';
    } else if ( time <= '13:00:00') {
        timeConditionArr[4] = 'future';
    }
    if ( time >= '14:00:00' && time <= '15:00:00' ) { // 2 pm time block
        timeConditionArr[5] = 'present';
    } else if ( time >= '15:00:00') {
        timeConditionArr[5] = 'past';
    } else if ( time <= '14:00:00') {
        timeConditionArr[5] = 'future';
    }
    if ( time >= '15:00:00' && time <= '16:00:00' ) { // 3 pm time block
        timeConditionArr[6] = 'present';
    } else if ( time >= '16:00:00') {
        timeConditionArr[6] = 'past';
    } else if ( time <= '15:00:00') {
        timeConditionArr[6] = 'future';
    }
    if ( time >= '16:00:00' && time <= '17:00:00' ) { // 4 pm time block
        timeConditionArr[7] = 'present';
    } else if ( time >= '17:00:00') {
        timeConditionArr[7] = 'past';
    } else if ( time <= '16:00:00') {
        timeConditionArr[7] = 'future';
    }
    if ( time >= '17:00:00' && time <= '18:00:00' ) { // 5 pm time block
        timeConditionArr[8] = 'present';
    } else if ( time >= '18:00:00') {
        timeConditionArr[8] = 'past';
    } else if ( time <= '17:00:00') {
        timeConditionArr[8] = 'future';
    }
}, 1000);


/*********Constructing the schedule and classifying based on time condition*********/
//Testing Bootstrap div classification of rows and columns instead of table
const schedTimes = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
var schedList = $('<div class="container" id="schedList">');
var schedHeader = $('<div class="row">');
var schedHead1 = $('<div class="col">Time</div>');
var schedHead2 = $('<div class="col">Task Description</div>');
var schedHead3 = $('<div class="col">Save Task</div>');
schedHeader.append(schedHead1);
schedHeader.append(schedHead2);
schedHeader.append(schedHead3);
schedList.append(schedHeader);


for (let i = 0; i < 9; i++) {
    var listItem = $('<div class="row" name="Timeblock '+schedTimes[i]+'">');
    var timeDispEl = $('<div class="col">'+schedTimes[i]+'</div>');
    var textContainer = $('<div class="col time-block"></div>');
    var textBox = $('<textarea class="description" placeholder="Task description here"></textarea>');
    var saveBox = $('<div class="col saveBtn"></div>');
    var saveBtn = $('<i class="far fa-save" bttnName="'+schedTimes[i]+' button"></i>');
    
    saveBox.append(saveBtn);
    listItem.append(timeDispEl);
    textContainer.append(textBox);
    listItem.append(textContainer);
    listItem.append(saveBox);
    schedList.append(listItem);
}

container.append(schedList);

setInterval(function classifySchedule () {
        for (let j = 0; j < 9; j++) {
            if ( timeConditionArr[j] == 'past' ) {
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).addClass("past");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("present");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("future");
            } else if ( timeConditionArr[j] == 'present' ) {
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).addClass("present");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("past");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("future");
            } else if ( timeConditionArr[j] == 'future' ) {
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).addClass("future");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("present");
                $( "div[name*='Timeblock "+schedTimes[j]+"']" ).removeClass("past");
            }
        }
    }, 1000);

/*********Handling textarea and saving*********/
//TODO: Get textBox input when saveBox is clicked and save text
