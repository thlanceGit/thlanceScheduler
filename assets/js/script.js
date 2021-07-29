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
const schedTimes = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm'];
var schedList = $('<table>');
var schedHeader = $('<thead>');
var schedHead1 = $('<th>');
schedHead1.text("Time");
var schedHead2 = $('<th>');
schedHead2.text("Task Description");
var schedHead3 = $('<th>');
schedHead3.text("Save Task");
schedHeader.append(schedHead1);
schedHeader.append(schedHead2);
schedHeader.append(schedHead3);
schedList.append(schedHeader);
var schedBody = $('<tbody>');

for (let i = 0; i < 9; i++) {
    var listItem = $("<tr>");
    listItem.attr('class', 'time-block');
    var timeDispEl = $('<td class="hour">');
    timeDispEl.text(schedTimes[i]);
    var textContainer = $('<td>');
    var textBox = $('<textarea class="description" placeholder:"Task description here">');
    var saveBox = $('<td>');
    var saveBtn = $('<i class="far fa-save"></i>')
    saveBtn.attr('bttnName', schedTimes[i] + " button")
    
    saveBox.append(saveBtn);
    listItem.append(timeDispEl);
    textContainer.append(textBox);
    listItem.append(textContainer);
    listItem.append(saveBox);
    schedBody.append(listItem);
}

schedList.append(schedBody);
container.append(schedList);

setInterval(function classifySchedule () {
        for (let j = 0; j < 9; j++) {
            if ( timeConditionArr[j] == 'past' ) {
                $("tbody tr:nth-child("+ (j + 1) +")").addClass("past");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("present");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("future");
            } else if ( timeConditionArr[j] == 'present' ) {
                $("tbody tr:nth-child("+ (j + 1) +")").addClass("present");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("past");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("future");
            } else if ( timeConditionArr[j] == 'future' ) {
                $("tbody tr:nth-child("+ (j + 1) +")").addClass("future");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("present");
                $("tbody tr:nth-child("+ (j + 1) +")").removeClass("past");
            }
        }
    }, 1000);

/*********Handling textarea and saving*********/
//TODO: Get textBox input when saveBox is clicked and save text
