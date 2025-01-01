document.addEventListener('scroll', () => {
    const headerHeight = document.querySelector('header').offsetHeight; // Get header height
    const scrollPosition = window.scrollY; // Current scroll position

    // Only track scrolling beyond the header
    const adjustedScrollPosition = Math.max(0, scrollPosition - headerHeight);

    // Calculate the total scrollable height (excluding header)
    const totalContentHeight = document.body.scrollHeight - window.innerHeight - headerHeight + 160;

    // Avoid division by zero if there's no scrollable content
    const scrollPercentage = totalContentHeight > 0
        ? (adjustedScrollPosition / totalContentHeight) * 100
        : 0;

    // Update the gradient in the sticky bar
    const stickyLine = document.querySelector('.sticky-line');
    stickyLine.style.background = `linear-gradient(to right, #71ff8b ${scrollPercentage}%, #00460d ${scrollPercentage}%)`;

    // Scroll direction detection for overscroll behavior
    const container = document.querySelector('.container'); // Target your scrollable container
    const lastScrollTop = container.dataset.lastScrollTop || 0;

    if (scrollPosition > lastScrollTop) {
        // Scrolling down: disable overscroll
        container.classList.add('no-overscroll');
    } else {
        // Scrolling up: allow overscroll
        container.classList.remove('no-overscroll');
    }

    // Update the lastScrollTop value
    container.dataset.lastScrollTop = scrollPosition;
});
