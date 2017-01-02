var DogOfTheWired = (function() {
  'use strict'

  var soundButton = document.getElementById("sound-button");
  var audioFrame = document.getElementById("audio-frame");
  var isAudioPlaying = true;

  /**
   * Toggles the global play/pause status of an embedded Youtube iframe with an id of #audio-frame.
   * Sets a class of .mute or .play on an element with id #sound-button, if available.
   */
  function toggleAudio() {
    var command;

    if (isAudioPlaying) {
      command = 'pauseVideo';
    } else {
      command = 'playVideo';
    }

    // Messages the iframe to either play or pause
    audioFrame.contentWindow.postMessage('{"event":"command","func":"'+command+'","args":""}', '*');
    isAudioPlaying = !isAudioPlaying;

    // Update the class on #sound-button, if available
    if (null !== soundButton) {
      if (isAudioPlaying) {
        soundButton.className = 'mute';
      } else {
        soundButton.className = 'play';
      }
    }
  }

  soundButton.addEventListener('click', toggleAudio);
}());
