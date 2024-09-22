// JavaScript for interactive elements (optional)
const heart = document.querySelector('.heart');

// Function to make the heart beat
function beatHeart() {
  heart.classList.add('heartbeat');
  setTimeout(() => {
    heart.classList.remove('heartbeat');
  }, 1000);
}

// Event listener to beat the heart when clicked
heart.addEventListener('click', beatHeart);