//jshint esversion:6

module.exports =gateDate();

function gateDate(){
let today = new Date();

let options = {  /**For value of date and day */
 weekday:"long",
 day : "numeric",
 month: "long"
}
let day = today.toLocaleDateString("en-US",options);
return day;
}