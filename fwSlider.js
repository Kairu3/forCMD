// Get the slider and fireworks elements
var slider = document.getElementById("slide");
var fireworks = document.getElementById("fireworks");
var fwAudio = document.getElementById("fwAudio");
var secretText = document.getElementById("secret");

var fireworksTriggered = false;

// Update the opacity of fireworks based on the slider value
slider.addEventListener("input", function() {
    if (!fireworksTriggered){
        var opacityValue = slider.value / 100; // Convert slider value to a range between 0 and 1
        fireworks.style.opacity = opacityValue;

        if (slider.value == 100) {
            fwAudio.play(); // Play the audio when slider reaches 100%
            fireworksTriggered = true;
            secretText.removeAttribute("hidden");
            secretText.classList.add("fade-in");
        }
    }
});

// For mobile devices, handle the audio play event with a user gesture, such as touch
document.addEventListener('touchstart', function() {
    if (!fwAudio.paused) {
        // Audio already playing, no need to do anything
        return;
    }
    
    // Check if the slider is at 100% and if the fireworks are not already triggered
    if (slider.value == 100 && !fireworksTriggered) {
        fwAudio.play(); // Play the audio
        fireworksTriggered = true;
        secretText.removeAttribute("hidden");
        secretText.classList.add("fade-in");
    }
});