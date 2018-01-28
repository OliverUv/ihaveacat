import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import {
    Popover,
    ListItem,
} from 'react-onsenui';

import { NodeType } from '../../game';
import { TransKey } from '../../trans';

interface PCChatProps {
    type:NodeType.pcimage | NodeType.pcsay;
    content:TransKey;
}

interface PCChatState {
}

export class PCChat extends React.Component<PCChatProps, PCChatState> {
    public getTarget = () => {
        return this.refs.avatar;
    }
    public render() {
        const props = this.props;

        return (
            <ListItem modifier='nodivider' style={{marginTop: 16}}>
                <section className='right' ref='avatar'>
                    <img src={'http://placekitten.com/g/40/40'/* FIXME:*/} className='list-item_thumbnail' />
                </section>

                <Popover
                    isOpen={true}
                    isCancelable={false}
                    getTarget={this.getTarget}
                    animation='none'
                    maskColor='rgba(0,0,0,0)'
                    >

                    <section>
                        <FormattedHTMLMessage id={props.content} />
                    </section>
                </Popover>
            </ListItem>
        );
    }
}
