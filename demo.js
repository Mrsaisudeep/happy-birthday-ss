// // Handle the "Celebrate" button click to trigger animation effects
// document.getElementById('celebrateButton').addEventListener('click', function() {
//     // Change the message to a more celebratory tone
//     const wishMessage = document.getElementById('wishMessage');
//     wishMessage.textContent = "You are loved and cherished! 🎉 Wishing you endless happiness! From Sai Sudeep 💖";
    
//     // Generate the birthday balloons and sparkles
//     generateBalloons();
//     generateSparkles();
// });

// // Function to generate floating balloons
// function generateBalloons() {
//     const balloonsContainer = document.getElementById('balloonsContainer');
//     for (let i = 0; i < 10; i++) {
//         let balloon = document.createElement('div');
//         balloon.classList.add('balloon');
        
//         // Randomize the position and animation duration of the balloons
//         balloon.style.left = `${Math.random() * 100}vw`;
//         balloon.style.animationDuration = `${Math.random() * 4 + 3}s`;
//         balloon.style.animationDelay = `${Math.random() * 2}s`;
        
//         balloonsContainer.appendChild(balloon);
        
//         // Remove the balloon after animation
//         setTimeout(() => {
//             balloon.remove();
//         }, 5000);
//     }
// }

// // Function to generate sparkling effects
// function generateSparkles() {
//     const sparklesContainer = document.getElementById('sparklesContainer');
//     for (let i = 0; i < 30; i++) {
//         let sparkle = document.createElement('div');
//         sparkle.classList.add('sparkle');
        
//         // Randomize the position and animation duration of the sparkles
//         sparkle.style.left = `${Math.random() * 100}vw`;
//         sparkle.style.top = `${Math.random() * 100}vh`;
//         sparkle.style.animationDuration = `${Math.random() * 1 + 1}s`;
//         sparkle.style.animationDelay = `${Math.random() * 2}s`;
        
//         sparklesContainer.appendChild(sparkle);
        
//         // Remove the sparkle after animation
//         setTimeout(() => {
//             sparkle.remove();
//         }, 3000);
//     }
// }
