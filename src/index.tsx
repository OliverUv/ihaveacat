import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { register } from './registerServiceWorker';
import './index.css';
import { action } from 'mobx';

import * as S from './store';

async function init() {
  ReactDOM.render(
    <App state={S.state}/>,
    document.getElementById('root') as HTMLElement,
  );
  await register();
}

// tslint:disable-next-line
init();

setTimeout(
  action(() => {
    S.state.view = S.View.Game;
  }),
  5000,
);
