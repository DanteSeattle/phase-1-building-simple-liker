// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide error on page load
document.getElementById("modal").classList.add("hidden")
document.addEventListener("DOMContentLoaded", () =>  {
  document.getElementById("modal").classList.add("hidden")

})

// Add event listener to heart
const heart = document.getElementsByClassName('like-glyph')
for(var i = 0; i < heart.length; i++){
  heart[i].addEventListener('click', heartClick)
}

//heart.forEach(item => item.addEventListener('click', heartClick))

// Handle heart click event
function heartClick(e){
  console.log("clicked!")
  mimicServerCall()
    .then( () => {
      console.log("success")
      if (this.classList.contains('activated-heart'))
        this.classList.remove('activated-heart')
      else
        this.classList.add('activated-heart')
    })
    // On return error display error modal and then remove after 3 sec
    .catch( () => {
      console.log("error")
      document.getElementById("modal").classList.remove("hidden")
      setTimeout(() => { document.getElementById("modal").classList.add("hidden") }, 3000)
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
