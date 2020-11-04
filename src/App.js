import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import MessagePopUp from "./components/MessagePopup";
// import Instructions from "./components/Instructions"
import "./App.css";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">NexTris</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopUp />
        {/* <Instructions /> */}
      </div>
    </Provider>
  );
}

export default App;
