import * as React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import * as S from './store';

interface AppProps {
  state:S.State;
}
interface AppState {}

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
          <h1 className='App-title'>ANGERY KITTENS</h1>
        </header>
        <p className='App-intro'>
          (っ' ▽' )ノ hello <code>FRIEND</code> please enjoy the comic
          PS: {text}
        </p>
        <div className='App-start' onClick={() => { console.log('hahaha'); }}>
          ..........................Click Blay
        </div>
        <footer className='App-footer'>
          <img src='cornercat.jpg' className='cornercat' alt='Cat in the corner' />
        </footer>
      </div>
    );
  }
}
