import * as React from 'react';
import { Page } from 'react-onsenui';
import { FormattedHTMLMessage } from 'react-intl';

import * as S from '../state';
import { Translation } from '../trans/zh_CN';

interface WelcomeProps {
}

interface WelcomeState {}

export class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    public render() {
        return (
            <Page>
               <TimeBox />
               <span>
                   <FormattedHTMLMessage id='game_title' /> >>
               </span>
            </Page>
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
            <div>
               <span>{date.getHours()} : {date.getMinutes()}</span>
               <br />
               <span>{date.getMonth() + 1}月{date.getDate()}日 星期{weekDay}</span>
            </div>
        );
    }
}