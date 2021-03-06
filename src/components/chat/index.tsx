import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';
import { Page, ToolbarButton, Icon, List, ListItem, Range, Radio } from 'react-onsenui';
import { observer } from 'mobx-react';

// import './chat.css';
import * as S from '../../state';
import { state } from '../../state';
import {
  Chat as PlayChat,
  NodeType,
  TalkIterator,
  PCNode,
  ChoiceTypes,
  ChoiceListTypes,
  TextChoice,
  ImageChoice,
  ButtonChoiceX,
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
export interface NormalizedChoice {
  key:string;
  id:TransKey;
  color:string;
  disabled:boolean;
}
// make_choice: (choice:transkey) => void
// type: NodeType.pcimage | NodeType.pcsay | NodeType.pcbutton
// choices: { id: TransKey, color:string, disabled:boolean }[]

import { SystemMessage } from './system_message';
// text:TransKey

import { ChatToolbar } from './toolbar';

interface ChatProps {
  state:S.State;
  chat:PlayChat;
  next:() => void;
}

interface LogMsg {
  key:number;
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
  current_choice?:PCNode;
  log:LogMsg[];
}

@observer
export class Chat extends React.Component<ChatProps, ChatState> {
    constructor(props:ChatProps) {
      super(props);
      this.state = {
        model: new TalkIterator(props.chat.content),
        current_choice: undefined,
        log: [],
      };
    }

    public componentDidMount() {
      this.choice('');
    }

    private choice(c:TransKey | '') {
      console.log(`Got choice ${c}`);
      const r = this.state.model.next(c);
      const new_logs:LogMsg[] = [];
      const n_log_items = this.state.log.length;
      for (let i = 0; i < r.responses.length; i++) {
        const response = r.responses[i];
        let npc:TransKey|undefined = undefined;
        if ((response as any).npc != undefined) {
          npc = (response as any).npc;
        }
        new_logs.push({
          key: n_log_items + 1 + i,
          player: false,
          npc,
          content: response.id,
          type: response.type,
        });
      }
      if (r.consequence != undefined) { r.consequence(); }
      this.setState({
        ...this.state,
        log: this.state.log.concat(new_logs),
        current_choice: r.choice,
      });
    }

    private text_choices(choices:TextChoice[]) : NormalizedChoice[] {
      const res:NormalizedChoice[] = [];
      for (let i = 0; i < choices.length; i++) {
        const c = choices[i];
        if (typeof c == 'string') {
          res.push({
            key: c,
            id: (c as TransKey),
            color: '#000000',
            disabled: false,
          });
          continue;
        }
        res.push({
          key: c.id,
          id: c.id,
          color: '#000000',
          disabled: false,
        });
      }
      return res;
    }

    private image_choices(choices:ImageChoice[]) : NormalizedChoice[] {
      return this.text_choices((choices as any));
    }

    private button_choices(choices:ButtonChoiceX[]) : NormalizedChoice[] {
      const res:NormalizedChoice[] = [];
      for (let i = 0; i < choices.length; i++) {
        const c = choices[i];
        res.push({
          key: c.id,
          id: c.id,
          color: c.color,
          disabled: c.disabled || false,
        });
      }
      return res;
    }

    private render_choice() {
      // tslint:disable-next-line
      if (this.state.current_choice == undefined) { return null; }
      const c = this.state.current_choice;
      let choices:NormalizedChoice[];
      if (c.type == NodeType.pcsay) {
        choices = this.text_choices(c.choices);
      } else if (c.type == NodeType.pcimage) {
        choices = this.image_choices(c.choices);
      } else if (c.type == NodeType.pcbutton) {
        choices = this.button_choices(c.choices);
      } else {
        throw new Error(`Unknown choice type`);
      }
      return (<PCChoice
                  make_choice={this.choice.bind(this)}
                  type={c.type}
                  choices={choices}
              />);
    }

    public renderToolbar = () => {
    return (<ChatToolbar title={this.props.chat.chat_id} />);
    }

    public render() {
        const on_next = this.props.next;
        return (
            <Page renderToolbar={this.renderToolbar}>
              <List renderRow={this.renderLogMsg.bind(this)} dataSource={this.state.log} />
              {this.render_choice()}
            </Page>
        );
    }

    private renderLogMsg(l:LogMsg, index:number) {
      // const l = log[index];
      if (l.type == NodeType.npcimage || l.type == NodeType.npcsay) {
        const npc = l.npc != undefined ? l.npc : this.props.chat.chat_id;
        return (
          <NPCChat key={index} npc={npc} type={l.type} content={l.content} />
        );
      }
      if (l.type == NodeType.system_message) {
        return (
          <SystemMessage key={index} text={l.content} />
        );
      }
      return (
        <PCChat key={index} type={l.type} content={l.content} />
      );
      // throw new Error('Unknown thing in message log');
    }
}
