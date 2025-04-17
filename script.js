function changeText() {
    const para = document.getElementById("para");
    para.textContent = "The paragraph text has been changed!";
  }
  
  function toggleHighlight() {
    const box = document.getElementById("box");
    box.classList.toggle("highlight");
  }
  
  function changeImage() {
    const img = document.getElementById("image");
    img.src = "image/image.png?" + new Date().getTime(); 
  }
  
  function toggleInput() {
    const input = document.getElementById("textInput");
    input.disabled = !input.disabled;
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }

  
  
