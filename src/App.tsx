import React from 'react';
import Header from "./components/Header";
import MDEditor from '@uiw/react-md-editor';
import {homeMD} from "./Readme";
import {EditorContainer} from "./style";

const App = () => {
  return (
    <main>
      <Header active={'home'}/>
      <EditorContainer data-color-mode={'light'}>
        <MDEditor.Markdown
          source={homeMD}
        />
      </EditorContainer>

    </main>
  );
}

export default App;
