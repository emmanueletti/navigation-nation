// Cached DOM Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navItems = document.querySelectorAll('nav li');

const toggleSlideAnimation = (item, index, isNavOpen) => {
  const indexOffset = index + 1;
  if (isNavOpen) {
    item.classList.add(`slide-in-${indexOffset}`);
    item.classList.remove(`slide-out-${indexOffset}`);
  } else {
    item.classList.replace(
      `slide-in-${indexOffset}`,
      `slide-out-${indexOffset}`
    );
  }
};

const toggleNav = () => {
  // Native toggle property!!!
  // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  const isNavOpen = menuBars.classList.contains('change');
  navItems.forEach((item, i) => {
    toggleSlideAnimation(item, i, isNavOpen);
  });
};

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});
