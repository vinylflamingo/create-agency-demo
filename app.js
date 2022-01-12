
//////////////////////////////////////////////////////////////
//code for intro cta on home page to flip red and flip text//
////////////////////////////////////////////////////////////
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

///////////////////////////////
//code for sticky navigation//
/////////////////////////////

// When the user scrolls the page, execute myFunction
window.onscroll = function() {navScroll()};

// Get the navbar
var nav = document.getElementById("nav");
var removeable = document.getElementsByClassName("removeable");

// Get the offset position of the navbar
var sticky = nav.offsetTop;
var viewport =  window.innerHeight * .85;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navScroll() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky")
    } 
    else {
        nav.classList.remove("sticky");
    }

    if (window.pageYOffset >= viewport) {
        nav.classList.add("bar")
        for(r of removeable)
        {
            r.classList.add("active")
        }
    } 
    else {
        nav.classList.remove("bar");
        for(r of removeable)
        {
            r.classList.remove("active")
        }

    }
}




