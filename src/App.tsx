import * as React from 'react';
import './App.css';

export class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src='topcat.jpg' className='App-logo' alt='logo' />
          <h1 className='App-title'>ANGERY KITTENS</h1>
        </header>
        <p className='App-intro'>
          (っ' ▽' )ノ hello <code>FRIEND</code> please enjoy the comic
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
