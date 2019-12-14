import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TwitchContextProvider from "./contexts/TwitchContext";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import Navigation from "./components/Navigation/Navigation";
import TopStreams from "./components/TopStreams/TopStreams";

function App() {
  return (
    <Router>
      <TwitchContextProvider>
        <Navigation />
        <div className="wrapper">
          <Route exact path="/" component={HomeHeader} />
          <Route exact path="/top-streams" component={TopStreams} />
        </div>
      </TwitchContextProvider>
    </Router>
  );
}

export default App;
