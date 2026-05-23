/* ── Mobile nav ── */
document.addEventListener('DOMContentLoaded', function () {
  const mob = document.getElementById('navMobile');
  if (!mob) return;

  // Build header with logo + close button
  const existingLogo = document.querySelector('nav .nav-logo');
  const logoHref = existingLogo ? existingLogo.getAttribute('href') : '#';
  const logoSrc = existingLogo ? existingLogo.querySelector('img').src : '';

  const header = document.createElement('div');
  header.className = 'nav-mob-header';
  header.innerHTML =
    '<a href="' + logoHref + '" class="nav-mob-logo"><img src="' + logoSrc + '" alt="OCC Transport"></a>' +
    '<button class="nav-mob-close" onclick="toggleMobileNav()" aria-label="Close navigation menu">' +
    '<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
    '</button>';

  // Wrap existing links in a scrollable container
  const linksWrap = document.createElement('div');
  linksWrap.className = 'nav-mob-links';
  while (mob.firstChild) linksWrap.appendChild(mob.firstChild);

  mob.appendChild(header);
  mob.appendChild(linksWrap);
});

function toggleMobileNav() {
  const ham = document.getElementById('navHamburger');
  const mob = document.getElementById('navMobile');
  ham.classList.toggle('open');
  mob.classList.toggle('open');
  const isOpen = mob.classList.contains('open');
  ham.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  mob.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* ── Schedule day tabs (route pages) ── */
function showSched(btn, panelId) {
  const tabGroup = btn.closest('.schedule-tabs');
  const panelGroup = tabGroup.parentElement;
  tabGroup.querySelectorAll('.sched-tab').forEach(t => t.classList.remove('active'));
  panelGroup.querySelectorAll('.sched-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(panelId).classList.add('active');
}

/* ── Inbound/outbound direction toggle (route pages) ── */
function setDir(serviceOrDir, dir) {
  if (dir === undefined) { dir = serviceOrDir; serviceOrDir = 'reg'; }
  const prefix = serviceOrDir === 'reg' ? 'reg' : serviceOrDir;
  document.getElementById(prefix + '-out').classList.toggle('active', dir === 'out');
  document.getElementById(prefix + '-in').classList.toggle('active',  dir === 'in');
  document.getElementById(prefix + '-out-btn').classList.toggle('active', dir === 'out');
  document.getElementById(prefix + '-in-btn').classList.toggle('active',  dir === 'in');
}
