const batteryLevel = document.getElementById('batteryLevel');
const chargeText = document.getElementById('chargeText');
let level = 0;

function chargeBattery() {
    if (level >= 100) {
        level = 0;
    } else {
        level += 1;
    }
    batteryLevel.style.height = `${level}%`;
    chargeText.textContent = `${level}%`;
}

setInterval(chargeBattery, 100);
