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

var timeCondition = Array(8).map((_, i) => i);
setInterval ( function setTimeConditions () {
    var timeConditionArr = [...Array(8)].map((_, i) => i);
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
    console.log(timeCondition);
     timeConditionArr;
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
    listItem.attr('name', i);
    var timeDispEl = $('<td class="hour">');
    timeDispEl.text(schedTimes[i]);
    var textContainer = $('<td>');
    var textBox = $('<textarea class="description" placeholder:"Task description here">');
    textBox.attr('name', schedTimes[i]);
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

/*setInterval(
    $.each($(".time-block"), function classifySchedule () {
        for (let j = 0; j < 9; j++) {
            index = j+1;
            var condition = timeCondition[index];
            console.log(condition);
            if ( condition == 'past' ) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } else if ( condition == 'present' ) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            } else if ( condition == 'future' ) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        }
    }), 1000);*/



//TODO: IF loop(s) change class attribute to past/future depending on condition
//item depending on what time it is
setInterval (function classifySchedule () {
for (let i = 0; i < 9; i++) {
    if ( timeCondition[i] == 'past' ) {
        $("tbody tr:nth-child(1)").addClass("past");
        $("tbody tr:nth-child(1)").removeClass("present");
        $("tbody tr:nth-child(1)").removeClass("future");
    } else if ( timeCondition[i] == "present" ) {
        $("tbody tr:nth-child(1)").addClass("present");
        $("tbody tr:nth-child(1)").removeClass("past");
        $("tbody tr:nth-child(1)").removeClass("future");
    } else if ( timeCondition[i] == "future" ) {
        $("tbody tr:nth-child(1)").addClass("future");
        $("tbody tr:nth-child(1)").removeClass("present");
        $("tbody tr:nth-child(1)").removeClass("past");
    }
}
    if ( timeCondition[1] == 'past' ) {
        $('tbody tr:nth-child(2)').addClass('past');
        $('tbody tr:nth-child(2)').removeClass('present');
        $('tbody tr:nth-child(2)').removeClass('future');
    } else if ( timeCondition[1] == 'present' ) {
        $('tbody tr:nth-child(2)').addClass('present');
        $('tbody tr:nth-child(2)').removeClass('past');
        $('tbody tr:nth-child(2)').removeClass('future');
    } else if ( timeCondition[1] == 'future' ) {
        $('tbody tr:nth-child(2)').addClass('future');
        $('tbody tr:nth-child(2)').removeClass('present');
        $('tbody tr:nth-child(2)').removeClass('past');
    }
    if ( timeCondition[2] == 'past' ) {
        $('tbody tr:nth-child(3)').addClass('past');
        $('tbody tr:nth-child(3)').removeClass('present');
        $('tbody tr:nth-child(3)').removeClass('future');
    } else if ( timeCondition[2] == 'present' ) {
        $('tbody tr:nth-child(3)').addClass('present');
        $('tbody tr:nth-child(3)').removeClass('past');
        $('tbody tr:nth-child(3)').removeClass('future');
    } else if ( timeCondition[2] == 'future' ) {
        $('tbody tr:nth-child(3)').addClass('future');
        $('tbody tr:nth-child(3)').removeClass('present');
        $('tbody tr:nth-child(3)').removeClass('past');
    }
    if ( timeCondition[3] == 'past' ) {
        $('tbody tr:nth-child(4)').addClass('past');
        $('tbody tr:nth-child(4)').removeClass('present');
        $('tbody tr:nth-child(4)').removeClass('future');
    } else if ( timeCondition[3] == 'present' ) {
        $('tbody tr:nth-child(4)').addClass('present');
        $('tbody tr:nth-child(4)').removeClass('past');
        $('tbody tr:nth-child(4)').removeClass('future');
    } else if ( timeCondition[3] == 'future' ) {
        $('tbody tr:nth-child(4)').addClass('future');
        $('tbody tr:nth-child(4)').removeClass('present');
        $('tbody tr:nth-child(4)').removeClass('past');
    }
    if ( timeCondition[4] == 'past' ) {
        $('tbody tr:nth-child(5)').addClass('past');
        $('tbody tr:nth-child(5)').removeClass('present');
        $('tbody tr:nth-child(5)').removeClass('future');
    } else if ( timeCondition[4] == 'present' ) {
        $('tbody tr:nth-child(5)').addClass('present');
        $('tbody tr:nth-child(5)').removeClass('past');
        $('tbody tr:nth-child(5)').removeClass('future');
    } else if ( timeCondition[4] == 'future' ) {
        $('tbody tr:nth-child(5)').addClass('future');
        $('tbody tr:nth-child(5)').removeClass('present');
        $('tbody tr:nth-child(5)').removeClass('past');
    }
    if ( timeCondition[5] == 'past' ) {
        $('tbody tr:nth-child(6)').addClass('past');
        $('tbody tr:nth-child(6)').removeClass('present');
        $('tbody tr:nth-child(6)').removeClass('future');
    } else if ( timeCondition[5] == 'present' ) {
        $('tbody tr:nth-child(6)').addClass('present');
        $('tbody tr:nth-child(6)').removeClass('past');
        $('tbody tr:nth-child(6)').removeClass('future');
    } else if ( timeCondition[5] == 'future' ) {
        $('tbody tr:nth-child(6)').addClass('future');
        $('tbody tr:nth-child(6)').removeClass('present');
        $('tbody tr:nth-child(6)').removeClass('past');
    }
    if ( timeCondition[6] == 'past' ) {
        $('tbody tr:nth-child(7)').addClass('past');
        $('tbody tr:nth-child(7)').removeClass('present');
        $('tbody tr:nth-child(7)').removeClass('future');
    } else if ( timeCondition[6] == 'present' ) {
        $('tbody tr:nth-child(7)').addClass('present');
        $('tbody tr:nth-child(7)').removeClass('past');
        $('tbody tr:nth-child(7)').removeClass('future');
    } else if ( timeCondition[6] == 'future' ) {
        $('tbody tr:nth-child(7)').addClass('future');
        $('tbody tr:nth-child(7)').removeClass('present');
        $('tbody tr:nth-child(7)').removeClass('past');
    }
    if ( timeCondition[7] == 'past' ) {
        $('tbody tr:nth-child(8)').addClass('past');
        $('tbody tr:nth-child(8)').removeClass('present');
        $('tbody tr:nth-child(8)').removeClass('future');
    } else if ( timeCondition[7] == 'present' ) {
        $('tbody tr:nth-child(8)').addClass('present');
        $('tbody tr:nth-child(8)').removeClass('past');
        $('tbody tr:nth-child(8)').removeClass('future');
    } else if ( timeCondition[7] == 'future' ) {
        $('tbody tr:nth-child(8)').addClass('future');
        $('tbody tr:nth-child(8)').removeClass('present');
        $('tbody tr:nth-child(8)').removeClass('past');
    }
    if ( timeCondition[8] == 'past' ) {
        $('tbody tr:nth-child(9)').addClass('past');
        $('tbody tr:nth-child(9)').removeClass('present');
        $('tbody tr:nth-child(9)').removeClass('future');
    } else if ( timeCondition[8] == 'present' ) {
        $('tbody tr:nth-child(9)').addClass('present');
        $('tbody tr:nth-child(9)').removeClass('past');
        $('tbody tr:nth-child(9)').removeClass('future');
    } else if ( timeCondition[8] == 'future' ) {
        $('tbody tr:nth-child(9)').addClass('future');
        $('tbody tr:nth-child(9)').removeClass('present');
        $('tbody tr:nth-child(9)').removeClass('past');
    }
},1500);


/*********Handling textarea and saving*********/
//TODO: Get textBox input when saveBox is clicked and save text
