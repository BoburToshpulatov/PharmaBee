import { BrowserRouter } from "react-router-dom";
import "./App.css";

import RouterComponents from "./router";

function App() {
  return (
    <BrowserRouter>
      <RouterComponents />
    </BrowserRouter>
  );
}

export default App;
