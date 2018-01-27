export interface State {
  version:number;
  has_started:boolean;
  n_finished_conversations:number;
}

export function new_game_state() : State {
  return {
    version: 0,
    has_started: false,
    n_finished_conversations: 0,
  };
}
