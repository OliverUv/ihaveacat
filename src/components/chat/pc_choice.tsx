import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { ActionSheet, ActionSheetButton } from 'react-onsenui';

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
    public renderImageChoices() {
        // return this.props.choices.map((choice) => (

        // ));
    }

    private on_choice(choice:TransKey) {
      this.props.make_choice(choice);
    }

    public renderButtons() {
        return this.props.choices.map((choice) => (
            <ActionSheetButton
                key={choice.id}
                onClick={() => this.on_choice(choice.id)}
            >
                <label
                  onClick={() => this.on_choice(choice.id)}
                  style={{color: choice.color}}
                >
                    <FormattedHTMLMessage id={choice.id} />
                </label>
            </ActionSheetButton>
        ));
    }

    public render() {
        return (
            <ActionSheet
                isOpen={true}
                maskColor='rgba(0,0,0,0.2)'
                isCancelable={false}
            >
                {this.props.type === NodeType.pcimage
                    && this.renderImageChoices()
                    || this.renderButtons()}

            </ActionSheet>
        );
    }
}
