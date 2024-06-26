function timeConvert(timestamp) {
    let date = new Date(timestamp * 1000);
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minute < 10) {
      minute = `0${minute}`;
    }
    return `${hour}:${minute}`;
}
  
function getDay(data){
    let day = data.getDay();
    if (day === new Date().getDay()){
      day = 'TODAY';
    } else{
      switch (day) {
        case 0: day = "SUN"; break;
        case 1: day = "MON"; break;
        case 2: day = "TUE"; break;
        case 3: day = "WED"; break;
        case 4: day = "THU"; break;
        case 5: day = "FRI"; break;
        case 6: day = "SAT"; break;
      }
    }
  return day;
}

function getDayFull(data){
    let day = data.getDay();
    if (day === new Date().getDay()){
      day = 'TODAY';
    } else{
      switch (day) {
        case 0: day = "SUNDAY"; break;
        case 1: day = "MONDAY"; break;
        case 2: day = "TUESDAY"; break;
        case 3: day = "WEDNESDAY"; break;
        case 4: day = "THURSDAY"; break;
        case 5: day = "FRIDAY"; break;
        case 6: day = "SATURDAY"; break;
      }
    }
  return day;
}

function getDate(data){
  let day = data.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  return day;
}  

function getMonth(data){
    let month = data.getMonth();
    switch (month) {
      case 0: month = "JAN"; break;
      case 1: month = "FEB"; break;
      case 2: month = "MAR"; break;
      case 3: month = "APR"; break;
      case 4: month = "MAY"; break;
      case 5: month = "JUN"; break;
      case 6: month = "JUL"; break;
      case 7: month = "AUG"; break;
      case 8: month = "SEP"; break;
      case 9: month = "OCT"; break;
      case 10: month = "NOV"; break;
      case 11: month = "DEC"; break;
    }
    return month;
}
  
function getTime(data){
    let hours = data.getHours();
    if (hours <=12){
      hours = `${hours}am`;
    } else{
      switch (hours) {
        case 13: hours = '1 pm'; break;
        case 14: hours = '2 pm'; break;
        case 15: hours = '3 pm'; break;
        case 16: hours = '4 pm'; break;
        case 17: hours = '5 pm'; break;
        case 18: hours = '6 pm'; break;
        case 19: hours = '7 pm'; break;
        case 20: hours = '8 pm'; break;
        case 21: hours = '9 pm'; break;
        case 22: hours = '10 pm'; break;
        case 23: hours = '11 pm'; break;
        case 24: hours = '0 pm'; break;
      }
    }
    return hours;
}

function temp(temp) {
  temp = Math.round(temp);
  if (temp > 0) {
    temp = `+${temp}`;
  }
  return temp;
}

export {timeConvert, getDay, getDayFull, getDate, getMonth, getTime, temp}