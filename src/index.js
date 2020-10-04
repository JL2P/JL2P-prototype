import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//시멘틱 UI 적용
import "semantic-ui-css/semantic.min.css";
import { Provider } from "mobx-react";
import TodoStore from "./Prototype/MainPages/Store/TodoStore";

ReactDOM.render(
  <Provider Store={TodoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
