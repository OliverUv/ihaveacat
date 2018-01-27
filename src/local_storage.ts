import { State } from './game';
import { Settings } from './state';

export function save_game(state:State) {
  try {
    localStorage.setItem('ihaveacat', JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
}

export function load_game() : State|undefined {
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

export function save_settings(settings:Settings) {
  try {
    localStorage.setItem('ihaveacat_settings', JSON.stringify(settings));
  } catch (e) {
    console.error(e);
  }
}

export function load_settings() : Settings|undefined {
  const settings = localStorage.getItem('ihaveacat_settings');
  if (!settings) { return undefined; }
  try {
    return JSON.parse(settings);
  } catch (e) {
    console.error(`local storage parse error`);
    console.error(e);
    return undefined;
  }
}
