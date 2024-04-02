
function handleMediaChange(event) {
  if (event.matches) {
      copyAndPasteBlock();
  } else {
      removeBlock();
  }
}

function copyAndPasteBlock() {
  const originalBlock = document.querySelector(".header__top");
  const copiedBlock = originalBlock.cloneNode(true);
  copiedBlock.style.display = 'flex';
  const targetContainer = document.querySelector(".header__nav");
  targetContainer.appendChild(copiedBlock);
}

function removeBlock() {
  const targetContainer = document.querySelector(".header__nav");
  const copiedBlock = targetContainer.querySelector(".header__top");
  if (copiedBlock) {
      copiedBlock.remove();
  }
}

const mediaQuery = window.matchMedia("(min-width: 320px) and (max-width: 991px)");
handleMediaChange(mediaQuery);
mediaQuery.addEventListener("change", handleMediaChange);


const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnSub = document.querySelector(".header__menu-btn");
const navLinks = document.querySelector(".header__bottom-inform");

btnSub.addEventListener("click", () => {
    body.classList.toggle("overflow-hidden");
    header.classList.toggle("nav-visible");

});

navLinks.addEventListener("click", () => {
    body.classList.remove("overflow-hidden");
    header.classList.remove("nav-visible");
});
