import React, { useState } from "react";
// import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";

import './app.scss'
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
import Footer from "./Components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app">
      <Header theme={theme} setTheme={setTheme} />
      <Body theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App;
