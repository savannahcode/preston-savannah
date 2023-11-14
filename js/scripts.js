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
  return x + " "
}

function createTextCircle() {
  const text = document.querySelector(".circleText")
  if (text) {
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
  }
}

// Call the function to create the text circle
createTextCircle()

function openNav() {
  document.getElementById("myNav").style.width = "100%"
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.width = "0%"
}

window.addEventListener("resize", checkScreenWidth)
// Function to check screen width and open navigation if needed
function checkScreenWidth() {
  if (window.innerWidth >= 64 * 16) {
    // 64rem * 16px (1rem = 16px)
    openNav()
  } else {
    closeNav()
  }
}

// change letter spacing based on browser
// Detect Safari browser
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

// Get the vertical text element
const vertical1 = document.querySelector(".verticalYear")
const vertical2 = document.querySelector(".verticalMonth")
const vertical3 = document.querySelector(".verticalNumDate")

// Apply letter spacing based on the detected browser
if (isSafari) {
  vertical1.style.letterSpacing = "-.5rem" // Adjust this value for Safari
  vertical2.style.letterSpacing = "-.5rem"
  vertical3.style.letterSpacing = "-.5rem"
} else {
  element.style.letterSpacing = "-2.5rem" // Adjust this value for other browsers
}

// photosBtns
let datingBtn = document.querySelector(".dating")
let engagedBtn = document.querySelector(".engaged")
let engagementBtn = document.querySelector(".engagements")
let bridalsBtn = document.querySelector(".bridals")
let weddingBtn = document.querySelector(".wedding")
let allPhotosBtn = document.querySelector(".all")
let photosDisplay = document.querySelector(".photosDisplay")

datingBtn.addEventListener("click", handleDatingClick)
engagedBtn.addEventListener("click", handleEngagedClick)
bridalsBtn.addEventListener("click", handleBridalsClick)
engagementBtn.addEventListener("click", handleEngagementClick)
bridalsBtn.addEventListener("click", handleBridalsClick)
weddingBtn.addEventListener("click", handleWeddingClick)
allPhotosBtn.addEventListener("click", handleAllPhotosClick)

function handleDatingClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "We'll be adding the photos of our early dating soon! Please check back later."
  photosDisplay.appendChild(message)
}

function handleEngagedClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "We'll be adding the photos of our dating while engaged photos soon! Please check back later."
  photosDisplay.appendChild(message)
}

function handleEngagementClick() {
  photosDisplay.innerHTML = ""
  for (let index = 1; index <= 112; index++) {
    let newImg = document.createElement("img")
    newImg.src = `images/Engagements/Savannah+Preston_engagements-${index}.jpg`
    photosDisplay.appendChild(newImg)
  }
}

function handleBridalsClick() {
  photosDisplay.innerHTML = ""
  for (let index = 1; index <= 140; index++) {
    let newImg = document.createElement("img")
    newImg.src = `images/Bridals/PrestoSavBridals${index}.jpg`
    photosDisplay.appendChild(newImg)
  }
}

function handleWeddingClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "Sorry! We don't have the Wedding pictures available yet, especially since the wedding doesn't take place till 12/16/2023. Please check back later."
  photosDisplay.appendChild(message)
}

function handleAllPhotosClick() {
  photosDisplay.innerHTML = ""
  let message = document.createElement("h2")
  message.textContent =
    "Sorry! We only have the Engagement Photoshoot & Bridal Photoshoot pictures so far, but here they all are!"
  handleEngagementClick()
  handleBridalsClick()
  photosDisplay.appendChild(message)
}
