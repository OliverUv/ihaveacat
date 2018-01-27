export interface State {
  version:number;
  n_finished_conversations:number;
}

export function new_game_state() : State {
  return {
    version: 0,
    n_finished_conversations: 0,
  };
}
