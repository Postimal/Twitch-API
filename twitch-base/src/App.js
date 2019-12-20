import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TwitchContextProvider from "./contexts/TwitchContext";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import Navigation from "./components/Navigation/Navigation";
import TopStreams from "./components/TopStreams/TopStreams";
import TopGames from './components/TopGames/TopGames';
import Footer from "./components/Footer/Footer";
import NoMatch from './components/NoMatch/NoMatch';
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <TwitchContextProvider>
        <ScrollToTop >
          <Navigation />
          <Switch>
              <Route exact path="/" component={HomeHeader} />
              <Route path="/top-streams" component={TopStreams} />
              <Route path="/top-games" component={TopGames} />
              {/* <Route path="/channel/:id" component={Channel} /> */}
              <Route component={NoMatch} />
          </Switch>
          <Footer />
        </ScrollToTop>
      </TwitchContextProvider>
    </Router>
  );
}

export default App;
