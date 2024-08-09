document.addEventListener('DOMContentLoaded', function () {
    const modal = document.querySelector('.blur-background');
    const closeButton = document.querySelector('.close-btn');

    // Show the modal if it's an article page
    if (modal && document.querySelector('article.post-content')) {
        modal.classList.add('active');
    }

    // Close the modal when the close button is clicked
    if (closeButton) {
        closeButton.addEventListener('click', function () {
            modal.classList.remove('active');
        });
    }
});
