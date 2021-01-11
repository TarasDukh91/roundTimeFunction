const startingTime = prompt("Enter a start number in format 00:00");
const endingTime = prompt("Enter an end number in format 00:00")
const minToString = v => 60 * v;
const minToNumber = v => v / 60;

function stringToNum (time) {
    const [hours, minutes] = time.split(":");
    return {
        hour: Number(hours),
        minutes: minutes.includes('00') ? 0 : minToNumber(Number(minutes))
    }
}

function roundMinutes(t, round) {
    if (round === 0) {
        const hour = t.split(':')[0];
        return `${hour}:00`
    }
    
    function format(v) { return v < 10 ? '0' + v: v; }
    let m = t.split(':').reduce(function (h, m) { return h * 60 + +m; });
    m = Math.ceil(m / round) * round;
    return [Math.floor(m / 60), m % 60].map(format).join(':');    
}

function mapIntervalNumberToString (range) {
    return range.map(function cb (currentValue) {
        let hours = Math.trunc(currentValue); 
        let nMinutes = currentValue % 1;
        let minutes = minToString(nMinutes);
        
        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = minutes + '0'
        }
        let result =   `${hours}:${minutes}`
        return result;
    })
}

function stringToNumber (time) {
    const [hours, minutes] = time.split(":");
    return {
        hour: Number(hours),
        minutes: Number(minutes)
    }
}
console.log(stringToNumber("12:3"))

function getRanges(start = startingTime, end = endingTime, interval = 30) {

    function min30int (start, end) { 
        const ranges = []; 
            for (let i = start.hour; i <= end.hour + end.minutes; i+= 0.5 ) {   
               ranges.push(i); 
            }
            return ranges;
    }

    function min15int (start, end) {
        const ranges = []; 
            for (let i = start.hour; i <= end.hour + end.minutes; i+= 0.25 ) {
               ranges.push(i);  
            }
            console.log(ranges)
            return ranges;
    }
     
    let intervalResult = [];

    switch(interval) {
        case 30 : {
            const startTime = stringToNum(roundMinutes(start, 30))
            const endTime = stringToNum(roundMinutes(end, 30));
            intervalResult = min30int(startTime, endTime)
            
            return mapIntervalNumberToString(intervalResult);
            
        }
        case 15 : {
            const startTime = stringToNum(roundMinutes(start, 15))
            const endTime = stringToNum(roundMinutes(end, 15));
            intervalResult = min15int(startTime, endTime)
            
            return mapIntervalNumberToString(intervalResult);

        }
    }        
}   

console.log( getRanges() );
console.log( getRanges('13:00', '15:30', 15) );
