var width = 0;
function ilerle() {
    var elem = document.getElementById("myBar");

    frame();
    function frame() {

        if (width >= 100) { false; }
        else {
            width = width + 25;
            elem.style.width = width + '%';
            $('#ptext').text("%"+width);
        }
    }
}
function gerile() {
    var elem = document.getElementById("myBar");

    frame();
    function frame() {
        if (width <= 0) { false; }
        else {
            width = width - 25;
            elem.style.width = width + '%';
            $('#ptext').text("%" + width);
        }

    }
}
function baslat() {
    var elem = document.getElementById("myBar");

    frame();
    function frame() {
        elem.style.width = 0 + '%';
        $('#ptext').text("");
    }
}