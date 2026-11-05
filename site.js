'use strict';
// Keep static content fully usable without JavaScript. Allow one case to be
// expanded at a time to make the evidence easier to scan on smaller screens.
document.querySelectorAll('.project details').forEach((panel) => {
  panel.addEventListener('toggle', () => {
    if (!panel.open) return;
    document.querySelectorAll('.project details[open]').forEach((other) => {
      if (other !== panel) other.open = false;
    });
  });
});
