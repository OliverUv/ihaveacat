import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import * as S from '../state';
import './welcome.css';

interface WelcomeProps {
    state:S.State;
}

interface WelcomeState {}

export class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    public handleClick = () => {
      this.props.state.view = S.View.Game;
    }

    public render() {
        return (
            <div className='Welcome' onClick={this.handleClick}>
                <img src='welcome.jpg' />
                <TimeBox />
                <div className='Welcome-game-title'>
                    <FormattedHTMLMessage id='game_title' /> >
                </div>
            </div>
        );
    }
}

class TimeBox extends React.Component {
    public render() {
        const date = new Date();
        let weekDay = '';

        switch (date.getDay()) {
            case 1:
                weekDay = '一';
                break;
            case 2:
                weekDay = '二';
                break;
            case 3:
                weekDay = '三';
                break;
            case 4:
                weekDay = '四';
                break;
            case 5:
                weekDay = '五';
                break;
            case 6:
                weekDay = '六';
                break;
            case 0:
                weekDay = '日';
                break;
            default:
                weekDay = '什么';
                break;
        }

        return (
            <div className='Welcome-TimeBox'>
               <span className='Welcome-TimeBox-time'>
                   {date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}
                   :
                   {date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}
               </span>
               <br />
               <span className='Welcome-TimeBox-date'>
                   {date.getMonth() + 1}月{date.getDate()}日 星期{weekDay}
                </span>
            </div>
        );
    }
}
