const en = require('react-intl/locale-data/en');
const zh = require('react-intl/locale-data/zh');
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { register } from './registerServiceWorker';
import { observer } from 'mobx-react';

import { IntlProvider, addLocaleData } from 'react-intl';
import './index.css';
import * as S from './state';
import { App } from './App';

import { messages, LocaleCode } from './trans';

import { Settings, Credits, Game, Welcome } from 'components';

interface MainProps {
  state:S.State;
}

// This Main class mostly exists so that we can wrap the
// IntlProvider so that it reacts to mobx state updates
@observer
export class Main extends React.Component<MainProps, {}> {
  public render() {

    const locale = this.props.state.settings.locale;
    const msg = messages[locale];

    let page = <App state={S.state} />;

    switch (S.state.view) {
      case S.View.StartMenu:
        page = <Welcome />;
        break;
      case S.View.Game:
        page = <Game state={S.state} />;
        break;
      case S.View.Settings:
        page = <Settings state={S.state} />;
        break;
      case S.View.Credits:
        page = <Credits />;
        break;
    }

    return (
      <IntlProvider
          locale={LocaleCode[S.state.settings.locale]}
          messages={messages[S.state.settings.locale]}
          key={LocaleCode[S.state.settings.locale]}>
          {page}
      </IntlProvider>
    );
  }
}

async function init() {

  addLocaleData([...en, ...zh]);
  S.init();
  set_debug_functions();

  ReactDOM.render(
      <Main state={S.state} />,
      document.getElementById('root') as HTMLElement,
  );
  await register();
}

function set_debug_functions() {
  (window as any)['to_chinese'] = function to_chinese() {
    S.state.settings.locale = LocaleCode.zh;
  };

  (window as any)['to_english'] = function to_english() {
    S.state.settings.locale = LocaleCode.en;
  };
}

// tslint:disable-next-line
init();
