const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")
elemC.addEventListener("mouseenter",function() {
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave",function() {
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})


var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
    });




var designbtn = document.querySelector(".design")
var projectbtn = document.querySelector(".project")
var executionbtn = document.querySelector(".execution")


function designFunc() {
    var designPara = document.querySelector(".changing-para")
    designPara.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
    designPara.style.color = "#000000"

    var designImg = document.querySelector(".changing-img")
    designImg.src = "images/design-img.webp"

    designbtn.style.paddingLeft = "2.5vw"
    designbtn.style.color = "#000000"
    projectbtn.style.paddingLeft = "1vw"
    projectbtn.style.color = "#5a5656a9"
    executionbtn.style.paddingLeft = "1vw"
    executionbtn.style.color = "#5a5656a9"

}

function projectFunc() {
    var project1 = document.querySelector(".changing-para")
    project1.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    project1.style.color = "#000000"

    var projectimg = document.querySelector(".changing-img")
    projectimg.src = "images/project-img.webp"

    projectbtn.style.paddingLeft = "2.5vw"
    projectbtn.style.color = "#000000"
    designbtn.style.paddingLeft = "1vw"
    designbtn.style.color = "#5a5656a9"
    executionbtn.style.paddingLeft = "1vw"
    executionbtn.style.color = "#5a5656a9"

}

function executionFunc() {
    var execution1 = document.querySelector(".changing-para")
    execution1.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    execution1.style.color = "#000000"

    var executionimg = document.querySelector(".changing-img")
    executionimg.src = "images/execution-img.webp"
    
    projectbtn.style.paddingLeft = "1vw"
    projectbtn.style.color = "#5a5656a9"
    designbtn.style.paddingLeft = "1vw"
    designbtn.style.color = "#5a5656a9"
    executionbtn.style.paddingLeft = "2.5vw"
    executionbtn.style.color = "#000000"
}

