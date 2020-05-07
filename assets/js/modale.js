// Get the modal
var modal;

// Get the button that opens the modal
var btn = document.querySelectorAll(".btn-projet");

// Get the <span> element that closes the modal
var span = document.querySelectorAll(".close");

var body = document.querySelector('.blur');
// When the user clicks on the button, open the modal

btn.forEach(button => {
  button.onclick = function() {
    modal = document.querySelector(`#${button.id}-modal`);
    modal.style.display = "block";
    for (let opacity = 0; opacity < 1.1; opacity = opacity + 0.5)
    {
      setTimeout( () => {
        modal.style.opacity = opacity;
      },20)
    }
    body.style.filter = 'blur(5px)';
  }
})


// When the user clicks on <span> (x), close the modal
span.forEach(out => {
  out.onclick = function() {
    modal.style.display = "none";
    modal.style.opacity = "0";
    body.style.filter = 'none';
  }
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
    modal.style.opacity = "0";
    body.style.filter = 'none';
  }
}
