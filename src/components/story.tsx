import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import './story.css';

interface StoryProps {
    // storyId:number;
}

interface StoryState {}

export class Story extends React.Component<StoryProps, StoryState> {
    public handleClick = () => {

    }

    public render() {
        // const storyId = 'story' + this.props.storyId;
        return (
            <div className='Story'>
                <img src='welcome.jpg' />

                <div className='Story-text'>
                    <span>
                        sdfjsdlkfjsldkfjsdlkjfkldsjdddfskfjdsklfjkwljeiofjwiojfweiojfowmciowjif fjiewofjweio fjwiefjwio fjewifjwoi fwjifwejo fwifjwio fjweio jfwifjewo fwfwejfojweif wefjweiofjweio fwejifjwof fweifojwo fw
                    </span>
                    {/* <FormattedHTMLMessage id={storyId} /> */}
                </div>
            </div>
        );
    }
}