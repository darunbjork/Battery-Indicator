const batteryLevel = document.getElementById('batteryLevel');
let level = 0;

function chargeBattery() {
    if (level >= 100) {
        level = 0;
    } else {
        level += 1;
    }
    batteryLevel.style.height = `${level}%`;
}

setInterval(chargeBattery, 100);
