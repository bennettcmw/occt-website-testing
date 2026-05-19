/* ── Mobile nav ── */
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
