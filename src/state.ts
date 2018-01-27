import { observable, IObservableObject, autorun } from 'mobx';
import * as Game from './game';
import * as LocalStorage from './local_storage';

export enum View {
  StartMenu,
  Settings,
  Game,
  Credits,
}

export interface Inner {
  view:View;
  game:Game.State;
}

export type State = Inner & IObservableObject;

export const state:State = observable({
  view: View.StartMenu,
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
  state.game = load;
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
