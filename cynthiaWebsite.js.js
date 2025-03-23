const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let cursor = document.getElementById("minicircle");
document.addEventListener("mousemove",
    function(e){
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.top = y+"px";
        cursor.style.left = x+"px";
    }
)