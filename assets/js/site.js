function toggleEmail(emailId) {
    const emailButton = document.getElementById(emailId);
    if (emailButton.style.display === 'none') {
        emailButton.style.display = 'block';
    } else {
        emailButton.style.display = 'none';
    }
}

function openWindow(url){
    window.open(url);
}