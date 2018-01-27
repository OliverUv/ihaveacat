export function save(state:object) {
  try {
    localStorage.setItem('ihaveacat', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
}

export function load() : object|undefined {
  const game_state = localStorage.getItem('ihaveacat');
  if (!game_state) { return undefined; }
  try {
    return JSON.parse(game_state);
  } catch (e) {
    console.error(`local storage parse error`);
    console.error(e);
    return undefined;
  }
}
