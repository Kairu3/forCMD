// Number of bubbles
const NUM_BUBBLES = 100;

// Variable to keep track of whether the animation has started
let animationStarted = false;

var w = window.innerWidth;

// Function to create a bubble
function createBubble() {
  const bubble = document.createElement('div');
  bubble.className = 'bubble';

  // Randomize size
  const size = Math.random() * 40 + 20; // Random size between 20 and 60 pixels
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  document.getElementById('container').appendChild(bubble);

  // Randomize initial position, animation duration, falling speed, and rotation
  const left = Math.random() * window.innerWidth;
  const duration = Math.random() * 5 + 3;
  const speed = Math.random() * 3 + 1;
  const rotation = Math.random() * 360;

  bubble.style.left = `${left}px`;
  bubble.style.animationDuration = `${duration}s, 2s`; // Falling duration, Bloom duration
  bubble.style.transform = `rotate(${rotation}deg)`;

  // Remove bubble after animation ends
  bubble.addEventListener('animationiteration', () => {
    bubble.style.left = `${Math.random() * window.innerWidth}px`;
  });
}

// Function to start the animation when button is clicked
function startAnimation() {
  if (!animationStarted) {
    // Create and append bubbles
    for (let i = 0; i < NUM_BUBBLES; i++) {
      createBubble();
    }
    animationStarted = true;
    popOutTextElement.textContent = "i lied, my gift last year was not JUST an appreciation gift haha";
    if (w > 728){
      document.getElementById('fireworks').src = '/forCMD/ChiCat.png';
      document.getElementById('fireworks').style.left = '210px';
    }else{
      document.getElementById('fireworks').src = '/forCMD/ChiCat.png';
      document.getElementById('fireworks').style.height = '200px';
      document.getElementById('fireworks').style.top = '5px';
      document.getElementById('secretText').style.fontSize = '10px';
    }
    audio.play();
  }
}

// Event listener for the button
var gifImage = document.getElementById("Moby");
var popOutTextElement = document.getElementById("secretText");
var audio = document.getElementById("bgAudio");

gifImage.addEventListener('click', startAnimation);
