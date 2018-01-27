import * as React from 'react';
import { observer } from 'mobx-react';
import { action } from 'mobx';
import { FormattedHTMLMessage } from 'react-intl';
import { Page, Toolbar, ToolbarButton, Icon, List, ListItem, Radio } from 'react-onsenui';

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
                onChange={() => {
                    console.log(state.settings.locale);
                    S.set_language(index);
                    }}
            />
        </label>
        <label htmlFor={`locale-${index}`} className='center'>
            {row[index]}
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
                <div className='right'>
                    <ToolbarButton>
                        <Icon icon='ion-navicon, material:md-menu' />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    public render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    renderRow={renderLangRow}
                    dataSource={['English', '中文', 'meow']}
                />
            </Page>
        );
        //FIXME: meow lang
    }
}