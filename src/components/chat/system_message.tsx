import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { ListItem } from 'react-onsenui';

import { TransKey } from '../../trans';

interface SystemMessageProps {
    text:TransKey;
}

interface SystemMessageState {
}

export class SystemMessage extends React.Component<SystemMessageProps, SystemMessageState> {
    public render() {
        return (
              <div style={{
                  width: '100%',
                  textAlign: 'center',
              }}>
                  <FormattedHTMLMessage id={this.props.text} />
              </div>
        );
    }
}
