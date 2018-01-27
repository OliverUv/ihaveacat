import { TalkList } from './chat';
import { TransKey } from '../trans';

export enum PlayType {
  scene,
  chat,
  multiplayer_chat,
}

export type PlayList = Play[];

export type Play = Scene
    | Chat
    | MultiplayerChat;

export interface Scene {
  type:PlayType.scene;
  id:TransKey; // also used for image
}

export interface Chat {
  type:PlayType.chat;
  chat_id:string;
  content:TalkList;
}

export interface MultiplayerChat {
  type:PlayType.multiplayer_chat;
}
