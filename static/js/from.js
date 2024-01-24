// Simulate loading progress and redirect after 10 seconds
let progress = 0;
const progressBar = document.getElementById('progress');
const redirectMessage = document.getElementById('redirect-message');
const whatsappLink = document.getElementById('whatsapp-link');

const interval = setInterval(() => {
    progress += 10;
    progressBar.style.width = `${progress}%`;

    if (progress >= 100) {
        clearInterval(interval);
        redirectMessage.style.display = 'block';
        setTimeout(() => {
            window.location.href = "https://wa.me/1234567890";
        }, 2000); // Redirect after 2 seconds
    }
}, 1000); // Increase progress every second
