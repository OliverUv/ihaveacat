export function save (state:object) {
  try {
    localStorage.setItem('ihaveacat', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
}

export function load() {
  const game_state = localStorage.getItem('ihaveacat');
  if (game_state) {
    try {
      return JSON.parse(game_state);
    } catch (e) {}
  }
}
