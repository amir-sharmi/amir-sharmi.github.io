console.log("Portfolio Loaded 🚀");



const sections = document.querySelectorAll("section");


window.addEventListener("scroll", ()=>{


    sections.forEach(section=>{


        const position = section.getBoundingClientRect().top;


        if(position < window.innerHeight - 100){

            section.classList.add("show");

        }


    });


});


const text = "Frontend Developer";

let index = 0;


function typing(){


    if(index < text.length){

        document.getElementById("typing").innerHTML += text[index];

        index++;

        setTimeout(typing,100);

    }


}


typing();


const themeBtn = document.getElementById("theme-btn");


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("light-mode");


    if(document.body.classList.contains("light-mode")){

        themeBtn.innerHTML="☀️";

    }
    else{

        themeBtn.innerHTML="🌙";

    }


});

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});