const batteryLevel = document.getElementById('batteryLevel');
const chargeText = document.getElementById('chargeText');
const batteryStatus = document.getElementById('batteryStatus');
let level = 0;
let charging = true;
let chargingInterval;

// Function to update the battery level and color based on charge level
function chargeBattery() {
    if (charging && level >= 100) {
        charging = false;
        batteryStatus.textContent = "Full";
    } else if (!charging && level <= 0) {
        charging = true;
        batteryStatus.textContent = "Low Battery";
    } else {
        batteryStatus.textContent = "Charging";
    }

    level = charging ? level + 1 : level - 1;
    batteryLevel.style.height = `${level}%`;
    chargeText.textContent = `${level}%`;

    // Change color based on level
    if (level <= 20) {
        batteryLevel.style.backgroundColor = 'red';
    } else if (level <= 80) {
        batteryLevel.style.backgroundColor = 'yellow';
    } else {
        batteryLevel.style.backgroundColor = 'green';
    }
}

// Start charging function
function startCharging() {
    if (!chargingInterval) {
        chargingInterval = setInterval(chargeBattery, 100);
    }
}

// Stop charging function
function stopCharging() {
    clearInterval(chargingInterval);
    chargingInterval = null;
}

// Start charging when the page loads
startCharging();
