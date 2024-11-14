// Variables for menu button, sidebar menu, and pages
const menuButton = document.getElementById('menuButton');
const sidebarMenu = document.getElementById('sidebarMenu');
const pages = document.querySelectorAll('.page');

// Toggle Sidebar Menu Visibility
menuButton.addEventListener('click', () => {
    sidebarMenu.classList.toggle('visible');
});

// Navigation: Show the selected page and hide others
document.querySelectorAll('#sidebarMenu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetPage = this.getAttribute('data-page');
        pages.forEach(page => {
            page.classList.remove('active');
            if (page.id === targetPage) {
                page.classList.add('active');
            }
        });
        sidebarMenu.classList.remove('visible');
    });
});

// Accessibility: Text Size Adjustment Button
const increaseTextSizeButton = document.getElementById('increaseTextSize');
increaseTextSizeButton.addEventListener('click', () => {
    document.body.style.fontSize = 'larger';  // Increase the text size
});

// Accessibility: Background Color Toggle Button (Green Theme)
const toggleColorsButton = document.getElementById('toggleColors');
let isColorToggled = false;
toggleColorsButton.addEventListener('click', () => {
    isColorToggled = !isColorToggled;
    if (isColorToggled) {
        document.body.style.backgroundColor = '#2E8B57';  // Blue Text )
        document.body.style.color = '#005AA7';  // Change text color 
    } else {
        document.body.style.backgroundColor = '#fff';  // White background
        document.body.style.color = '#333';  // Change text color to black (default text)
    }
});

// Accessibility: Display Alt Text for Images
const displayAltTextButton = document.getElementById('displayAltText');
displayAltTextButton.addEventListener('click', () => {
    const images = document.querySelectorAll('.gallery-item img');
    images.forEach(img => {
        const altText = img.alt;
        alert(`Alt Text: ${altText}`);  // Display alt-text of each image
    });
});
