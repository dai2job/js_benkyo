function back_index() {
    let checkButton = document.getElementById('backButton');
    checkButton.addEventListener('click', function() {
        window.location.href = './index.html';
    }, false);
}

function draw_rect(rgb) {
    window.onload=function(){
        var cvs = document.getElementById("cvs1");
        var ctx = cvs.getContext("2d");
        ctx.fillStyle=rgb; 
        ctx.fillRect(10, 10, 100, 100);
    }
}

var query = location.search;
var value = query.split('=')[1];
draw_rect(value);
back_index();