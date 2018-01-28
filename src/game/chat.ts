import { TransKey } from '../trans';

export type TalkNode = PCNode | NPCNode;
export type PCNode = PCSay | PCImage | PCButton;
export type NPCNode = NPCSay | NPCImage | SystemMessage;

export type TalkList = TalkNode[];
export type Choice = TransKey | '';
export type Traversal = Choice[];

export type ChoiceTypes = TextChoice | ImageChoice | ButtonChoiceX;

export enum NodeType {
  npcsay,
  npcimage,
  pcsay,
  pcimage,
  pcbutton,
  system_message,
}

function is_pc_node(n:TalkNode) : n is PCNode {
  return n.type == NodeType.pcimage
      || n.type == NodeType.pcsay
      || n.type == NodeType.pcbutton;
}

function is_npc_node(n:TalkNode) : n is NPCNode {
  return !is_pc_node(n);
}

export type Consequence = () => void;

export interface SystemMessage {
  type:NodeType.system_message;
  id:TransKey;
  next?:TalkNode;
  // TODO
}

export interface NPCSay {
  type:NodeType.npcsay;
  id:TransKey; // translation key of text
  next?:TalkNode;
  npc?:TransKey; // if no key, use chat key
}

export interface NPCImage {
  type:NodeType.npcimage;
  id:TransKey;
  next?:TalkNode;
  npc?:TransKey; // if no key, use chat key
}

export interface PCSay {
  type:NodeType.pcsay;
  choices:TextChoice[];
  next?:TalkNode;
}

export type TextChoice = TransKey | TextChoiceX;

export interface TextChoiceX {
  consequence?:Consequence;
  id:TransKey;
  next?:TalkNode;
}

export interface PCImage {
  type:NodeType.pcimage;
  choices:ImageChoice[];
  next?:TalkNode;
}

export type ImageChoice = TransKey | ImageChoiceX;
export interface ImageChoiceX {
  id:TransKey;
  consequence?:Consequence;
  next?:TalkNode;
}

export interface PCButton {
  type:NodeType.pcbutton;
  choices:ButtonChoiceX[];
  next?:TalkNode;
}

export interface ButtonChoiceX {
  id:TransKey;
  color:string;
  consequence?:Consequence;
  next?:TalkNode;
  disabled?:boolean;
}

export interface Next {
  consequence?:Consequence;
  responses:NPCNode[];
  choice?:PCNode;
}

interface Rollup {
  responses:NPCNode[];
  choice?:PCNode;
}

export class TalkIterator {
  private position = 0;
  private current_node:TalkNode;
  private traversal:Traversal = [];
  constructor(
    private list:TalkList,
  ) {
    if (list.length == 0) {
      throw new Error(`Can't have an empty chat`);
    }
    this.current_node = list[0];
  }

  public collect_responses() : Rollup {
    const responses:NPCNode[] = [];
    while (true) {
      if (is_pc_node(this.current_node)) {
        return {
          responses,
          choice: this.current_node,
        };
      }
      const n = this.current_node;
      responses.push(n);
      if (n.next != undefined) {
        this.current_node = n.next;
        continue;
      }
      if (this.position < this.list.length) {
        this.position += 1;
        this.current_node = this.list[this.position];
        continue;
      }
      if (this.position == this.list.length) {
        break;
      }
      throw new Error(`Unhandled case in npc response collection`);
    }

    return { responses };
  }

  public next(c:Choice) : Next {
    if (this.traversal.length == 0) {
      if (c != '') {
        throw new Error(`First choice must be empty`);
      }
      return this.collect_responses();
    }
    if (this.position == this.list.length) {
      throw new Error(`Chat was iterated after it was done`);
    }
    if (c == '') {
      throw new Error(`Empty choice not allowed`);
    }
    const cur = <PCNode>this.current_node;
    for (let i = 0; i < cur.choices.length; i++) {
      const choice:ChoiceTypes = cur.choices[i];
      if (typeof choice == 'string') {
        if (choice != c) { continue; }
        // user chose this, has no next
        this.position += 1;
        if (this.position == this.list.length) {
          // this was the last node
          return {
            responses:[],
          };
        }
        this.current_node = this.list[this.position];
        return this.collect_responses();
      }

      if (choice.id != c) { continue; }
      if ((<ButtonChoiceX>choice).disabled != undefined
          && (<ButtonChoiceX>choice).disabled) {
        throw new Error(`Attempted to choose disabled button`);
      }
      const consequence = choice.consequence;
      if (choice.next != undefined) {
        this.current_node = choice.next;
      } else {
        this.position += 1;
        if (this.position == this.list.length) {
          // this was the last node
          return {
            consequence,
            responses:[],
          };
        }

        this.current_node = this.list[this.position];
        const roll = this.collect_responses();
        return {
          consequence,
          responses: roll.responses,
          choice: roll.choice,
        };
      }

    }
    throw new Error(`Choice made was not available: ${c}`);
    // Save next node

    // Move position

    // Return next node

    // const choices:Choice[] = [];
    // this.current_node.
    // this.traversal.push(c);
  }
}
