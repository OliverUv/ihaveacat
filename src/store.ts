import { observable } from 'mobx';

export enum View {
  StartMenu,
  Settings,
  Game,
  Credits,
}

// export interface State {
  // view:View;
// }

export const state = observable({
  view: View.StartMenu,
});
export type State = typeof state;
