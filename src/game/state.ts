import { observable, computed, IComputedValue } from 'mobx';

import { Traversal } from './chat';
import { Play, PlayType, PlayList } from './playlist';
import { playlist } from '../content/playlist';

export interface State {
  version:number;
  has_started:boolean;
  playlist:PlayList;
  position_in_playlist:number;
  position_in_chat:Traversal;
  current_play:Play;
}

export function new_game_state() : State {
  return {
    version: 0,
    has_started: false,
    playlist: playlist,
    position_in_playlist: 0,
    position_in_chat: [],

    // become mobx computed values:

    get current_play(this:State) {
      return this.playlist[this.position_in_playlist];
    },

  };
}
