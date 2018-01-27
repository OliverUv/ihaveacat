import { observable, IObservableObject } from 'mobx';
import * as Game from './game';

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
