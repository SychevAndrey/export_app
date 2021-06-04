import React from "react";
import ReactDOM from "react-dom";

import {RecoilRoot} from "recoil";

import Header from "./Header";
import "./index.css";

const App = () => <RecoilRoot>This is header app <Header /></RecoilRoot>;

ReactDOM.render(<App />, document.getElementById("app"));
