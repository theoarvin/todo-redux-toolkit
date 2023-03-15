import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "@picocss/pico";

import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);

// mettre ses composants dans un <Provider> pour avoir accès aux données du store redux
