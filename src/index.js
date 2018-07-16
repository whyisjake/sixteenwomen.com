import React from "react";
import ReactDOM from "react-dom";
// import "import 'bootstrap/dist/css/bootstrap.css";
// import "import 'bootstrap/dist/css/font-awesome.css";
// import "import 'bootstrap/dist/css/replacer.css";
// import "import 'bootstrap/dist/css/site-style.css";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
