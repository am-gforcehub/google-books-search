// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Home from "./pages/home";
import Bookshelf from "./pages/bookshelf";
import Search from "./pages/search";
import NavBar from "./components/NavBar/NavBar";

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={Search} />
      <Route exact path="/bookshelf" component={Bookshelf} />
      <Route exact path="/search" component={Search} />
    </div>
  </Router>
);

export default App;
