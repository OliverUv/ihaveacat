import { action, observable, IObservableObject, autorun } from 'mobx';
import * as Game from './game';
import * as LocalStorage from './local_storage';
import { LocaleCode } from './trans';

export enum View {
  StartMenu,
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
  view: View.StartMenu,
  settings: {
    volume: 0.5,
    locale: LocaleCode.zh,
  },
  game: Game.new_game_state(),
});

/**
 * Load game from local storage
 *
 * @return {boolean} true if loaded a game
 */
export function load_game() : boolean {
  const load = LocalStorage.load();
  if (load == undefined) { return false; }
  action(() => {
    state.game = load;
  });
  return true;
}

export function init() {
  load_game();
  autorun(() => {
    LocalStorage.save(state.game);
    console.log(`saved game`);
    console.log(state.game);
  });
}

export function set_language(lang:LocaleCode) {
  action(() => {
    state.settings.locale = lang;
  });
}
