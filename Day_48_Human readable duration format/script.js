// formatDuration(1) should return "1 second"
// formatDuration(3662) should return "1 hour, 1 minute and 2 seconds"
// formatDuration(62) should return "1 minute and 2 seconds"



function buildString(value, unit) {
    if (value > 0) 
        return value + ' ' + unit + (value > 1 ? 's' : '') + ', ';
    
    return '';
}

function formatDuration(seconds) {
    // Complete this function
    if (seconds === 0) 
        return "now";
    
    var tmpSeconds = seconds;
    const NUM_SEC_PER_MIN = 60;
    const NUM_SEC_PER_HR = NUM_SEC_PER_MIN * 60;
    const NUM_SEC_PER_DAY = NUM_SEC_PER_HR * 24;
    const NUM_SEC_PER_YEAR = NUM_SEC_PER_DAY * 365;

    var numYears = Math.floor(tmpSeconds / NUM_SEC_PER_YEAR);
    tmpSeconds -= numYears * NUM_SEC_PER_YEAR;
    var numDays = Math.floor(tmpSeconds / NUM_SEC_PER_DAY);
    tmpSeconds -= numDays * NUM_SEC_PER_DAY;
    var numHrs = Math.floor(tmpSeconds / NUM_SEC_PER_HR);
    tmpSeconds -= numHrs * NUM_SEC_PER_HR;
    var numMins = Math.floor(tmpSeconds / NUM_SEC_PER_MIN);
    var numSecs = tmpSeconds - numMins * NUM_SEC_PER_MIN;

    var formattedStr = buildString(numYears, 'year');
    formattedStr += buildString(numDays, 'day');
    formattedStr += buildString(numHrs, 'hour');
    formattedStr += buildString(numMins, 'minute');
    formattedStr += buildString(numSecs, 'second');

    // trim last one
    var idx = formattedStr.lastIndexOf(', ');
    formattedStr = formattedStr.substring(0, idx);

    // replace the second last , with and
    idx = formattedStr.lastIndexOf(', ');
    if (idx > 0) 
        formattedStr = formattedStr.substring(0, idx) + ' and ' + formattedStr.substring(idx + 2);
    
    return formattedStr;
}

console.log(formatDuration(62));
