import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import { register } from './registerServiceWorker';
import './index.css';

async function init() {
  ReactDOM.render(
    <App />,
    document.getElementById('root') as HTMLElement,
  );
  await register();
}
// tslint:disable-next-line
init();
