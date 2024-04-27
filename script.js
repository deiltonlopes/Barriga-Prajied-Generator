document.addEventListener("DOMContentLoaded", function() {
    const audioNameElement = document.getElementById("audioName");
    const intervalForm = document.getElementById("intervalForm");
    const stopButton = document.getElementById("stopBtn");
    const audioFiles = ["Ombro", "Cabeça", "Prajied", "Orelha", "Pé", "Nariz", "Peito", "Barriga", "Joelho", "Costas"].map(name => `${name}`);
    let audio = new Audio();
    let intervalId;
  
    // Update the audio name displayed on the page
    function updateAudioName(name) {
      audioNameElement.textContent = name;
    }
  
    // Increment the count automatically at the specified interval
    function startCounter(interval) {
      intervalId = setInterval(function() {
        playRandomAudio();
      }, interval * 1000); // Convert seconds to milliseconds
    }
  
    // Play a random audio file
    function playRandomAudio() {
      const randomIndex = Math.floor(Math.random() * audioFiles.length);
      const randomAudio = audioFiles[randomIndex];
      updateAudioName(randomAudio);
      audio.src = `assets/${randomAudio}.mp3`;
      audio.play();
    }
  
    // Stop the counter
    function stopCounter() {
      clearInterval(intervalId);
      audio.pause();
    }
  
    // Event listener for form submission
    intervalForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const intervalValue = parseInt(document.getElementById("interval").value);
      startCounter(intervalValue);
    });
  
    // Event listener for stop button click
    stopButton.addEventListener("click", function() {
      stopCounter();
      updateAudioName("-");
    });
  });
  