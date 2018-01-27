import { observable, IObservableObject } from 'mobx';

export enum View {
  StartMenu,
  Settings,
  Game,
  Credits,
}

export interface Inner {
  view:View;
  game:Game;
}

export interface Game {
  version:number;
  n_finished_conversations:number;
}

export type State = Inner & IObservableObject;

export function create_new_game() : Game {
  return {
    version: 0,
    n_finished_conversations: 0,
  };
}

export const state:State = observable({
  view: View.StartMenu,
  game: create_new_game(),
});
