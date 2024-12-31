document.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('header').offsetHeight; // Get header height
    const scrollPosition = window.scrollY; // Current scroll position

    // Only track scrolling beyond the header
    const adjustedScrollPosition = Math.max(0, scrollPosition - headerHeight);

    // Calculate the total scrollable height (excluding header)
    const totalContentHeight = document.body.scrollHeight - window.innerHeight - headerHeight;

    // Avoid division by zero if there's no scrollable content
    const scrollPercentage = totalContentHeight > 0
      ? (adjustedScrollPosition / totalContentHeight) * 100
      : 0;

    // Update the gradient in the sticky bar
    const stickyBar = document.querySelector('.sticky-bar');
    stickyBar.style.background = `linear-gradient(to right, #71ff8b ${scrollPercentage}%, #00460d ${scrollPercentage}%)`;
});

window.addEventListener('scroll', function() {
    const header = document.getElementById('header');

    if (window.scrollY <= 0) {
        // Allow the header to scroll down when at the top
        header.style.transform = 'translateY(0)';
    } else {
        // Maintain the header fixed position while scrolling down
        header.style.transform = 'translateY(-100%)';
    }
});
