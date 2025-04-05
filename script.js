
<script>
  function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.innerText = message;
    popup.classList.remove('hidden');
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 3000); // Popup auto-hide after 3 seconds
  }

  function onScreenshotUpload() {
    // Hide manual input fields
    document.getElementById('manualInput').classList.add('hidden');

    // Show "Waiting..." first
    showPopup("Waiting...");

    // Then show result message after 3 seconds
    setTimeout(() => {
      showPopup("Screenshot Uploaded - Online Zone");
    }, 3000);
  }

  function onSubmitManual() {
    const color = document.getElementById('color').value;
    const number = document.getElementById('number').value;
    const size = document.getElementById('size').value;

    const result = `Color: ${color}, Number: ${number}, Size: ${size}`;
    showPopup(result);
  }

  function onFileInputChange() {
    const file = document.getElementById('screenshotInput').files[0];
    if (file) {
      onScreenshotUpload();
    }
  }
</script>

