import * as React from 'react';
import { Page } from 'react-onsenui';

import * as S from '../state';
import { Translation } from '../trans/zh_CN';

interface WelcomeProps {
    msg:Translation;
}

interface WelcomeState {}

export class Welcome extends React.Component<WelcomeProps, WelcomeState> {
    public render() {
        const msg = this.props.msg;

        return (
            <Page>
               <TimeBox />
               <span>{msg.game_title}</span>
            </Page>
        );
    }
}

class TimeBox extends React.Component {
    public render() {
        const date = new Date();

        return (
            <div>
               <span>{date.getHours()} : {date.getMinutes()}</span>
               <br />
               <span>{date.getMonth()}月{date.getDay()}日 星期{}</span>
            </div>
        );
    }
}