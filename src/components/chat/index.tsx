import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Page, Toolbar, ToolbarButton, Icon, List, ListItem, Range, Radio } from 'react-onsenui';

// import './chat.css';
import * as S from '../../state';
import { state } from '../../state';
import {
  Chat as PlayChat,
  NodeType,
  TalkIterator,
  TalkList,
  is_npc_node,
  is_pc_node,
} from '../../game';
import { TransKey } from '../../trans';

import { NPCChat } from './npc_chat';
// npc: TransKey
// type: NodeType.npcimage | NodeType.npcsay
// content: TransKey

import { PCChat } from './pc_chat';
// type: NodeType.pcimage | NodeType.pcsay
// content: TransKey

import { PCChoice } from './pc_choice';
// make_choice: (choice:transkey) => void
// type: NodeType.pcimage | NodeType.pcsay | NodeType.pcbutton
// choices: { id: TransKey, color:string, disabled:boolean }[]

import { SystemMessage } from './system_message';
// text:TransKey

// toolbar
// title:TransKey

interface ChatProps {
  state:S.State;
  chat:PlayChat;
  next:() => void;
}

interface LogMsg {
  player:boolean;
  npc?:TransKey;
  content:TransKey;
  type:NodeType.npcimage
      | NodeType.npcsay
      | NodeType.pcimage
      | NodeType.pcsay
      | NodeType.system_message;
}

interface ChatState {
  model:TalkIterator;
  log: LogMsg[];
}

export class Chat extends React.Component<ChatProps, ChatState> {
    constructor(props:ChatProps) {
      super(props);
      this.state = {
        model: new TalkIterator(props.chat.content),
        log: [],
      };
    }

    private choice(c:TransKey) {
      this.state.model.next(c);
    }

    public render() {
        const on_next = this.props.next;
        return (
            <div className='Chat'>
                <Toolbar title={this.props.chat.chat_id} />
                <List renderRow={this.dispatchLogMsg.bind(this)} dataSource={this.state.log} />
            </div>
        );
    }

    private dispatchLogMsg(log:LogMsg[], index:number) {
      const l = log[index];
      if (l.type == NodeType.npcimage || l.type == NodeType.npcsay) {
        const npc = l.npc != undefined ? l.npc : this.props.chat.chat_id;
        return (
          <NPCChat npc={npc} type={l.type} content={l.content} />
        );
      }
      if (l.type == NodeType.system_message) {
        return (
          <SystemMessage text={l.content} />
        );
      }
      return (
        <PCChat type={l.type} content={l.content} />
      );
    }
}
