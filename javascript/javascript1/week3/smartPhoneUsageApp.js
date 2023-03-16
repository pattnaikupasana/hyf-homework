//Adding an activity
let activities = [];
function addActivity(date, activity, duration) {
  let obj = {
    date: date,
    activity: activity,
    duration: duration,
  };
    activities.push(obj); 
}
//extra functionality
function timeSpentOnSpecificActivity(activity) {
    let timeSpentOnactivity = 0;
    for (let i = 0; i < activities.length; i++)
        if (activities[i].activity ===activity) {
         timeSpentOnactivity += activities[i].duration;
        }  
     
    console.log(timeSpentOnactivity);
}
console.log(activities);
addActivity("2/7-18", "facebook", 30);
addActivity("2/7-18", "instagram", 30);
addActivity("1/7-18", "facebook", 30);
timeSpentOnSpecificActivity("facebook");



