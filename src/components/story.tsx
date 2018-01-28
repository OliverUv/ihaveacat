import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import { Scene } from '../game';
import { TransKey } from '../trans';
import './story.css';

interface StoryProps {
  scene:Scene;
  next:() => void;
}

interface StoryState {
  clicked:boolean;
}

export class Story extends React.Component<StoryProps, StoryState> {
    constructor(props:StoryProps) {
      super(props);
      this.state = {
        clicked: false,
      };
    }
    public render() {
        // const storyId = 'story' + this.props.storyId;
        const on_next = () => {
          if (this.state.clicked == true) { return; }
          this.setState({clicked: true});
          this.props.next();
        };
        return (
            <div className='Story' onClick={on_next}>
                <img src={'story_images/' + this.props.scene.id} />

                <div className='Story-text'>
                    <span onClick={on_next}>
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
