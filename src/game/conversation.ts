import { TransKey } from '../trans';

export type Talk = PCSay | NPCSay | NPCImage | PCImage;

export interface PCSay {
  type:'pcsay';
  choices:TransKey[];
}

export interface NPCSay {
  type:'npcsay';
  text:TransKey;
}

export interface PCImage {
  type:'pcimage';
  choices:Image[];
}

export interface NPCImage extends Image {
  type:'npcimage';
}

export interface Image {
  caption:TransKey;
  image_id:string;
}

export interface ConversationSpec {
  npc_id:string;
  content:Talk[];
}
