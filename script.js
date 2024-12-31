document.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if (window.scrollY <= 0) {
        // Header scrolls with content at the top (no fixed positioning)
        header.style.transform = 'translateY(0)';
    } else {
        // When scrolled down, maintain fixed positioning with a smooth effect
        header.style.transform = 'translateY(-100%)';
    }

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
