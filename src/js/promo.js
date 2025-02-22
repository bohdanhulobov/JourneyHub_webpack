export function showBanner() {
  const banner = document.querySelector(".promo-banner");
  banner.classList.add("show");
  banner.style.display = "block";
}

export function hideBanner() {
  const banner = document.querySelector(".promo-banner");
  banner.classList.remove("show");
  setTimeout(() => {
    banner.style.display = "none";
  }, 500);
}

window.showBanner = showBanner;
window.hideBanner = hideBanner;

window.onload = function () {
  setTimeout(showBanner, 2000);
};
