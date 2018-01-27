import { Traversal } from './chat';

export interface State {
  version:number;
  has_started:boolean;
  position_in_playlist:number;
  position_in_chat:Traversal;
}

export function new_game_state() : State {
  return {
    version: 0,
    has_started: false,
    position_in_playlist: 0,
    position_in_chat: [],
  };
}
