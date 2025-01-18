const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel img');

// Clone the first and last items for seamless scrolling
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

// Append and prepend clones
track.appendChild(firstClone);
track.insertBefore(lastClone, items[0]);

// Carousel settings
let currentIndex = 1; // Start at the first real item (after the clone)
const itemWidth = items[0].clientWidth + 20; // Include margin
track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

// Auto-scroll function
function autoSlide() {
    currentIndex++;
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Loop back to the start
    track.addEventListener('transitionend', () => {
        if (currentIndex === items.length + 1) {
            currentIndex = 1; // Reset to the first real item
            track.style.transition = 'none'; // Remove transition for seamless loop
            track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        }
    });
}

// Auto-slide every 3 seconds
setInterval(autoSlide, 3000);