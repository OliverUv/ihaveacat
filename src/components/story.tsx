import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { Scene } from '../game';
import { TransKey } from '../trans';
import './story.css';

interface StoryProps {
  scene:Scene;
  next:() => void;
}

interface StoryState {}

export class Story extends React.Component<StoryProps, StoryState> {
    public render() {
        // const storyId = 'story' + this.props.storyId;
        const on_next = this.props.next;
        return (
            <div className='Story'>
                <img src={'story_images/' + this.props.scene.id} />

                <div className='Story-text'>
                    <span>
                        <FormattedHTMLMessage
                            id={this.props.scene.id}
                        />
                    </span>
                    {/* <FormattedHTMLMessage id={storyId} /> */}
                </div>
            </div>
        );
    }
}
