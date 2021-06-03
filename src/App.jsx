import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import "./index.css";

const App = () => <div>This is header app <Header /></div>;

ReactDOM.render(<App />, document.getElementById("app"));
