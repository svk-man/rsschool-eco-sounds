export const NAV_LINK_CLASS = 'nav__link';
export const NAV_LINK_ACTIVE_CLASS = 'nav__link--active';
export const NAV_LINK_HIDDEN_ACTIVE_CLASS = 'nav__link--hidden-active';

export function setActiveNavLink(navLink) {
  const navLinks = document.querySelectorAll(`.${NAV_LINK_CLASS}`);
  let isHiddenActiveLinkExists = false;

  navLinks.forEach(currentNavLink => {
    currentNavLink.classList.remove(NAV_LINK_ACTIVE_CLASS);

    const isHiddenActiveLink = currentNavLink.classList.contains(NAV_LINK_HIDDEN_ACTIVE_CLASS);
    if (isHiddenActiveLink) {
      isHiddenActiveLinkExists = true;
      currentNavLink.classList.remove(NAV_LINK_HIDDEN_ACTIVE_CLASS);
    }
  });

  navLink.classList.add(NAV_LINK_ACTIVE_CLASS);
  if (isHiddenActiveLinkExists) {
    navLink.classList.add(NAV_LINK_HIDDEN_ACTIVE_CLASS);
  }
}
