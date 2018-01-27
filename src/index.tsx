const en = require('react-intl/locale-data/en');
const zh = require('react-intl/locale-data/zh');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { action } from 'mobx';
import { register } from './registerServiceWorker';

import { IntlProvider, addLocaleData } from 'react-intl';
import './index.css';
import * as S from './state';
import { App } from './App';

import { en as en_msg } from './trans';
import { zh_CN as zh_CN_msg } from './trans';

const locale = 'en';
const messages = en_msg;

// const locale = 'zh';
// const messages = zh_CN_msg;

addLocaleData([...en, ...zh]);

async function init() {
  ReactDOM.render(
    <IntlProvider
        locale={locale}
        messages={messages}
        key={locale}>
      <App state={S.state}/>
    </IntlProvider>,
    document.getElementById('root') as HTMLElement,
  );
  await register();
}

// tslint:disable-next-line
init();
