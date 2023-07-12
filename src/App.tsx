import React, {useState} from 'react';
import MDEditor from '@uiw/react-md-editor';
import {homeMD} from "./Readme";
import {ReactComponent as AuroraDark} from './assets/AuroraDark.svg'
import {ReactComponent as AuroraLogo} from './assets/Aurora.svg'
import {DarkModeSwitch} from "react-toggle-dark-mode";
import {Main} from './style/Style'
import {useCookies} from "react-cookie";

const App = () => {
  const [cookies, setCookies] = useCookies()

  const toggleDarkMode = () => {
    const checked: string = cookies.theme
    setCookies('theme', checked === 'dark' ? 'light' : 'dark', {
      sameSite: 'none',
      secure: true,
      path: '/'
    })
  };

  return (
    <Main>
      <header>
        <div className="header-box">
          {
            cookies.theme === 'dark' ?
              <AuroraLogo className={'aurora-logo'}/>
              : <AuroraDark className={'aurora-logo'}/>
          }

          <div className={'toggle-container'}>
            <DarkModeSwitch
              style={{marginBottom: '2rem'}}
              checked={cookies.theme === 'dark'}
              onChange={toggleDarkMode}
              size={'30px'}
              className={'toggle-button'}
            />
          </div>
        </div>
      </header>

      <div data-color-mode={cookies.theme === 'dark' ? 'dark' : 'light'} className={'editor-container'}>
        <MDEditor.Markdown
          source={homeMD}
        />
      </div>
    </Main>
  );
}

export default App;
