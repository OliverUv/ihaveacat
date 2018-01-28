import * as React from 'react';
import { Page, List, ListItem } from 'react-onsenui';
import { observer } from 'mobx-react';
import { Toolbar, ToolbarButton, Icon } from 'react-onsenui';

import * as S from '../state';
import { FormattedHTMLMessage } from 'react-intl';

@observer
export class Credits extends React.Component {
    public handleReturn = () => {
        S.state.view = S.View.Settings;
    }

    public renderToolbar = () => {
        return (
            <Toolbar>
                <div className='center'>
                    <FormattedHTMLMessage id='settings_credits' />
                </div>
                <div className='left'>
                    <ToolbarButton  onClick={this.handleReturn}>
                        <Icon icon='ion-chevron-left, material:md-menu' />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    public renderCreditRow = (row:string, index:number) => {
        return (
            <ListItem key={index}>
                <div className='left'>
                    <FormattedHTMLMessage id={`credit${row}_avatar`} />
                </div>
                <div className='center'>
                    <div className='list-item__title'>
                        <FormattedHTMLMessage id={`credit${row}_name`} />
                    </div>
                    <div className='list-item__subtitle'>
                        <FormattedHTMLMessage id={`credit${row}_bio`} />
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
                    dataSource={[1, 2, 3, 4, 5, 6]}
                />
            </Page>
        );
    }
}