import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { state, View } from '../state';

import './story.css';

interface StoryProps {
    storyId:number;
}

interface StoryState {}

export class Story extends React.Component<StoryProps, StoryState> {
    public handleClick = () => {
        switch (this.props.storyId) {
            case 1:
                state.view = View.Story2;
                break;
            case 2:
                state.view = View.Story3;
                break;
            case 3:
                state.view = View.Game;
                break;
        }
    }

    public render() {
        return (
            <div className='Story'>
                <img src='welcome.jpg' />

                <div className='Story-text'>
                    <span>
                        <FormattedHTMLMessage id={`story${this.props.storyId}`} />
                    </span>
                </div>
            </div>
        );
    }
}