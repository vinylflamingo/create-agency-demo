var introCta = document.getElementById("intro-cta");

introCta.addEventListener("mouseover", function() {
   introCta.style.backgroundColor = "white";
   introCta.style.color = "black";
   introCta.style.transform = "scale(1, -1)"

});
    
introCta.addEventListener("mouseout", function() {
    introCta.style.backgroundColor = "#D32637";
    introCta.style.color = "white";
    introCta.style.transform = "scale(1, 1)"
});