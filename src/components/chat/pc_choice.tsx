import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { ListItem } from 'react-onsenui';

import { TransKey } from '../../trans';
import { NodeType } from '../../game';

interface PCChoiceProps {
    make_choice:(choice:TransKey) => void;
    type:NodeType.pcimage | NodeType.pcsay | NodeType.pcbutton;
    choices:{id:TransKey, color:string, disabled:boolean}[];
}

interface PCChoiceState {
}

export class PCChoice extends React.Component<PCChoiceProps, PCChoiceState> {
    public render() {
        return (
            <p />
        );
    }
}
