const open = document.getElementById("confirm");
const close = document.getElementById("close");
var id_of_setTimeout;
open.addEventListener("click", function () {
    clearTimeout(id_of_setTimeout);
    const time = document.getElementById('time').value;
    console.log("after click time: ",time);
    // TODO: change it to minute
    id_of_setTimeout = setTimeout(timedCount, Number(time) * 1000);
});
close.addEventListener("click", function () {
    console.log("This is close\n");
    console.log("close: id_of_setTimeout = ", id_of_setTimeout);
    clearTimeout(id_of_setTimeout);
});

function timedCount() {
    const time = document.getElementById('time').value;
    console.log("time: ",time);
    chrome.notifications.create(
        '',
        {
            type: 'basic',
            title: '久坐提醒！！！',
            message:  '久坐提醒！！！',
            iconUrl: '../seat_reminder.png',
        }
    );
    // TODO: change it to minute
    id_of_setTimeout = setTimeout(timedCount, Number(time) * 1000);
    console.log("The new id_of_setTimeout: ", id_of_setTimeout);
}
