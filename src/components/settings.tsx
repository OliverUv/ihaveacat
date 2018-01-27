import * as React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { FormattedHTMLMessage } from 'react-intl';
import { Page, Toolbar, ToolbarButton, Icon, List, ListItem, Range, Radio } from 'react-onsenui';

import { state } from '../state';
import * as S from '../state';

interface SettingsProps {
    state:S.State;
}

const renderLangRow = action((row:string[], index:number) => {
    return (
    <ListItem key={index} tappable>
        <label className='left'>
            <Radio
                inputId={`locale-${index}`}
                checked={state.settings.locale === index}
                onChange={() => state.settings.locale = index }
            />
        </label>
        <label htmlFor={`locale-${index}`} className='center'>
            {row}
        </label>
    </ListItem>
    );
});

@observer
export class Settings extends React.Component<SettingsProps> {
    public renderToolbar () {
        return (
            <Toolbar>
                <div className='center'>Settings</div>
                <div className='left'>
                    <ToolbarButton onClick={this.handleReturn}>
                        <Icon icon='ion-chevron-left, material:md-menu' />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    public handleVolumeChange = (e:any) => {
        state.settings.volume = e.target.value;
    }

    public handleReset = () => {

    }

    public handleCredit = () => {
        state.view = S.View.Credits;
    }

    public handleReturn = () => {
        state.view = S.View.Game;
    }

    public render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    renderRow={renderLangRow}
                    dataSource={['English', '中文', 'meow']}
                />

                <br />

                <List>
                    <ListItem>
                        <label className='right'>
                            <Range
                                value={state.settings.volume}
                                onChange={this.handleVolumeChange}
                                />
                        </label>
                        <label className='center'>
                            Music
                            {/* FIXME: lang */}
                        </label>
                    </ListItem>
                </List>

                <br />

                <List className='inset'>
                    <ListItem
                        tappable
                        modifier='chevron'
                        onClick={this.handleCredit}
                    >
                        <div className='center'>
                            Credit
                            {/* FIXME: lang */}
                        </div>
                    </ListItem>
                </List>

                <br />

                <List>
                    <ListItem
                        tappable
                        onClick={this.handleReset}
                    >
                        <div className='center'>
                            Reset
                            {/* FIXME: lang */}
                        </div>
                    </ListItem>
                </List>
            </Page>
        );
        //FIXME: meow lang
    }
}