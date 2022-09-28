const panelsContainer = document.querySelector('.panels');
const openPanels = document.getElementsByClassName('open');
const openActivePanels = document.getElementsByClassName('open-active');

panelsContainer.addEventListener('click', e => {
  const panel = e.target.closest('.panel');
  if (!panel) {
    return;
  }
  const isOpen = panel.classList.contains('open');
  if (openPanels.length) {
    openPanels[0].classList.remove('open');
  }
  panel.classList.toggle('open', !isOpen);
});
panelsContainer.addEventListener('transitionend', e => {
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  if (e.propertyName === 'flex' || e.propertyName === 'flex-grow') {
    if (openActivePanels.length) {
      openActivePanels[0].classList.toggle('open-active', openActivePanels[0].classList.contains('open'))
    }
    if (openPanels.length) {
      openPanels[0].classList.add('open-active')
    }
  }
})