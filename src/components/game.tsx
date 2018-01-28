import * as React from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import * as S from '../state';
import { Story } from './story';
import { Chat } from './chat';
import { state } from '../state';
import { PlayType } from '../game';

// import './game.css';

interface GameProps {
    state:S.State;
}

interface GameState {}

export class Game extends React.Component<GameProps, GameState> {

    public render() {

      const s = this.props.state;
      const play = s.game.current_play;
      const next = () => { s.game.position_in_playlist += 1; };

      if (play.type == PlayType.scene) {
        return (
          <Story scene={play} next={next}/>
        );
      }
      if (play.type == PlayType.chat) {
        return (
          <Chat chat={play} next={next} state={s}/>
        );
      }
      return <p/>;
    }
}
