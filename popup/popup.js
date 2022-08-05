const open = document.getElementById("confirm");
const close = document.getElementById("close");
// error: because at this moment the 'time' is null
// TODO: store time config permanently
// const time = document.getElementById('time').value;
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

// TODO: create a new tab.
function timedCount() {
    const time = document.getElementById('time').value;
    console.log("time: ",time);
    chrome.notifications.create(
        '',
        {
            type: 'basic',
            title: '久坐提醒！！！',
            message:  '快起身活动吧！！！',
            iconUrl: '../1.png',
        }
    );
    // TODO: change it to minute
    id_of_setTimeout = setTimeout(timedCount, Number(time) * 1000);
    console.log("The new id_of_setTimeout: ", id_of_setTimeout);
}
