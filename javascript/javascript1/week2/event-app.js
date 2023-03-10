//event-aap
function calculateWeekday() {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let eventDaysNumber = parseInt(document.getElementById("event").value);
    const eventDay = (new Date().getDay() + eventDaysNumber) % 7;
    console.log(weekdays[eventDay]);
    document.getElementById("eventdayOutput").innerHTML = (weekdays[eventDay]);
}
