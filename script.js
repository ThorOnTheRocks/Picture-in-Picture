const videoElement = document.querySelector("video");
const btnStart = document.querySelector(".btn");

// Prompt the user to select a media stream, and pass that to a video element and play.

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    // Error
  }
}

btnStart.addEventListener('click', async () => {
  // Disable Button
  btnStart.disabled = true;
  // Start Picture in Picture
  await videoElement.requestPictureInPicture();
  // Reset Button
  btnStart.disabled = false;
});

// On Load
selectMediaStream();