document.addEventListener('DOMContentLoaded', function() {
  initializeClaudioElements();
});

function initializeClaudioElements() {
  document.querySelectorAll('[cl-audio]').forEach(el => {
    const soundAttribute = el.getAttribute('cl-audio');
    const audioElement = createAudioElement(soundAttribute);
    
    const eventAttribute = el.getAttribute('cl-on') || 'click';
    
    el.addEventListener(eventAttribute, () => {
      playSound(audioElement);
    });
  });
}

function createAudioElement(soundName) {
  const audio = new Audio(`static/claudio/${soundName}`);
  audio.preload = 'auto';
  return audio;
}

function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play().catch(error => {
    console.error('Error playing sound:', error);
  });
}