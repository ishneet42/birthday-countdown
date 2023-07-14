const endDate = "17 October 2023 12:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

function clock(){
    const end = new Date(endDate);
    const now = new Date()
    const diff = (end - now) / 1000; //convert milisec to sec
    if(diff < 0) return;
    // console.log(diff);
    //convert into days
    inputs[0].value = Math.floor(diff / 3600 / 24);
    //hours
    inputs[1].value = Math.floor(diff / 3600) % 24;
    //mins
    inputs[2].value = Math.floor(diff / 60) % 60;
    //seconds
    inputs[3].value = Math.floor(diff) % 60;
}
//initial call
clock()

setInterval(
    () => {
        clock()
    }
)