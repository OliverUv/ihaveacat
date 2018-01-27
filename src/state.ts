import { action, observable, IObservableObject, autorun } from 'mobx';
import * as Game from './game';
import * as LocalStorage from './local_storage';
import { LocaleCode } from './trans';

export enum View {
  StartMenu,
  Story1,
  Story2,
  Story3,
  Settings,
  Game,
  Credits,
}

export interface Settings {
  volume:number; // [0,1]
  locale:LocaleCode;
}

export interface Inner {
  view:View;
  settings:Settings;
  game:Game.State;
}

export type State = Inner & IObservableObject;

export const state:State = observable({
  view: View.Settings,
  settings: new_settings(),
  game: Game.new_game_state(),
});

function new_settings() : Settings {
  return {
    volume: 0.5,
    locale: LocaleCode.zh,
  };
}

/**
 * Load game from local storage
 *
 * @return {boolean} true if loaded a game
 */
export function load_game() : boolean {
  const load = LocalStorage.load_game();
  if (load == undefined) { return false; }
  state.game = load;
  return true;
}

function load_settings() {
  const load = LocalStorage.load_settings();
  if (load == undefined) { return false; }
  state.settings = load;
  return true;
}

export function init() {
  load_game();
  load_settings();
  autorun(() => {
    LocalStorage.save_game(state.game);
    console.log(`saved game`);
    console.log(state.game);
    LocalStorage.save_settings(state.settings);
    console.log(`saved settings`);
    console.log(state.settings);
  });
}

export function set_language(lang:LocaleCode) {
  action(() => {
    state.settings.locale = lang;
  });
}
