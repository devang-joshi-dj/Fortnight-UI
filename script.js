const time = () => {
    // function for getting the hour, minute, date, month, day-name and printing them
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const current_date = date.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const month = monthNames[date.getMonth() + 1];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayName = days[date.getDay()].toUpperCase();

    document.querySelector('#time').innerHTML = hour + ":" + minute;
    document.querySelector('#date').innerHTML = dayName + ", " + current_date + " of " + month;

};

setInterval(() => {
    // function for updating hour, minute, date, month, day-name every 1/10 second executing time function every 1/10 second
    time();
}, 100);

document.querySelector('.check').addEventListener('click', () => {
    var x = document.querySelector("#password");
    if (document.querySelector('#show-password').checked) {
        x.type = "text";
    } else {
        x.type = "password";
    }
})