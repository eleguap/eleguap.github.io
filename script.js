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
    stickyLine.style.background = `linear-gradient(to right, #D8F3DC ${scrollPercentage}%, #40916C ${scrollPercentage}%)`;

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

document.querySelectorAll('.item').forEach(item => {
    let intervalId;

    const changeDimensions = () => {
        // Generate random sizes as percentages of the parent box
        const beforeWidth = Math.random() * 50 + 10; // 10% to 60%
        const beforeHeight = Math.random() * 50 + 10;

        const afterWidth = Math.random() * 50 + 10;
        const afterHeight = Math.random() * 50 + 10;

        // Apply these values as CSS variables
        item.style.setProperty('--before-width', `${beforeWidth}%`);
        item.style.setProperty('--before-height', `${beforeHeight}%`);
        item.style.setProperty('--after-width', `${afterWidth}%`);
        item.style.setProperty('--after-height', `${afterHeight}%`);
    };

    item.addEventListener('mouseenter', () => {
        // Immediately change dimensions
        changeDimensions();

        // Set offsets and color once
        item.style.transform = 'scale(1.1)';
        item.style.backgroundColor = '#1B4332';
        item.style.setProperty('--border-color', '#D8F3DC'); // Set a new border color

        item.querySelector('h3').style.color = '#D8F3DC'; // Change text color of h3
        item.querySelector('p').style.color = '#D8F3DC';  // Change text color of p

        // Start continuously changing dimensions
        intervalId = setInterval(changeDimensions, 2000); // Adjust interval time as needed
    });

    item.addEventListener('mouseleave', () => {
        // Stop the continuous changes
        clearInterval(intervalId);

        // Reset dimensions to default
        item.style.setProperty('--before-width', `10%`);
        item.style.setProperty('--before-height', `10%`);
        item.style.setProperty('--after-width', `10%`);
        item.style.setProperty('--after-height', `10%`);
        item.style.setProperty('--border-color', '#40916C');

        item.style.transform = 'scale(1)';
        item.style.backgroundColor = 'transparent';

        item.querySelector('h3').style.color = '#40916C'; // Change text color of h3
        item.querySelector('p').style.color = '#40916C';  // Change text color of p
    });
});
