import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { action } from 'mobx';
import { observer } from 'mobx-react';

import './App.css';
import * as S from './state';
import { state } from './state';

interface AppProps {
  state:S.State;
}
interface AppState {}

const do_enter_game = action(() => {
  state.view = S.View.Game;
  state.game.n_finished_conversations += 1;
});

@observer
export class App extends React.Component<AppProps, {}> {
// export class App extends React.Component<AppProps, AppState> {
  public render() {
    let text = 'haha';
    if (this.props.state.view == S.View.StartMenu) {
      text = 'startmenu';
    }
    if (this.props.state.view == S.View.Game) {
      text = 'in the game!';
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='topcat.jpg' className='App-logo' alt='logo' />
          <h1 className='App-title'>ANGRY KITTENS</h1>
        </header>
        <p className='App-intro'>
          <FormattedHTMLMessage id='welcome' />
          PS: {text}
        </p>
        <div className='App-start' onClick={do_enter_game}>
          ..........................Click Blay
        </div>
        <footer className='App-footer'>
          <img src='cornercat.jpg' className='cornercat' alt='Cat in the corner' />
        </footer>
      </div>
    );
  }
}
