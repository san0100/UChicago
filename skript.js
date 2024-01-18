document.addEventListener("DOMContentLoaded", function () {
    let currentPart = 1;
    showPart(currentPart);

    function advanceStory() {
        currentPart++;
        showPart(currentPart);
    }

    const intervalId = setInterval(advanceStory, 18000);

    function showPart(partNumber) {
        const parts = document.querySelectorAll(".story-part");

        if (partNumber <= parts.length) {
            const currentPartElement = document.getElementById(`part-${partNumber}`);

         
            parts.forEach(part => {
                part.style.display = "none";
                part.classList.remove("fade-in");
            });

    
            currentPartElement.style.display = "block";
            currentPartElement.classList.add("fade-in");

            setTimeout(() => {
                currentPartElement.classList.remove("fade-in");
            }, 2000);
        } else {
           
            clearInterval(intervalId);
        }
    }
});


document.getElementById('audioOverlay').addEventListener('click', function() {
    var audio = document.getElementById('myAudio');
    audio.removeAttribute('muted');
    this.style.display = 'none';
    audio.play(); 
});

