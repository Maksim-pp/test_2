const sec = 1800,
    countDiv = document.getElementById("timer"),
    setPassedSeconds,
    countDown = setInterval(function () {
        'use strict';
        setPassedSeconds();
    }, 1000);

function setPassedSeconds() {
    'use strict';
    const min = Math.floor(sec / 60),
        remSec = sec % 60;
    if (remSec < 10) {
        remSec = '0' + remSec;
    }
    if (min < 10) {
        min = '0' + min;
    }
    countDiv.innerHTML = min + ":" + remSec;
    if (sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        countDiv.innerHTML = 'countdown done';
    }
}
