type WindowStates = 'normal' | 'maximized' | 'minimized' | 'fullscreen';

interface window {
  name: string,
  state: WindowStates,
  location: string
}

var window1: window = {
  name: 'window1',
  state: 'normal',
  location: 'the wall'
}

function setWindowState(state: WindowStates, window: window) {
  console.log(`${window.name}'s state was ${window.state}`)
  window.state = state;
  console.log(`${window.name}'s state is now ${window.state}`)
}

setWindowState('maximized', window1)