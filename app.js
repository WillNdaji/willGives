const hamburger = document.getElementById("hamburger")
const scrollContainer = document.querySelector(".campaign-slider");
const scrollContainer2 = document.querySelector(".review-container-box");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const backBtn2 = document.getElementById("back-btn2");
const nextBtn2 = document.getElementById("next-btn2");
const closeBtn = document.getElementById("close")
const hamburgerMenu = document.getElementById("hamburger-menu")
const donorText = document.getElementById("donor")
const orgText = document.getElementById("org")
const donorForm = document.getElementById("donor-form")
const orgForm = document.getElementById("org-form")
const imageTextOne = document.getElementById("image-text")
const imageTextTwo = document.getElementById("image-text2")
const paraText = document.getElementById("paragraph-text")

hamburger?.addEventListener("click", function(){
    // hamburgerMenu.style.display = "block"
    hamburgerMenu.style.left = "0"
closeBtn.style.display = "block" 
})
closeBtn?.addEventListener("click", function(){
    hamburgerMenu.style.left = "-300px"
    closeBtn.style.display = "none"
})



donorText?.addEventListener("click", ()=>{
    donorForm.style.display = "block"
    orgForm.style.display ="none"
    orgText.style.color = "#E5E5E5"
    donorText.style.color = "#1C39BB"
    
    donorText.classList.add("active-link")
    orgText.classList.remove("active-link")
    imageTextOne.style.display = "block"
    imageTextTwo.style.display = "none"
    paraText.style.marginLeft = "0px"
   

})


orgText?.addEventListener("click", ()=>{
    orgForm.style.display = "block"
    donorForm.style.display ="none"
    donorText.style.color = "#E5E5E5"
    orgText.style.color = "#1C39BB"
    
    orgText.classList.add("active-link")
    donorText.classList.remove("active-link")
   
    imageTextTwo.style.display = "block"
    imageTextOne.style.display = "none"  
})


if (paraText && window.innerWidth >= 320 && window.innerWidth <= 1200) {
    
    paraText.style.marginLeft = "190px"
    donorText?.addEventListener("click", ()=>{
        paraText.style.marginLeft = "110px"
    })
} 






    scrollContainer?.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += evt.deltaY;
    })

    scrollContainer2?.addEventListener("wheel", (evt) => {
    evt.preventDefault()
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += evt.deltaY;
    })

nextBtn?.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 240;
});

backBtn?.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 240;
});


backBtn2?.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft -= 440;
});
nextBtn2?.addEventListener("click", () => {
    scrollContainer2.style.scrollBehavior = "smooth";
    scrollContainer2.scrollLeft += 310;
})



