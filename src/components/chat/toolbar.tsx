import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { Toolbar, ToolbarButton, Icon } from 'react-onsenui';

import { TransKey } from '../../trans';

interface PCTextProps {
    title:TransKey;
}

interface PCTextState {
}

export class PCText extends React.Component<PCTextProps, PCTextState> {
    public handleClick = () => {
        // FIXME: open the settings view
    }

    public render() {
        return (
            <Toolbar>
                <div className='center'>
                    <FormattedHTMLMessage id={this.props.title} />
                </div>
                <div className='right'>
                    <ToolbarButton onClick={this.handleClick}>
                        <Icon icon='ion-more, meterial:md-menu' />
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }
}
