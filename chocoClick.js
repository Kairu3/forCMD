var audio = document.getElementById("bgAudio");
        var gifImage = document.getElementById("Choco");
        var popOutTextElement = document.getElementById("secretText");
        var w = window.innerWidth;

        // Add a click event listener to the GIF image
        gifImage.addEventListener("click", function() {
            // Check if the audio is currently paused
            if (audio.paused) {
                audio.play(); // If paused, play the audio

                const start = () => {
                setTimeout(function() {
                    confetti.start()
                    if (w > 728){
                        document.getElementById('fireworks').src = '/assets/ChiCat.png';
                        document.getElementById('fireworks').style.left = '210px';
                    }else{
                        document.getElementById('fireworks').src = '/assets/ChiCat.png';
                        document.getElementById('fireworks').style.height = '200px';
                        document.getElementById('fireworks').style.top = '5px';
                        document.getElementById('secretText').style.fontSize = '10px';
                    }
                }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
            };

            //  for stopping the confetti 

            const stop = () => {
                setTimeout(function() {
                    confetti.stop()
                }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
            };
            // after this here we are calling both the function so it works
            start();
            stop();
            popOutTextElement.textContent = "i lied, my gift last year was not just an appreciation gift haha";

            } else {
                audio.pause(); // If playing, pause the audio
            }
        });