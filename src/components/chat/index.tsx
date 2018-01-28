import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

// import './chat.css';
import * as S from '../../state';
import { TalkList, TalkIterator, Chat as PlayChat } from '../../game';
import { TransKey } from '../../trans';
import { state } from '../../state';

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

interface ChatState {
  model:TalkIterator;
}

export class Chat extends React.Component<ChatProps, ChatState> {
    public render() {
        // const chatId = 'chat' + this.props.chatId;
        const on_next = this.props.next;
        return (
            <p />
            // <div className='Chat'>
                // <img src={'chat_images/' + this.props.scene.id} />

                // <div className='Chat-text'>
                    // <span>
                        // <FormattedHTMLMessage
                            // id={this.props.scene.id}
                        // />
                    // </span>
                    // {[> <FormattedHTMLMessage id={chatId} /> <]}
                // </div>
            // </div>
        );
    }
}
