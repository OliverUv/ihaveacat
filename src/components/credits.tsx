import * as React from 'react';
import { Page, List, ListItem } from 'react-onsenui';
import { observer } from 'mobx-react';
import { Toolbar, ToolbarButton, Icon } from 'react-onsenui';

import * as S from '../state';

@observer
export class Credits extends React.Component {
    public handleReturn = () => {
        S.state.view = S.View.Settings;
    }

    public renderToolbar = () => {
        return (
            <Toolbar>
                <div className='center'>
                    Credits
                    {/* FIXME: */}
                </div>
                <div className='left'>
                    <ToolbarButton  onClick={this.handleReturn}>
                        <Icon icon='ion-chevron-left, material:md-menu' />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    public renderCreditRow = (row:string[], index:number) => {
        return (
            <ListItem key={index}>
                <div className='left'>
                    <img src={'http://placekitten.com/g/40/40'/*FIXME:*/} className='list-item__thumbnail' />
                </div>
                <div className='center'>
                    <div className='list-item__title'>
                        whatever
                        {/* FIXME: */}
                    </div>
                    <div className='list-item__subtitle'>
                        here is the bios. we r supercat.
                        {/* FIXME: */}
                    </div>
                </div>
            </ListItem>
        );
    }

    public render () {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    renderRow={this.renderCreditRow}
                    dataSource={['fc', 'bingo', 'necolo', 'oliver', 'haidong'] /*FIXME: better from lang {avatar, name, bio} */}
                />
            </Page>
        );
    }
}