function startProgress(idBar, targetWidth) {
    var elem = document.getElementById(idBar);
    var width = 0;

    var interval = setInterval(frame, 30);

    function frame() {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width + '%';
        }
    }
}

window.onload = function () {
    startProgress("progress1", 60); 
    startProgress("progress2", 30);
    startProgress("progress3", 53);
};