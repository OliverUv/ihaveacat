import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { Scene } from '../game';
import { TransKey } from '../trans';
import './story.css';

interface StoryProps {
  scene:Scene;
}

interface StoryState {}

export class Story extends React.Component<StoryProps, StoryState> {
    public handleClick = () => {

    }

    public render() {
        // const storyId = 'story' + this.props.storyId;
        return (
            <div className='Story'>
                <img src={'story_images/' + this.props.scene.id} />

                <div className='Story-text'>
                    <FormattedHTMLMessage
                        id={this.props.scene.id}
                    />
                    <span>
                        sdfjsdlkfjsldkfjsdlkjfkldsjdddfskfjdsklfjkwljeiofjwiojfweiojfowmciowjif fjiewofjweio fjwiefjwio fjewifjwoi fwjifwejo fwifjwio fjweio jfwifjewo fwfwejfojweif wefjweiofjweio fwejifjwof fweifojwo fw
                    </span>
                    {/* <FormattedHTMLMessage id={storyId} /> */}
                </div>
            </div>
        );
    }
}
