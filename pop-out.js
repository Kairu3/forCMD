document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.pop-out-container');
    var container2 = document.querySelector('.pop-out-container2');
    var container3 = document.querySelector('.pop-out-container3');
    var slideInput = document.getElementById("slide");
    var slideText = document.getElementById("h2Slide");
    
    setTimeout(function () {
        container.classList.add('active');
    }, 1500); // Adjust the delay as needed

    setTimeout(function () {
        container2.classList.add('active');
    }, 3000); // Adjust the delay as needed

    setTimeout(function () {
        container3.classList.add('active');
        slideInput.removeAttribute("hidden");
        slideText.removeAttribute("hidden");
        slideInput.classList.add("fade-in");
        slideText.classList.add("fade-in");
    }, 4500); // Adjust the delay as needed
});