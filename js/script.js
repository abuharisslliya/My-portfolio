// -------------- Toggle Tabs -----------
const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav");
navToggler.addEventListener("click", () => {
    toggleNavbar()
});

function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out")
}
function toggleNavbar(){
    var ww = document.body.clientWidth;
    if (ww > 460){
        document.querySelector(".nav").classList.toggle("block");
    }else{
        document.querySelector("section.active").classList.remove("active","fade-out" );
        document.querySelector(".navbar").classList.add("active"); 
    }
    if (nav.className !== "nav") {
        document.querySelector(".nav-toggler").innerHTML = document.querySelector(".pp-close").innerHTML;
    } else {
        navToggler.innerHTML = "<i class='fa-solid fa-bars' aria-hidden='true'></i>";
    };
}

// -------------- Active section -----------
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // const hash = e.target.hash;
        if(e.target.classList.contains("nav-item")){
            toggleNavbar()
            hideSection()
        }else{
            hideSection()
            document.querySelector(".header").classList.toggle("active")
            
        }
        setTimeout(() =>{
            document.querySelector("section.active").classList.remove("active","fade-out" );
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
        },500)
    }
})
// -------------- About Tabs -----------

const tabsContainer = document.querySelector(".about-tabs"),
    aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active")
    }
})

// --------- portfolio Item Details Popup --------

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup()
        document.querySelector(".portfolio-popup").scrollTo(0, 0)
        portfolioItemDetails(e.target.parentElement)
    }
})

function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling")
    document.querySelector(".main").classList.toggle("fade-out")
}
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

// hide popup when clicking outside of it
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup()
    }
})

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".pp-header h3").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}