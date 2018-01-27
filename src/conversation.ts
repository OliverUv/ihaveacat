export type Talk = PCSay | NPCSay | NPCImage | PCImage;

export interface PCSay {
  type:'pcsay';
}

export interface NPCSay {
  type:'npcsay';
  text:string;
}

export interface PCImage {
  type:'pcimage';
  choices:string[]; // image_id
}

export interface NPCImage {
  type:'npcimage';
  caption:string;
  image_id:string;
}

export interface ConversationSpec {
  npc_id:string;
  content:Talk[];
}
