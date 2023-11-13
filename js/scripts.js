/* NAV open and close */
/* Open */
function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

// Function to check screen width and open navigation if needed
function checkScreenWidth() {
  if (window.innerWidth >= 64 * 16) {
    // 64rem * 16px (1rem = 16px)
    openNav()
  }
}

// Event listener for resize
window.addEventListener("resize", checkScreenWidth)

// Call the checkScreenWidth function on page load
checkScreenWidth()

/* SCROLL UP to top button code */
// Get the button:
let mybutton = document.getElementById("myBtn")

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block"
  } else {
    mybutton.style.display = "none"
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}

/*
Animted Text Circle
https://youtu.be/zwl3kZPZ8H8
*/

function addSpace(x) {
  return x + " ♥ "
}

const text = document.querySelector(".circleText")
const textContent = addSpace(text.innerText.trim())
const numChars = textContent.length
const radius = 100 // Adjust this value as needed for the circle size

text.innerHTML = textContent
  .split("")
  .map((char, i) => {
    const angle = (360 / numChars) * i
    const x = radius * Math.cos((angle * Math.PI) / 180)
    const y = radius * Math.sin((angle * Math.PI) / 180)

    // Adjusting the positioning to the center of the circle
    const translationX = x - 10 // Adjust this value to fine-tune the positioning
    const translationY = y - 10 // Adjust this value to fine-tune the positioning

    return `<span style="position: absolute; transform: translate(${translationX}px, ${translationY}px) rotate(${
      angle + 90
    }deg);">${char}</span>`
  })
  .join("")
